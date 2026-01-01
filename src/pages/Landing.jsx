import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import SocialProof from '../components/landing/SocialProof'
import CatalogPreview from '../components/landing/CatalogPreview'
import FinalCTA from '../components/landing/FinalCTA'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Hero />
      <Features />
      <SocialProof />
      <CatalogPreview />
      <FinalCTA />
    </div>
  )
}

export default Landing
