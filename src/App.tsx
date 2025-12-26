import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import homeScreenImg from './assets/Home.png';
function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="landing-container">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeInUp}
            className="app-badge"
          >
            Coming Soon on iOS & Android
          </motion.div>

          <motion.h1 
            initial="hidden" whileInView="visible" variants={fadeInUp}
            className="hero-title"
          >
            Your Cinema. <br /> 
            <span className="text-gradient">In Your Pocket.</span>
          </motion.h1>

          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeInUp}
            className="hero-subtitle"
          >
            <strong>Cinelink App</strong> gives you instant access to thousands of movies. 
            Track what you watch, rate films, and discover new favorites on the go.
          </motion.p>

          <motion.div 
            className="store-buttons"
            initial="hidden" whileInView="visible" variants={fadeInUp}
          >
             {/* App Store */}
             <button className="store-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" style={{width: 20}} />
                App Store
             </button>
             {/* Google Play */}
             <button className="store-btn google">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google" style={{width: 20}} />
                Google Play
             </button>
          </motion.div>
        </div>

        {/* PHONE MOCKUP */}
        <motion.div 
           initial={{ opacity: 0, rotateZ: 5, rotateY: 20, scale: 0.8 }}
           whileInView={{ opacity: 1, rotateZ: 0, rotateY: -15, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="phone-wrapper"
        >
           <div className="phone-mockup">
              <div className="phone-notch">
                <div className="camera"></div>
                <div className="speaker"></div>
              </div>
              <div className="phone-screen">
                  {/* Заміни посилання на свій вертикальний скріншот, якщо є */}
                  <img 
                    src={homeScreenImg}
                    alt="App Screen" 
                    className="screen-img"
                  />
                  <div className="screen-overlay">
                    <p>Movie of the day</p>
                  </div>
              </div>
           </div>
        </motion.div>
      </section>

      {/* 2. STATS SECTION (Нове!) */}
      <section className="stats-section">
        <div className="stats-grid">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{duration: 0.5}}
              className="stat-item"
            >
                <span className="stat-number">850k+</span>
                <span className="stat-label">Movies & Shows</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{duration: 0.5, delay: 0.1}}
              className="stat-item"
            >
                <span className="stat-number">2M+</span>
                <span className="stat-label">Actors & Crew</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{duration: 0.5, delay: 0.2}}
              className="stat-item"
            >
                {/* Символ блискавки для швидкості/оновлень */}
                <span className="stat-number" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}}>
                    Real-time
                </span>
                <span className="stat-label">Data Updates</span>
            </motion.div>
        </div>
      </section>

      {/* 3. FEATURES */}
      <section className="features-section">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="section-header"
        >
          App Features
        </motion.h2>

        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: "Offline Mode", desc: "Save movies to your watchlist locally.", icon: "⚡" },
            { title: "Notifications", desc: "Get notified when new episodes drop.", icon: "🔔" },
            { title: "Dark Mode", desc: "Eye-friendly interface for night owls.", icon: "🌙" }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. TESTIMONIALS (Нове!) */}
      <section className="reviews-section">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-header">
            What Users Say
          </motion.h2>
          <div className="reviews-grid">
              {[
                { name: "Влад. С", text: "Ну додаток взагалі супер.", stars: "★★★★★" },
                { name: "Тарас. Г", text: "Ніяких мінусів не бачу, ставлю лайк.", stars: "★★★★★" },
                { name: "Марко Г.", text: "Ідеальна бібліотека з хорошим стилем ", stars: "★★★★★" }
              ].map((review, i) => (
                  <motion.div 
                    key={i} 
                    className="review-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                      <div className="stars">{review.stars}</div>
                      <p>"{review.text}"</p>
                      <h4>{review.name}</h4>
                  </motion.div>
              ))}
          </div>
      </section>

      {/* 5. FOOTER (Нове!) */}
      <footer className="footer">
          <div className="footer-content">
              <h3>Cinelink</h3>
              <div className="footer-links">
                  <a href="#">Contact</a>
              </div>
          </div>
      </footer>
      
    </div>
  );
}

export default App;