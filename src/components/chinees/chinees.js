import React from 'react'
import "./chinees.css"
import Chineesfoods from './chineesfood'


const Chinees = () => {

    const btnpressprevc = () => {
        let box = document.querySelector('.product-containerr')
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width
        console.log(width)
    }
    const btnpressnextc = () => {
        let box = document.querySelector('.product-containerr')
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width
        console.log(width)

    }

    return (

        <div className='product-carousel'>
            
                
                <button className='btn-prev' onClick={btnpressprevc}><p>&lt;</p> </button>
                <button className='btn-next' onClick={btnpressnextc}><p>&gt;</p></button>


                <div className='product-containerr'>
                    <Chineesfoods/>
                </div>


            </div>

       
    )
}

export default Chinees