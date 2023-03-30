import React from 'react'
// import Header from './header'

const AboutUs = () => {
  return (
    <>
    {/* <Header/> */}
   <section className='contcat'>

   <div className='content'>

     <h2>Contact Us</h2>
     <p>Restaurant-to-consumer Many restaurants including pizza chains famous for their fast delivery, 
      such as Domino’s and Pizza Hut, 
      have invested in their own direct to consumer apps. </p>
      </div>
      <div className='container'>
        <div className='contactInfo'>
          <div className='box'>
            <div className='icon'>
              <div className='text'>
                <h3>Address</h3>
                <p>4671 camp Road,Rayaprttah High Road,600 004</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <div className='text'>
                <h3>Ph-Num</h3>
                <p>987-654-321</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <div className='text'>
                <h3>Email</h3>
                <p>ivyadivya30@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>



   </section>
    </>
  )
}

export default AboutUs