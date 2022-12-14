import React from 'react'
import { useLocation } from 'react-router'
import Announcement from '../Components/Announcement'
import { Categories } from '../Components/Categories'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import { Products } from '../Components/Products'
import { Slider } from '../Components/Slider'


const Home = () => {

  const location = useLocation();
  console.log(location);
  return (
    <div>
    <Announcement/>
       <Navbar/>
       <Slider/>
       <Categories/>
       <Products/>
       <Newsletter/>
       <Footer/>
       </div>
  )
  
}

export default Home