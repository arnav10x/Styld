import React, { useState, useRef } from 'react'
import ToggleSwitch from './ToggleSwitch'
import './OutfitBuilder.css'

function OutfitBuilder() {
  const [selectedTop, setSelectedTop] = useState(0)
  const [selectedBottom, setSelectedBottom] = useState(0)
  const [selectedShoes, setSelectedShoes] = useState(0)
  const [showTops, setShowTops] = useState(true)
  const [showBottoms, setShowBottoms] = useState(true)
  const [showShoes, setShowShoes] = useState(true)
  
  const topsRef = useRef(null)
  const bottomsRef = useRef(null)
  const shoesRef = useRef(null)

  // Mock clothing data
  const tops = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    image: `https://picsum.photos/300/400?random=${100 + i}`,
    name: `Top ${i + 1}`
  }))

  const bottoms = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    image: `https://picsum.photos/300/400?random=${200 + i}`,
    name: `Bottom ${i + 1}`
  }))

  const shoes = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    image: `https://picsum.photos/300/300?random=${300 + i}`,
    name: `Shoes ${i + 1}`
  }))

  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 280
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleShuffle = () => {
    setSelectedTop(Math.floor(Math.random() * tops.length))
    setSelectedBottom(Math.floor(Math.random() * bottoms.length))
    setSelectedShoes(Math.floor(Math.random() * shoes.length))
  }

  return (
    <div className="outfit-builder">
      <div className="builder-container">
        {/* Toggle Switches */}
        <div className="builder-toggles">
          <ToggleSwitch 
            label="Shirts Tops" 
            checked={showTops}
            onChange={(e) => setShowTops(e.target.checked)}
          />
          <ToggleSwitch 
            label="Pants Shorts" 
            checked={showBottoms}
            onChange={(e) => setShowBottoms(e.target.checked)}
          />
          <ToggleSwitch 
            label="Hats Shoes" 
            checked={showShoes}
            onChange={(e) => setShowShoes(e.target.checked)}
          />
        </div>

        {/* Carousel Sections */}
        <div className="builder-carousels">
          {showTops && (
            <div className="carousel-section">
              <div className="carousel-header">
                <h3 className="carousel-title">Shirts / Tops</h3>
                <div className="carousel-controls">
                  <button 
                    className="carousel-nav"
                    onClick={() => scrollCarousel(topsRef, 'left')}
                    aria-label="Scroll left"
                  >
                    ←
                  </button>
                  <button 
                    className="carousel-nav"
                    onClick={() => scrollCarousel(topsRef, 'right')}
                    aria-label="Scroll right"
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="carousel-wrapper" ref={topsRef}>
                <div className="carousel">
                  {tops.map((item, index) => (
                    <div 
                      key={item.id}
                      className={`carousel-item ${selectedTop === index ? 'selected' : ''}`}
                      onClick={() => setSelectedTop(index)}
                    >
                      <img src={item.image} alt={item.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {showBottoms && (
            <div className="carousel-section">
              <div className="carousel-header">
                <h3 className="carousel-title">Pants / Shorts</h3>
                <div className="carousel-controls">
                  <button 
                    className="carousel-nav"
                    onClick={() => scrollCarousel(bottomsRef, 'left')}
                    aria-label="Scroll left"
                  >
                    ←
                  </button>
                  <button 
                    className="carousel-nav"
                    onClick={() => scrollCarousel(bottomsRef, 'right')}
                    aria-label="Scroll right"
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="carousel-wrapper" ref={bottomsRef}>
                <div className="carousel">
                  {bottoms.map((item, index) => (
                    <div 
                      key={item.id}
                      className={`carousel-item ${selectedBottom === index ? 'selected' : ''}`}
                      onClick={() => setSelectedBottom(index)}
                    >
                      <img src={item.image} alt={item.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {showShoes && (
            <div className="carousel-section">
              <div className="carousel-header">
                <h3 className="carousel-title">Hats / Shoes</h3>
                <div className="carousel-controls">
                  <button 
                    className="carousel-nav"
                    onClick={() => scrollCarousel(shoesRef, 'left')}
                    aria-label="Scroll left"
                  >
                    ←
                  </button>
                  <button 
                    className="carousel-nav"
                    onClick={() => scrollCarousel(shoesRef, 'right')}
                    aria-label="Scroll right"
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="carousel-wrapper" ref={shoesRef}>
                <div className="carousel">
                  {shoes.map((item, index) => (
                    <div 
                      key={item.id}
                      className={`carousel-item ${selectedShoes === index ? 'selected' : ''}`}
                      onClick={() => setSelectedShoes(index)}
                    >
                      <img src={item.image} alt={item.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action Bar */}
        <div className="builder-actions-bar">
          <button className="action-btn shuffle-btn" onClick={handleShuffle}>
            <span className="action-icon">🎲</span>
            <span className="action-text">SHUFFLE</span>
          </button>
          <button className="action-btn save-btn">
            <span className="action-icon">★</span>
            <span className="action-text">SAVE</span>
          </button>
          <button className="action-btn share-btn">
            <span className="action-icon">✈</span>
            <span className="action-text">SHARE</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OutfitBuilder