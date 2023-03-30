import React from 'react'
import "./french.css"
import FrenchFood from './frenchFood'
// import Chineesfoods from './chineesfood'


const French = () => {

    const btnpressprevf = () => {
        let box = document.querySelector('.product-containerf')
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width
        console.log(width)
    }
    const btnpressnextf = () => {
        let box = document.querySelector('.product-containerf')
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width
        console.log(width)

    }

    return (

        <div className='product-carousel'>
            
                
                <button className='btn-prev' onClick={btnpressprevf}><p>&lt;</p> </button>
                <button className='btn-next' onClick={btnpressnextf}><p>&gt;</p></button>


                <div className='product-containerf'>
                    <FrenchFood/>
                </div>


            </div>

       
    )
}

export default French