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
      username: 'LUCAS3497',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    items: [
      { 
        id: 1, 
        image: 'https://picsum.photos/300/400?random=101',
        name: 'Vintage Textured Crewneck Long Sleeve Shirt', 
        brand: 'Goodfellow & Co', 
        price: '$29.99', 
        link: 'https://www.target.com/p/vintage-textured-crewneck-long-sleeve-shirt-goodfellow-co/-/A-123456' 
      },
      { 
        id: 2, 
        image: 'https://picsum.photos/300/400?random=201',
        name: 'Blake Extreme Baggy Jeans - Chain Gray', 
        brand: 'PACSUN', 
        price: '$79.99', 
        link: 'https://www.pacsun.com/blake-extreme-baggy-jeans-chain-gray' 
      },
      { 
        id: 3, 
        image: 'https://picsum.photos/300/300?random=301',
        name: 'Dunk Low Retro - Mens Shoes', 
        brand: 'Nike', 
        price: '$120.00', 
        link: 'https://www.nike.com/dunk-low-retro-mens-shoes' 
      }
    ]
  }

  return (
    <div className="outfit-detail">
      <div className="detail-container">
        <Link to="/app/catalog" className="detail-back">
          ← Back
        </Link>

        <div className="detail-layout">
          {/* Left Column - Clothing Items */}
          <div className="detail-column detail-items-column">
            {outfit.items.map((item) => (
              <div key={item.id} className="item-card">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
            ))}
            <button className="detail-save-btn">
              <span className="save-icon">★</span>
              <span className="save-text">SAVE</span>
            </button>
          </div>

          {/* Center Column - Profile */}
          <div className="detail-column detail-profile-column">
            <div className="profile-card">
              <div className="profile-image-container">
                <img 
                  src={outfit.creator.avatar} 
                  alt={outfit.creator.username}
                  className="profile-image-large"
                />
              </div>
              <Link to={`/app/creator/${outfit.creator.username}`} className="profile-username-link">
                <h2 className="profile-username-large">{outfit.creator.username}</h2>
              </Link>
            </div>
          </div>

          {/* Right Column - Brand Links */}
          <div className="detail-column detail-brands-column">
            {outfit.items.map((item) => (
              <div key={item.id} className="brand-card">
                <div className="brand-logo">
                  {item.brand}
                </div>
                <a 
                  href={item.link} 
                  className="brand-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="brand-url">{item.link}</div>
                  <div className="brand-name">{item.name}</div>
                  <div className="brand-price">{item.price}</div>
                </a>
              </div>
            ))}
            <button className="detail-share-btn">
              <span className="share-icon">✈</span>
              <span className="share-text">SHARE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutfitDetail