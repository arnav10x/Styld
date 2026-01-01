import React, { useState, useRef } from 'react'
import './OutfitBuilder.css'

function OutfitBuilder() {
  const [selectedTop, setSelectedTop] = useState(0)
  const [selectedBottom, setSelectedBottom] = useState(0)
  const [selectedShoes, setSelectedShoes] = useState(0)
  
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
      const scrollAmount = 320
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
        <div className="builder-header">
          <h1 className="builder-title">Build your outfit</h1>
          <div className="builder-actions">
            <button className="btn-minimal" onClick={handleShuffle}>
              Shuffle
            </button>
            <button className="btn-primary builder-save">Save</button>
            <button className="btn-secondary">Share</button>
          </div>
        </div>

        <div className="builder-preview">
          <div className="preview-outfit">
            <div className="preview-top">
              <img src={tops[selectedTop].image} alt={tops[selectedTop].name} />
            </div>
            <div className="preview-bottom">
              <img src={bottoms[selectedBottom].image} alt={bottoms[selectedBottom].name} />
            </div>
            <div className="preview-shoes">
              <img src={shoes[selectedShoes].image} alt={shoes[selectedShoes].name} />
            </div>
          </div>
        </div>

        <div className="builder-carousels">
          <div className="carousel-section">
            <div className="carousel-header">
              <h3 className="carousel-title">Tops</h3>
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

          <div className="carousel-section">
            <div className="carousel-header">
              <h3 className="carousel-title">Bottoms</h3>
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

          <div className="carousel-section">
            <div className="carousel-header">
              <h3 className="carousel-title">Shoes</h3>
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
        </div>
      </div>
    </div>
  )
}

export default OutfitBuilder
