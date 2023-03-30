import React from 'react'
import "../home/home.css"
import Dashboard from '../components/pages/dashboard/dashboard'
import Footer from '../components/pages/footer/footer'
import Header from '../components/pages/header/header'
import Indian from '../components/indian/indian'
import Chinees from '../components/chinees/chinees'
import AllDish from '../components/all/alldish'
import French from '../components/french/french'
// import Login from '../login/login'
// import { foodItems } from '../data/data'


const Home = () => {

  const slides = [
    { url: "http://localhost:3000/all/french3.jpg", title: "Image-4" },
    { url: "http://localhost:3000/chineesfood/eggshripms.jpg", title: "Image-4" },
    { url: "http://localhost:3000/all/french-0.jpg", title: "Image-1" },
    { url: "http://localhost:3000/indian/biriyani.jpg", title: "Image-2" },
    { url: "http://localhost:3000/pasta.jpg", title: "Image-3" },
    { url: "http://localhost:3000/indian/paruppudal.jpg", title: "Image-4" },


  ];



  return (
    <div className='main-div'>


      <Header />
      <div className='main-slider'>
        <Dashboard slides={slides} />
      </div>

      <AllDish/>

      <Indian />
      <Chinees />
      <French/>
      <Footer />


    </div>
  )
}

export default Home