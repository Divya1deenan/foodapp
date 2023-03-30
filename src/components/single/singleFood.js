import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { foodItems } from '../../data/data'
import "./singleFood.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'
import Header from '../pages/header/header'

const SingleFood = (ele) => {

  // const dispatch=useDispatch();
  //   const handleAddTocart =(ele)=>{

  //     dispatch(addToCart(ele));

  //   }
  const [detail, setDetail] = useState([])
  const location = useLocation()
  let query = new URLSearchParams(location.search)

  useEffect(() => {


    let datas = foodItems.find((detail) => detail.id == query.get('id'))

    console.log(datas)
    setDetail(datas)

  }, [])
  const dispatch=useDispatch();
  function handleAddTocart(detail){
    dispatch(addToCart(detail))
}

  return (
    <>
      <Header />
      <div className='header'>
      <div className='singlepage-content'>
        <div className='single-page'>
          <img className="single-image" src={detail.url} alt={detail.title} key={detail.id} />
        </div>
        <div className='single-detail'>
          <h4 className='single-title'>{detail.title} </h4>
          <p className='single-price'>₹{detail.price} </p>
          <p className='single-desp'>{detail.subtitle}</p>
          <p className='card-time'><span className="fas fa-clock"></span>{detail.timing}</p>
          <button className='cart-button' onClick={() => handleAddTocart(detail)}>ADD TO CART</button>
        </div>

      </div>
      </div>
    </>
  )
}
export default SingleFood

