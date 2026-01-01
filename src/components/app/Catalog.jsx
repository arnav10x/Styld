import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Catalog.css'

function Catalog() {
  const [filter, setFilter] = useState('all')

  // Mock outfit data
  const outfits = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/400/500?random=${i + 10}`,
    creator: {
      username: `creator${i + 1}`,
      avatar: `https://i.pravatar.cc/150?img=${i + 1}`
    }
  }))

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'recent', label: 'Recent' },
    { id: 'trending', label: 'Trending' }
  ]

  return (
    <div className="catalog">
      <div className="catalog-container">
        <div className="catalog-header">
          <h1 className="catalog-title">Catalog</h1>
          <div className="catalog-filters">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog-grid">
          {outfits.map((outfit) => (
            <Link 
              key={outfit.id} 
              to={`/app/outfit/${outfit.id}`}
              className="catalog-card"
            >
              <div className="card-image">
                <img src={outfit.image} alt={`Outfit ${outfit.id}`} />
                <div className="card-overlay">
                  <div className="card-creator">
                    <img 
                      src={outfit.creator.avatar} 
                      alt={outfit.creator.username}
                      className="creator-avatar"
                    />
                    <span className="creator-username">{outfit.creator.username}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog
