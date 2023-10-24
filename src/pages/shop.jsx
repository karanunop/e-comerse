import React from 'react'
import Hero from '../components/hero/hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollection from '../components/NewCollection/NewCollection'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/footer/footer'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection/>
      <Newsletter />
      
    </div>
  )
}

export default Shop
