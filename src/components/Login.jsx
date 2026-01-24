import { useState, memo, useCallback } from 'react'
import './Login.css'

const Login = memo(({ onLogin, onClose }) => {
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')

  const submit = useCallback((e) => {
    e.preventDefault()
    if (pass === 'admin123') {
      onLogin()
    } else {
      setErr('Неверный пароль')
    }
  }, [pass, onLogin])

  return (
    <div className="admin-login-overlay" onClick={onClose}>
      <div className="admin-login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Вход для администратора</h2>
        <form onSubmit={submit}>
          {err && <div className="error-message">{err}</div>}
          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Введите пароль"
              required
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="login-btn">Войти</button>
        </form>
      </div>
    </div>
  )
})

Login.displayName = 'Login'

export default Login
