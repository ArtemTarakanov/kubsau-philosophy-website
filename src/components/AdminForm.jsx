import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './AdminForm.css'

function AdminForm({ onAdd, onClose, editing, onUpdate, alert }) {
  const [title, setTitle] = useState(editing?.title || '')
  const [excerpt, setExcerpt] = useState(editing?.excerpt || '')
  const [txt, setTxt] = useState(editing?.content || '')
  const [imgUrl, setImgUrl] = useState(editing?.image || '')
  const [preview, setPreview] = useState(editing?.image || '')

  useEffect(() => {
    if (editing) {
      setTitle(editing.title)
      setExcerpt(editing.excerpt)
      setTxt(editing.content)
      setImgUrl(editing.image)
      setPreview(editing.image)
    }
  }, [editing])

  const imgChange = (e) => {
    const f = e.target.files[0]
    if (f) {
      const r = new FileReader()
      r.onloadend = () => setPreview(r.result)
      r.readAsDataURL(f)
    }
  }

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [2, 3, false] }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['blockquote'],
        ['clean']
      ],
      handlers: {}
    }
  }

  const formats = ['header', 'bold', 'italic', 'underline', 'list', 'bullet', 'blockquote']

  const submit = (e) => {
    e.preventDefault()
    
    if (editing) {
      const upd = {
        ...editing,
        title,
        excerpt,
        content: txt,
        image: preview || imgUrl || editing.image
      }
      onUpdate(upd)
      alert('Успешно', 'Статья обновлена!')
    } else {
      const newPost = {
        id: Date.now(),
        title,
        excerpt,
        content: txt,
        image: preview || imgUrl || 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
      onAdd(newPost)
      alert('Успешно', 'Статья добавлена!')
    }
    
    setTitle('')
    setExcerpt('')
    setTxt('')
    setImgUrl('')
    setPreview('')
    
    onClose()
  }

  return (
    <div className="admin-panel-overlay" onClick={onClose}>
      <div className="admin-panel-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-panel-header">
          <h2>{editing ? 'Редактирование' : 'Новая статья'}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={submit} className="admin-form">
          <div className="form-group">
            <label>Заголовок *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Введите заголовок"
              required
            />
          </div>

          <div className="form-group">
            <label>Краткое описание *</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Краткое описание"
              rows="2"
              required
            />
          </div>

          <div className="form-group">
            <label>Изображение</label>
            <div className="image-upload-group">
              <input
                type="file"
                accept="image/*"
                onChange={imgChange}
                id="image-upload"
              />
              <label htmlFor="image-upload" className="upload-label">
                Загрузить изображение
              </label>
              <span className="or-text">или</span>
              <input
                type="url"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                placeholder="URL изображения"
              />
            </div>
            {(preview || imgUrl) && (
              <div className="image-preview">
                <img src={preview || imgUrl} alt="Preview" />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Содержание *</label>
            <ReactQuill 
              theme="snow"
              value={txt}
              onChange={setTxt}
              modules={modules}
              formats={formats}
              placeholder="Введите текст статьи..."
              className="quill-editor"
            />
          </div>

          <button type="submit" className="submit-btn">
            {editing ? 'Обновить' : 'Добавить'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminForm
