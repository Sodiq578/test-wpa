import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="header-content">
          <img src={logo} className="mobile-logo" alt="logo" />
          <h1 className="mobile-title">React Mobile</h1>
          <button 
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => setMenuOpen(false)}>Bosh sahifa</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>Haqida</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Aloqa</a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="mobile-main">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h2>Mobile ilovaga xush kelibsiz!</h2>
            <p>Bu React bilan yaratilgan mobile uchun moslashtirilgan ilova</p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards-container">
          <div className="mobile-card">
            <div className="card-icon">📱</div>
            <h3>Mobile First</h3>
            <p>To'liq mobile qurilmalar uchun optimallashtirilgan</p>
          </div>

          <div className="mobile-card">
            <div className="card-icon">⚡</div>
            <h3>Tez yuklanadi</h3>
            <p>Optimallashtirilgan kod bilan tezkor ishlash</p>
          </div>

          <div className="mobile-card">
            <div className="card-icon">🎨</div>
            <h3>Zamonaviy dizayn</h3>
            <p>Material Design tamoyillari asosida</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="info-section">
          <div className="code-block">
            <code>src/App.js</code> - faylini tahrirlang
          </div>
          
          <button className="mobile-button">
            Yuklab olish (APK)
          </button>

          <a
            className="mobile-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React haqida o'rganish →
          </a>
        </div>

        {/* Features List */}
        <div className="features-section">
          <h3>Imkoniyatlar:</h3>
          <ul className="features-list">
            <li>✓ Mobile uchun moslashuvchan dizayn</li>
            <li>✓ Touch uchun optimallashtirilgan</li>
            <li>✓ Tez yuklanadigan sahifalar</li>
            <li>✓ PWA sifatida ishlatish mumkin</li>
          </ul>
        </div>
      </main>

      {/* Mobile Footer */}
      <footer className="mobile-footer">
        <div className="footer-content">
          <p>© 2024 React Mobile Ilova</p>
          <p>Versiya 1.0.0</p>
        </div>
      </footer>
    </div>
  );
}

export default App;