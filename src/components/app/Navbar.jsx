import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/app" className="navbar-logo">
          Styld.
        </Link>
        <div className="navbar-center">
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
        </div>
        <div className="navbar-actions">
          <button className="navbar-icon-btn" aria-label="Profile">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor"/>
              <path d="M10 12C5.58172 12 2 14.6863 2 18C2 18.5523 2.44772 19 3 19H17C17.5523 19 18 18.5523 18 18C18 14.6863 14.4183 12 10 12Z" fill="currentColor"/>
            </svg>
          </button>
          <button className="navbar-icon-btn" aria-label="Shop">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H4L4.4 4M6 14H16L20 6H4.4M6 14L4.4 4M6 14L4 16M16 14V18M12 18V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="navbar-icon-btn" aria-label="Settings">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.6569 12.3431L14.9497 11.636C14.8071 11.4934 14.7413 11.2907 14.7714 11.0927L14.9349 10.0026C15.0239 9.51028 14.8326 9.01506 14.4142 8.59662L13.4034 7.58579C12.9849 7.16735 12.4897 6.97607 11.9974 7.06506L10.9073 7.22859C10.7093 7.25868 10.5066 7.19293 10.364 7.05029L9.65685 6.34315C9.26633 5.95262 8.63376 5.95262 8.24324 6.34315L7.5361 7.05029C7.39346 7.19293 7.1907 7.25868 6.99273 7.22859L5.90265 7.06506C5.41028 6.97607 4.91506 7.16735 4.49662 7.58579L3.48579 8.59662C3.06735 9.01506 2.87607 9.51028 2.96506 10.0026L3.12859 11.0927C3.15868 11.2907 3.09293 11.4934 2.95029 11.636L2.24315 12.3431C1.85262 12.7336 1.85262 13.3662 2.24315 13.7568L2.95029 14.464C3.09293 14.6066 3.15868 14.8093 3.12859 15.0073L2.96506 16.0974C2.87607 16.5897 3.06735 17.0849 3.48579 17.5034L4.49662 18.5142C4.91506 18.9326 5.41028 19.1239 5.90265 19.0349L6.99273 18.8714C7.1907 18.8413 7.39346 18.9071 7.5361 19.0497L8.24324 19.7568C8.63376 20.1474 9.26633 20.1474 9.65685 19.7568L10.364 19.0497C10.5066 18.9071 10.7093 18.8413 10.9073 18.8714L11.9974 19.0349C12.4897 19.1239 12.9849 18.9326 13.4034 18.5142L14.4142 17.5034C14.8326 17.0849 15.0239 16.5897 14.9349 16.0974L14.7714 15.0073C14.7413 14.8093 14.8071 14.6066 14.9497 14.464L15.6569 13.7568C16.0474 13.3662 16.0474 12.7336 15.6569 12.3431Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar