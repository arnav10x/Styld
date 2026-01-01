import React from 'react'
import './SocialProof.css'

function SocialProof() {
  return (
    <section className="social-proof section">
      <div className="container">
        <div className="social-proof-content text-center">
          <p className="social-proof-text fade-in">
            Used by thousands of creators
          </p>
          <p className="social-proof-text fade-in" style={{ animationDelay: '0.1s' }}>
            Trusted by fashion-forward users
          </p>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
