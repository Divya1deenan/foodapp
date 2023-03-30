import React from 'react'
import "./indian.css"
import IndianFoods from './indianfood'


const Indian = () => {

    const btnpressprev = () => {
        let box = document.querySelector('.product-container')
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width
        console.log(width)
    }
    const btnpressnext = () => {
        let box = document.querySelector('.product-container')
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width
        console.log(width)

    }

    return (


        <>     
        {/* <div className='Para'>Eat What Makes you happy-IndianFoods</div>    */}
        
        
        <div className='product-carousel'>
            
                
                <button className='btn-prev' onClick={btnpressprev}><p>&lt;</p> </button>
                <button className='btn-next' onClick={btnpressnext}><p>&gt;</p></button>
                
               

                <div className='product-container'>
                    <IndianFoods />
                    
                </div>


            </div>

            </>

    )
}

export default Indian