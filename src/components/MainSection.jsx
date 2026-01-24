import { useEffect, useState, memo, useRef } from 'react'
import './MainSection.css'

const MainSection = memo(({ onAdminClick, isAdmin, onLogout }) => {
  const [loaded, setLoaded] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!hasAnimated.current) {
      const timer = setTimeout(() => {
        setLoaded(true)
        hasAnimated.current = true
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setLoaded(true)
    }
  }, [])

  const handleBtn = () => {
    isAdmin ? onLogout() : onAdminClick()
  }

  return (
    <section className={`hero ${loaded ? 'hero-loaded' : ''}`}>
      <div className="hero-video-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="metadata"
          poster="/background-2.jpg"
        >
          <source src="/nature.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="hero-vine hero-vine-left" />
      <div className="hero-vine hero-vine-right" />
      
      <header className="hero-header">
        <div className="hero-logo">
          <img src="/logo-kubsau.svg" alt="Лого" loading="lazy" />
          <span className="hero-logo-text">
            Философия <span className="hero-logo-accent">КубГАУ</span>
          </span>
        </div>
        
        <nav className="hero-nav">
          <a href="#home" className="active">ГЛАВНАЯ</a>
          <a href="#about">О НАС</a>
          <a href="#contact">КОНТАКТЫ</a>
          <button className="admin-login-btn" onClick={handleBtn}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="currentColor"/>
            </svg>
            {isAdmin ? 'ВЫЙТИ' : 'АДМИН'}
          </button>
        </nav>
      </header>

      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-main-title">
            ПОЧУВСТВУЙ<br/>ПРИРОДУ
          </h1>
          <p className="hero-subtitle">Наша цель - сделать мудрость доступной каждому</p>
          
          <a href="#articles" className="hero-btn">ЧИТАТЬ СТАТЬИ</a>
        </div>

        <div className="hero-right">
          <div className="hero-circle-frame">
            <img src="/background-2.jpg" alt="Природа" className="hero-circle-img" loading="lazy" />
            <img src="/flower.png" alt="" className="hero-leaf hero-leaf-1" loading="lazy" />
            <img src="/flower.png" alt="" className="hero-leaf hero-leaf-2" loading="lazy" />
            <img src="/flower.png" alt="" className="hero-leaf hero-leaf-3" loading="lazy" />
            <div className="hero-blob" />
          </div>
        </div>
      </div>
    </section>
  )
})

MainSection.displayName = 'MainSection'

export default MainSection
