import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/app" className="navbar-logo">
          Styld
        </Link>
        <div className="navbar-links">
          <Link 
            to="/app" 
            className={`navbar-link ${location.pathname === '/app' || location.pathname === '/app/' ? 'active' : ''}`}
          >
            Builder
          </Link>
          <Link 
            to="/app/catalog" 
            className={`navbar-link ${location.pathname === '/app/catalog' ? 'active' : ''}`}
          >
            Catalog
          </Link>
        </div>
        <div className="navbar-actions">
          <button className="navbar-profile">
            <div className="profile-avatar">U</div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
