import React from 'react';
import { motion } from 'framer-motion';
import './App.css'; 

function App() {
  // Анімація появи (плавно знизу вгору)
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Каскадна анімація для карток 
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="landing-container">
      
      {/* 1. HERO SECTION (Головний екран) */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial="hidden" whileInView="visible" variants={fadeInUp}
            className="hero-title"
          >
            Discover Cinema <br /> 
            <span className="text-gradient">Without Limits.</span>
          </motion.h1>

          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeInUp}
            className="hero-subtitle"
          >
            <strong>Cinelink</strong> is your ultimate guide to movies, actors, and ratings. 
            Powered by modern web technologies and real-time data.
          </motion.p>

          <motion.a
            href="http://localhost:5173"
            initial="hidden" whileInView="visible" variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Open Cinelink App
          </motion.a>
        </div>

        {/* 3D Mockup (Ефект нахиленого екрану) */}
        <motion.div 
           initial={{ opacity: 0, rotateX: 20, rotateY: -20, scale: 0.9 }}
           whileInView={{ opacity: 1, rotateX: 10, rotateY: -10, scale: 1 }}
           transition={{ duration: 1.2 }}
           className="hero-image-wrapper"
        >
           <div className="mockup-window">
              <div className="mockup-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="mockup-address-bar">cinelink.com</span>
              </div>
              {/* Тут картинка-заглушка. Пізніше зробиш скріншот свого готового сайту і вставиш сюди */}
              <img 
                src="https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg" 
                alt="Cinelink Interface" 
                className="mockup-img"
              />
              <div className="mockup-overlay">
                <h2>Cinelink Web Interface</h2>
              </div>
           </div>
        </motion.div>
      </section>

      {/* 2. FEATURES GRID  */}
      <section className="features-section">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="section-header"
        >
          Why Cinelink?
        </motion.h2>

        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: "Real-time Data", desc: "Always up-to-date movie stats & posters.", icon: "🚀" },
            { title: "Smooth UX", desc: "Buttery smooth interactions with React.", icon: "✨" },
            { title: "Smart Search", desc: "Find any movie or actor in milliseconds.", icon: "🔍" }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      
      <section className="tech-section">
        <p>Built with modern stack</p>
        <div className="tech-logos">
           <span>React</span>
           <span>TypeScript</span>
           <span>Vite</span>
           <span>Framer Motion</span>
           <span>TMDB API</span>
        </div>
      </section>
    </div>
  );
}

export default App;