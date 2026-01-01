import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './OutfitDetail.css'

function OutfitDetail() {
  const { id } = useParams()

  // Mock outfit data
  const outfit = {
    id: id,
    image: `https://picsum.photos/800/1000?random=${id}`,
    creator: {
      username: 'creator1',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    items: [
      { id: 1, name: 'Essential T-Shirt', brand: 'Brand A', price: '$49', link: '#' },
      { id: 2, name: 'Classic Jeans', brand: 'Brand B', price: '$89', link: '#' },
      { id: 3, name: 'Sneakers', brand: 'Brand C', price: '$120', link: '#' }
    ]
  }

  return (
    <div className="outfit-detail">
      <div className="detail-container">
        <Link to="/app/catalog" className="detail-back">
          ← Back to catalog
        </Link>

        <div className="detail-content">
          <div className="detail-image">
            <img src={outfit.image} alt={`Outfit ${outfit.id}`} />
          </div>

          <div className="detail-info">
            <div className="detail-creator">
              <Link to={`/app/creator/${outfit.creator.username}`} className="creator-link">
                <img 
                  src={outfit.creator.avatar} 
                  alt={outfit.creator.username}
                  className="creator-avatar-large"
                />
                <span className="creator-username-large">{outfit.creator.username}</span>
              </Link>
            </div>

            <div className="detail-items">
              <h2 className="items-title">Shop this outfit</h2>
              <div className="items-list">
                {outfit.items.map((item) => (
                  <div key={item.id} className="item-card">
                    <div className="item-info">
                      <div className="item-brand">{item.brand}</div>
                      <div className="item-name">{item.name}</div>
                      <div className="item-price">{item.price}</div>
                    </div>
                    <a 
                      href={item.link} 
                      className="item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shop
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-actions">
              <button className="btn-primary">Save outfit</button>
              <button className="btn-secondary">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutfitDetail
