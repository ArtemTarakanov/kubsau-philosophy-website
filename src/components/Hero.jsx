import { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  return (
    <section className={`hero ${isLoaded ? 'hero-loaded' : ''}`}>
      <div className="hero-video-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          poster="/background-2.jpg"
        >
          <source src="/nature.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="hero-vine hero-vine-left"></div>
      <div className="hero-vine hero-vine-right"></div>
      
      <header className="hero-header">
        <div className="hero-logo">
          <img src="/logo-kubsau.svg" alt="Лого" />
          <span className="hero-logo-text">
            Философия <span className="hero-logo-accent">КубГАУ</span>
          </span>
        </div>
        
        <nav className="hero-nav">
          <a href="#home" className="active">ГЛАВНАЯ</a>
          <a href="#about">О НАС</a>
          <a href="#contact">КОНТАКТЫ</a>
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
            <img src="/background-2.jpg" alt="Природа" className="hero-circle-img" />
            <img src="/flower.png" alt="" className="hero-leaf hero-leaf-1" />
            <img src="/flower.png" alt="" className="hero-leaf hero-leaf-2" />
            <img src="/flower.png" alt="" className="hero-leaf hero-leaf-3" />
            <div className="hero-blob"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
