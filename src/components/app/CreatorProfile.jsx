import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './CreatorProfile.css'

function CreatorProfile() {
  const { username } = useParams()

  // Mock creator data
  const creator = {
    username: username,
    avatar: 'https://i.pravatar.cc/150?img=1',
    outfits: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      image: `https://picsum.photos/400/500?random=${i + 50}`
    }))
  }

  return (
    <div className="creator-profile">
      <div className="profile-container">
        <Link to="/app/catalog" className="profile-back">
          ← Back to catalog
        </Link>

        <div className="profile-header">
          <img 
            src={creator.avatar} 
            alt={creator.username}
            className="profile-avatar-large"
          />
          <div className="profile-info">
            <h1 className="profile-username">{creator.username}</h1>
          </div>
        </div>

        <div className="profile-outfits">
          <h2 className="outfits-title">Outfits</h2>
          <div className="outfits-grid">
            {creator.outfits.map((outfit) => (
              <Link 
                key={outfit.id}
                to={`/app/outfit/${outfit.id}`}
                className="outfit-card"
              >
                <div className="outfit-image">
                  <img src={outfit.image} alt={`Outfit ${outfit.id}`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorProfile
