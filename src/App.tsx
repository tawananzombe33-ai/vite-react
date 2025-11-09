import { useState, useEffect } from 'react'  
import './App.css'

function App() {  
  const [glitchText, setGlitchText] = useState('METATRON878')  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {  
    const interval = setInterval(() => {  
      const glitchChars = '!@#$%^&*(){}[]<>?/|\\~`'  
      const randomGlitch = Math.random() > 0.9  
      if (randomGlitch) {  
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]  
        const randomIndex = Math.floor(Math.random() * 11)  
        const textArray = 'METATRON878'.split('')  
        textArray[randomIndex] = randomChar  
        setGlitchText(textArray.join(''))  
        setTimeout(() => setGlitchText('METATRON878'), 100)  
      }  
    }, 150)

    return () => clearInterval(interval)  
  }, [])

  const handleMouseMove = (e) => {  
    setMousePos({ x: e.clientX, y: e.clientY })  
  }

  return (  
    <div className="app-container" onMouseMove={handleMouseMove}>  
      <div className="bg-animation">  
        <div className="circle circle-1"></div>  
        <div className="circle circle-2"></div>  
        <div className="circle circle-3"></div>  
      </div>

      <div  
        className="mouse-follower"  
        style={{  
          left: `${mousePos.x}px`,  
          top: `${mousePos.y}px`  
        }}  
      ></div>

      <div className="content">  
        <div className="glitch-container">  
          <h1 className="glitch-text" data-text={glitchText}>  
            {glitchText}  
          </h1>  
        </div>

        <p className="subtitle">  
          <span className="code-bracket">{'<'}</span>  
          Digital Architect | AI Pioneer | Code Wizard  
          <span className="code-bracket">{' />'}</span>  
        </p>

        <div className="stats-grid">  
          <div className="stat-card">  
            <div className="stat-number">100+</div>  
            <div className="stat-label">Projects Built</div>  
          </div>  
          <div className="stat-card">  
            <div className="stat-number">24/7</div>  
            <div className="stat-label">Always Active</div>  
          </div>  
          <div className="stat-card">  
            <div className="stat-number">∞</div>  
            <div className="stat-label">Ideas Generated</div>  
          </div>  
        </div>

        <div className="cta-buttons">  
          <button className="btn btn-primary">  
            <span>Launch Project</span>  
            <span className="btn-glow"></span>  
          </button>  
          <button className="btn btn-secondary">  
            <span>View Portfolio</span>  
          </button>  
        </div>

        <div className="tech-stack">  
          <span className="tech-tag">React</span>  
          <span className="tech-tag">Vite</span>  
          <span className="tech-tag">AI/ML</span>  
          <span className="tech-tag">Vercel</span>  
          <span className="tech-tag">GitHub</span>  
        </div>  
      </div>

      <footer className="footer">  
        <p>© 2024 Metatron878 | Built with 🔥 by Metatron Nzombe</p>  
      </footer>  
    </div>  
  )  
}

export default App
