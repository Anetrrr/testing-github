import React from 'react'
import Navbar from '../components/Navbar'
import Infosec from '../components/Infosec'
import Footer from '../components/Footer'
import SearchFilter from '../components/SearchFilter'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Infosec/>
        <Footer />
    </div>
  )
}

export default Home