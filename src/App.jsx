import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ArticleGrid from './components/ArticleGrid'
import ArticlePage from './components/ArticlePage'
import './App.css'

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const handleArticleClick = (article) => {
    setSelectedArticle(article)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToGrid = () => {
    setSelectedArticle(null)
    setTimeout(() => {
      const articleGrid = document.getElementById('articles')
      if (articleGrid) {
        articleGrid.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <div className="app">
      {!selectedArticle ? (
        <>
          <Hero />
          <ArticleGrid onArticleClick={handleArticleClick} />
        </>
      ) : (
        <ArticlePage 
          article={selectedArticle} 
          onBack={handleBackToGrid}
          onArticleClick={handleArticleClick}
        />
      )}
    </div>
  )
}

export default App
