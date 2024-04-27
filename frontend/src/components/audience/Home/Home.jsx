import React from 'react'
import { GlobePage } from './GlobePage'
import { TitelPage } from './TitelPage'
import { HeroHighlightPage } from './HeroHighlightPage'
import { LampBanner } from './LampBanner'
import { SpotlightSection } from './SpotlightSection'

const Home = () => {
  return (
    <div className=''>
      <GlobePage/>
      <HeroHighlightPage/>
      <LampBanner/>
      <SpotlightSection/>
    </div>
  )
}

export default Home
