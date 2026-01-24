import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo-kubsau.svg" alt="КубГАУ" />
            <span>Философия КубГАУ</span>
          </div>
          <p className="footer-desc">
            Философские размышления о природе, сознании и гармонии
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Навигация</h4>
            <a href="#home">Главная</a>
            <a href="#articles">Статьи</a>
            <a href="#about">О нас</a>
            <a href="#contact">Контакты</a>
          </div>

          <div className="footer-col">
            <h4>Контакты</h4>
            <p>Краснодар, Россия</p>
            <p>КубГАУ</p>
            <a href="mailto:info@kubsau.ru">info@kubsau.ru</a>
          </div>
        </div>
      </div>

      <div className="footer-creators">
        <p className="creators-title">Создано с любовью</p>
        <div className="creators-list">
          <div className="creator">
            <span className="creator-name">Николай Голубцов</span>
            <div className="creator-socials">
              <a href="https://t.me/shouldcleanmyroom" target="_blank" rel="noopener noreferrer" title="Telegram">
                <img src="/telegram.svg" alt="Telegram" />
              </a>
              <a href="https://github.com/NikolayViktorovich" target="_blank" rel="noopener noreferrer" title="GitHub">
                <img src="/github.svg" alt="GitHub" />
              </a>
            </div>
          </div>
          <div className="creator">
            <span className="creator-name">Артем Тараканов</span>
            <div className="creator-socials">
              <a href="https://t.me/tarakanofvw" target="_blank" rel="noopener noreferrer" title="Telegram">
                <img src="/telegram.svg" alt="Telegram" />
              </a>
              <a href="https://github.com/ArtemTarakanov" target="_blank" rel="noopener noreferrer" title="GitHub">
                <img src="/github.svg" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} КубГАУ. Все права защищены</p>
      </div>
    </footer>
  )
}

export default Footer
