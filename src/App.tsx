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
      
      {/* HERO SECTION */}
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
             {/* Імітація кнопок сторів */}
             <button className="store-btn">
                <span></span> App Store
             </button>
             <button className="store-btn google">
                <span>▶</span> Google Play
             </button>
          </motion.div>
        </div>

        {/* 3D PHONE MOCKUP */}
        <motion.div 
           initial={{ opacity: 0, rotateZ: 5, rotateY: 20, scale: 0.8 }}
           whileInView={{ opacity: 1, rotateZ: 0, rotateY: -15, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="phone-wrapper"
        >
           <div className="phone-mockup">
             
              
              <div className="phone-screen">
                  {/* Заміни це посилання на вертикальний скріншот свого мобільного додатку! */}
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

      {/* FEATURES */}
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
      
    </div>
  );
}

export default App;