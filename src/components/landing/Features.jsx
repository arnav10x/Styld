import React from 'react'
import './Features.css'

function Features() {
  return (
    <section className="features section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-item fade-in">
            <div className="feature-visual">
              <div className="feature-mockup">
                <div className="mockup-phone">
                  <div className="mockup-screen">
                    <div className="mockup-upload">
                      <div className="upload-icon">📷</div>
                      <div className="upload-text">Upload clothing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-content">
              <h3>Upload from photos</h3>
              <p>Transform your real clothing into clean, isolated assets ready for styling.</p>
            </div>
          </div>

          <div className="feature-item fade-in">
            <div className="feature-visual">
              <div className="feature-mockup">
                <div className="mockup-carousel">
                  <div className="carousel-container">
                    <div className="carousel-item">👕</div>
                    <div className="carousel-item">👖</div>
                    <div className="carousel-item">👟</div>
                  </div>
                  <div className="carousel-indicators">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-content">
              <h3>Build outfits</h3>
              <p>Mix and match pieces with our intuitive carousel-based outfit builder.</p>
            </div>
          </div>

          <div className="feature-item fade-in">
            <div className="feature-visual">
              <div className="feature-mockup">
                <div className="mockup-shop">
                  <div className="shop-outfit">
                    <div className="shop-item">Item 1</div>
                    <div className="shop-item">Item 2</div>
                    <div className="shop-item">Item 3</div>
                  </div>
                  <div className="shop-button">Shop outfit</div>
                </div>
              </div>
            </div>
            <div className="feature-content">
              <h3>Shop directly</h3>
              <p>Click any outfit to discover and purchase items from trusted brands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
