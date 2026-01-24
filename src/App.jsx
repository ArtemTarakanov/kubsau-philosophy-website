import { useState, lazy, Suspense, useCallback, useMemo } from 'react'
import MainSection from './components/MainSection'
import Articles from './components/Articles'
import Footer from './components/Footer'
import './App.css'

const ArticleView = lazy(() => import('./components/ArticleView'))
const Login = lazy(() => import('./components/Login'))
const AdminForm = lazy(() => import('./components/AdminForm'))
const Popup = lazy(() => import('./components/Popup'))

function App() {
  const [article, setArticle] = useState(null)
  const [admin, setAdmin] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [posts, setPosts] = useState([])
  const [editing, setEditing] = useState(null)
  const [popup, setPopup] = useState({ show: false, title: '', msg: '', type: 'info', confirm: null })

  const alert = useCallback((title, msg) => {
    setPopup({ show: true, title, msg, type: 'info', confirm: null })
  }, [])

  const confirm = useCallback((title, msg, onOk) => {
    setPopup({ show: true, title, msg, type: 'confirm', confirm: onOk })
  }, [])

  const closePopup = useCallback(() => {
    setPopup({ show: false, title: '', msg: '', type: 'info', confirm: null })
  }, [])

  const handleConfirm = useCallback(() => {
    if (popup.confirm) popup.confirm()
    closePopup()
  }, [popup, closePopup])

  const openArticle = useCallback((a) => {
    setArticle(a)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const backToArticles = useCallback(() => {
    setArticle(null)
    setTimeout(() => {
      document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }, [])

  const login = useCallback(() => {
    setAdmin(true)
    setShowLogin(false)
  }, [])

  const logout = useCallback(() => {
    setAdmin(false)
    setShowForm(false)
    setShowLogin(false)
  }, [])

  const addPost = useCallback((p) => {
    setPosts(prev => [p, ...prev])
  }, [])

  const deletePost = useCallback((id) => {
    confirm(
      'Удаление статьи',
      'Вы уверены, что хотите удалить эту статью?',
      () => {
        setPosts(prev => prev.filter(p => p.id !== id))
        alert('Успешно', 'Статья успешно удалена')
      }
    )
  }, [confirm, alert])

  const editPost = useCallback((p) => {
    setEditing(p)
    setShowForm(true)
  }, [])

  const updatePost = useCallback((updated) => {
    setPosts(prev => prev.map(p => p.id === updated.id ? updated : p))
    setEditing(null)
  }, [])

  const closeForm = useCallback(() => {
    setShowForm(false)
    setEditing(null)
  }, [])

  const mainSectionProps = useMemo(() => ({
    onAdminClick: () => setShowLogin(true),
    isAdmin: admin,
    onLogout: logout
  }), [admin, logout])

  const articlesProps = useMemo(() => ({
    onClick: openArticle,
    customPosts: posts,
    isAdmin: admin,
    onAdd: () => setShowForm(true),
    onDelete: deletePost,
    onEdit: editPost
  }), [openArticle, posts, admin, deletePost, editPost])

  return (
    <div className="app">
      <Suspense fallback={<div />}>
        {!article ? (
          <>
            <MainSection key="main-section" {...mainSectionProps} />
            <Articles key="articles" {...articlesProps} />
            <Footer />
          </>
        ) : (
          <>
            <ArticleView 
              key={article.id}
              article={article} 
              onBack={backToArticles}
              onClick={openArticle}
            />
            <Footer />
          </>
        )}

        {showLogin && !admin && (
          <Login 
            key="login"
            onLogin={login}
            onClose={() => setShowLogin(false)}
          />
        )}

        {showForm && admin && (
          <AdminForm 
            key={editing ? `edit-${editing.id}` : 'new'}
            onAdd={addPost}
            onClose={closeForm}
            editing={editing}
            onUpdate={updatePost}
            alert={alert}
          />
        )}

        {popup.show && (
          <Popup
            key="popup"
            show={popup.show}
            onClose={closePopup}
            title={popup.title}
            msg={popup.msg}
            type={popup.type}
            onConfirm={handleConfirm}
          />
        )}
      </Suspense>
    </div>
  )
}

export default App
