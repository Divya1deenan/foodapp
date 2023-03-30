import React from 'react'
import "./indianfood.css"
import { foodItems } from "../../data/data"
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'

function IndianFoods() {

    const dispatch = useDispatch();
    const handleAddTocart = (ele) => {

        dispatch(addToCart(ele));

    }


    const history = useHistory();

    let newFood = foodItems.filter((ele) => ele.food === "Indian")
    console.log(newFood)



    function singleIndianFood(id) {

        history.push(`/singleFood?id=${id}`)

    }


    return (


        <>
            <h1 className='indian'>Indian Food</h1>
            <div className='dashboard-content'>

                {

                    newFood.map((ele) => {
                        return (

                            <div className='dashboard-content'>
                                <div className='dashboard-card' key={ele.id}>
                                    <img className="card-image" src={ele.url} alt={ele.title} onClick={() => singleIndianFood(ele.id)} />
                                    <div className='card-detail'>
                                        <h4>{ele.title}<span>{ele.price}</span></h4>
                                        <p>{ele.description}</p>
                                        <p className='card-time'><span className="fas fa-clock"></span>{ele.timing}</p>

                                    </div>
                                   
                                    <button className='angles1' onClick={() => handleAddTocart(ele)}>ADD TO CART</button>
                                   
                                </div>


                            </div>
                        )
                    })

                }


            </div>
        </>
    )
}

export default IndianFoods

