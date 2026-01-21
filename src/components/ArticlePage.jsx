import './ArticlePage.css'

const articles = [
  {
    id: 1,
    title: 'Экология сознания',
    excerpt: 'Как наше внутреннее состояние отражает состояние природы вокруг нас',
    image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Ритмы природы',
    excerpt: 'Исследование циклических процессов в природе и их влияние на человека',
    image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Медитация в движении',
    excerpt: 'Практика осознанности через взаимодействие с природными элементами',
    image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800',
  }
]

function ArticlePage({ article, onBack, onArticleClick }) {
  const otherArticles = articles.filter(a => a.id !== article.id)
  
  return (
    <div className="article-page">
      <div className="article-page-content">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Назад к статьям
        </button>
        
        <div className="article-header">
          <img src={article.image} alt={article.title} />
          <h1>{article.title}</h1>
        </div>
        
        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <div className="other-articles">
          <h3>Другие статьи</h3>
          <div className="other-articles-grid">
            {otherArticles.map(otherArticle => (
              <div key={otherArticle.id} className="other-article-card">
                <div className="other-article-image">
                  <img src={otherArticle.image} alt={otherArticle.title} />
                </div>
                <div className="other-article-body">
                  <h4>{otherArticle.title}</h4>
                  <p>{otherArticle.excerpt}</p>
                  <button 
                    className="other-article-btn"
                    onClick={() => onArticleClick(otherArticle)}
                  >
                    ЧИТАТЬ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
