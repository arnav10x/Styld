import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/app/Navbar'
import OutfitBuilder from '../components/app/OutfitBuilder'
import Catalog from '../components/app/Catalog'
import OutfitDetail from '../components/app/OutfitDetail'
import CreatorProfile from '../components/app/CreatorProfile'
import './AppUI.css'

function AppUI() {
  return (
    <div className="app-ui">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route index element={<OutfitBuilder />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="outfit/:id" element={<OutfitDetail />} />
          <Route path="creator/:username" element={<CreatorProfile />} />
        </Routes>
      </main>
    </div>
  )
}

export default AppUI
