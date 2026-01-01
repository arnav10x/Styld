import React from 'react'
import './CatalogPreview.css'

function CatalogPreview() {
  // Mock outfit data
  const outfits = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/400/500?random=${i + 1}`,
  }))

  return (
    <section className="catalog-preview section">
      <div className="container">
        <h2 className="catalog-preview-title text-center fade-in">
          Explore the catalog
        </h2>
        <div className="catalog-grid">
          {outfits.map((outfit, index) => (
            <div 
              key={outfit.id} 
              className="outfit-card fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="outfit-image">
                <img src={outfit.image} alt={`Outfit ${outfit.id}`} />
                <div className="outfit-overlay">
                  <button className="outfit-view-btn">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CatalogPreview
