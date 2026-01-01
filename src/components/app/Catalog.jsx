import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Catalog.css'

function Catalog() {
  const recentRef = useRef(null)
  const trendingRef = useRef(null)
  const oldMoneyRef = useRef(null)

  // Mock outfit data
  const generateOutfit = (id) => ({
    id,
    image: `https://picsum.photos/300/400?random=${id}`,
    creator: {
      username: `creator${id}`,
      avatar: `https://i.pravatar.cc/150?img=${id % 30}`
    }
  })

  const recentOutfits = Array.from({ length: 12 }, (_, i) => generateOutfit(i + 1))
  const trendingOutfits = Array.from({ length: 12 }, (_, i) => generateOutfit(i + 20))
  const oldMoneyOutfits = Array.from({ length: 12 }, (_, i) => generateOutfit(i + 40))

  const scrollSection = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 320
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const CatalogSection = ({ title, outfits, scrollRef, onScrollLeft, onScrollRight }) => (
    <div className="catalog-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="section-controls">
          <button 
            className="section-nav"
            onClick={onScrollLeft}
            aria-label="Scroll left"
          >
            ←
          </button>
          <button 
            className="section-nav"
            onClick={onScrollRight}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>
      <div className="section-scroll" ref={scrollRef}>
        <div className="section-outfits">
          {outfits.map((outfit) => (
            <Link 
              key={outfit.id} 
              to={`/app/outfit/${outfit.id}`}
              className="outfit-card-horizontal"
            >
              <div className="outfit-card-image">
                <img src={outfit.image} alt={`Outfit ${outfit.id}`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="catalog">
      <div className="catalog-container">
        {/* Search Bar */}
        <div className="catalog-search-container">
          <div className="search-bar">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input 
              type="text" 
              placeholder="SEARCH" 
              className="search-input"
            />
          </div>
        </div>

        {/* Catalog Sections */}
        <div className="catalog-sections">
          <CatalogSection
            title="BASED OFF RECENTS"
            outfits={recentOutfits}
            scrollRef={recentRef}
            onScrollLeft={() => scrollSection(recentRef, 'left')}
            onScrollRight={() => scrollSection(recentRef, 'right')}
          />
          
          <CatalogSection
            title="TRENDING"
            outfits={trendingOutfits}
            scrollRef={trendingRef}
            onScrollLeft={() => scrollSection(trendingRef, 'left')}
            onScrollRight={() => scrollSection(trendingRef, 'right')}
          />
          
          <CatalogSection
            title="OLD MONEY"
            outfits={oldMoneyOutfits}
            scrollRef={oldMoneyRef}
            onScrollLeft={() => scrollSection(oldMoneyRef, 'left')}
            onScrollRight={() => scrollSection(oldMoneyRef, 'right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Catalog