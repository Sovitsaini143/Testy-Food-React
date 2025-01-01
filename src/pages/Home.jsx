import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'


function Home() {
  return (
    <>
    <Navbar />
    <Menu />
    <FoodItems />
    <Cart />
    
    </>
  )
}

export default Home
