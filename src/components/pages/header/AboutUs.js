import React from 'react'
import "./about.css"
import abt from "../../../images/aboutus.jpg"

const AboutUs = () => {
  return (
    <>
   <div className='heading'>

    <h2>About Us</h2>
    <p> Food delivery apps are the new favorite of the people and that is the final verdict. </p>
   </div>
   <section className="about-us">
    <img src={abt}  alt="Aboutus"/>
    <div className='content'>
    <h2 className='Desc-1'>Food delivery apps are the new favorite of the people and that is the final verdict.</h2>
     <p>Food delivery apps are the new favorite of the people and that is the final verdict. 
      The ease food delivery apps offer to the people who don’t want to cook at the end of the day is 
      what makes it more loved than any other apps out there. 
      But what more do you need to know before you start building your food delivery app</p>
      <button className='Read-more-btn'>Read-more</button>
    </div>

   </section>
    </>
  )
}

export default AboutUs