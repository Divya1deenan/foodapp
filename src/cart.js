import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../src/cart.css"
import { Link } from "react-router-dom"
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from './features/cartSlice'
const Cart = () => {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    
    dispatch((getTotals()))


  },[cart])
  const handlerRemoveFromCart = (cartItem) => {

    dispatch(removeFromCart(cartItem));
  }
  const handleDecreaseCart = (cartItem) => {

    dispatch(decreaseCart(cartItem))
  }
  const handleIncreaseCart = (cartItem) => {

    dispatch(addToCart(cartItem))
  }
  const handleClearCart = () => {

    dispatch(clearCart())
  }
  const checkOut=()=>{

    alert("your order placed sucessfully")
  }
  return (
    <div className='cart-container'>

      <h2>shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className='cart-empty'>
          <p>Your cart is Currently empty</p>
          <div className='start-shopping'>
            <Link to="/home">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (<>

        <div>
          <div className='titles'>
            <h3 className='products-title'>Products</h3>
            <h3 className='price'>price</h3>
            <h3 className='quantity'>Quantity</h3>
            <h3 className='total'>Total</h3>
          </div>
          <div className='cart-items'>
            {cart.cartItems.map(cartItem => (

              <div className='cart-item' key={cartItem.id}>

                <div className='cart-product'>
                  <img src={cartItem.url} alt={cartItem.title} className="cart-imge" />
                 
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.title}</p>
                    <button onClick={() => handlerRemoveFromCart(cartItem)}>Remove</button>
                  </div>
                  </div>
                <div className='cart-product-price'>{cartItem.price}</div>
                <div className='cart-product-quantity'>
                  <button onClick={() => { handleDecreaseCart(cartItem) }}>-</button>
                  <div className='count'>{cartItem.cartQuantity}</div>
                  <button onClick={() => { handleIncreaseCart(cartItem) }}>+</button>
                </div>
                <div className='cart-product-total-price'>
                  {cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}

          </div>

          <div className='cart-summary'>
            <button className='clear-cart' onClick={() => handleClearCart()}>Clear Cart</button>
            <div className='cart-checkout'>
              <div className='subtotal'>
                <span>Subtotal</span>
                <span className='amount'>${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and Shipping Calculated at checkout</p>
              <button onClick={checkOut}>Check Out</button>
              <div className='continue-shoopiing'>
                <Link to="/home">
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                  <span>continue shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </>)}
    </div>
  )
}

export default Cart