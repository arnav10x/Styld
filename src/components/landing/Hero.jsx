import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Build outfits from real clothes.<br />
            Share them. Shop them.
          </h1>
          <p className="hero-subtitle">
            Upload your wardrobe, create outfits, discover styles.
          </p>
          <div className="hero-cta">
            <Link to="/app" className="btn-primary">
              Create account
            </Link>
            <Link to="/app" className="btn-secondary">
              Explore outfits
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
