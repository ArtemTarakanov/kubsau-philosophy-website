import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo-kubsau.svg" alt="КубГАУ" className="logo-icon" />
          <div className="logo-text-wrapper">
            <span className="logo-text">
              Философия <span className="logo-highlight">КубГАУ</span>
            </span>
          </div>
        </div>
        <nav className="nav">
          <a href="#articles">Статьи</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
