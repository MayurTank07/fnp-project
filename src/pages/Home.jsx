import React from 'react'
import Carousal from '../components/Carousal'
import Categories from '../components/Categories'
import OccasionGrid from '../components/OccasionGrid'
import TailoredOccasions from '../components/TailoredOccasions'

const Home = () => {
  return (
    <div>
      <Carousal/>
      <Categories/>
      <OccasionGrid/>
      <TailoredOccasions/>
    </div>
  )
}

export default Home
