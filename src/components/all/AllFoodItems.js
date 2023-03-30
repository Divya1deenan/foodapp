import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./AllFoodItems.css"
import { foodItems } from '../../data/data'
import { useEffect } from 'react'
import "../single/singleFood.css"

import Header from '../pages/header/header'
import Footer from '../pages/footer/footer'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'

const AllFoodItems = () => {

  const dispatch=useDispatch();
  const handleAddTocart =(ele)=>{

    dispatch(addToCart(ele));

  }
  const [detail, setDetail] = useState([])
  const location = useLocation()

  let query = new URLSearchParams(location.search)
  useEffect(() => {

    let data = foodItems.filter((ele) => ele.foodid == query.get('id'))
    console.log(data)
    setDetail(data)


  }, [])


  return (
    <>
      <Header />
      <div className='dashboard-content1'>

        {

          detail.map((ele) => {
            return (

              


              <div className='dashboard-content'>
                <div className='dashboard-card' key={ele.id}>
                  <img className="card-image" src={ele.url} alt={ele.title} />
                  <div className='card-detail'>
                    <h4>{ele.title}<span>{ele.price}</span></h4>
                    <p>{ele.description}</p>
                    <p className='card-time'><span className="fas fa-clock"></span>{ele.timing}</p>

                  </div>
                  <button className='angles1' onClick={()=>handleAddTocart(ele)}>ADD TO CART</button>
                  
                </div>


              </div>
            )
          })


        }


      </div>
      <Footer />
    </>
  )
}


export default AllFoodItems