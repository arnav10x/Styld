import React from 'react'
import { Link } from 'react-router-dom'
import './FinalCTA.css'

function FinalCTA() {
  return (
    <section className="final-cta section">
      <div className="container">
        <div className="final-cta-content text-center fade-in">
          <h2 className="final-cta-title">
            Ready to build your style?
          </h2>
          <p className="final-cta-subtitle">
            Join thousands creating and sharing outfits every day.
          </p>
          <Link to="/app" className="btn-primary final-cta-button">
            Get started
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
