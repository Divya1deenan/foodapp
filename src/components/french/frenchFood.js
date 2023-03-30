import React from 'react'
import "./frenchFood.css"
import { foodItems } from "../../data/data"
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'

function FrenchFood() {

    const dispatch=useDispatch();
    const handleAddTocart =(ele)=>{

      dispatch(addToCart(ele));

    }


    const history=useHistory()

    let newFoodf = foodItems.filter((ele) => ele.food === "french")
    console.log(newFoodf)

    function singleFrenchFood(id) {

        history.push(`/singleFood?id=${id}`)

    }
    return (
        <div className='dashboard-content'>

            {

                newFoodf.map((ele) => {
                    return (

                        <div className='dashboard-content'>
                            <div className='dashboard-card' key={ele.id}>
                                <img className="card-image" src={ele.url} alt={ele.title} onClick={() => singleFrenchFood(ele.id)}/>
                                <div className='card-detail'>
                                    <h4>{ele.title}<span>{ele.price}</span></h4>
                                    <p>{ele.description}</p>
                                    <p className='card-time'><span className="fas fa-clock"></span>{ele.timing}</p>

                                </div>
                                <button className='angles1'onClick={()=>handleAddTocart(ele)}>ADD TO CART</button>
                                {/* <button className='angles'><i class="fa-solid fa-cart-shopping"></i></button>
                                <button className='angles'> <i class="fa-solid fa-plus"></i></button>
                                <button className='angles'><i class="fa-solid fa-minus"></i></button> */}
                            </div>


                        </div>
                    )
                })
            }

        </div>

    )
}

export default FrenchFood

//         foodItems.map((ele) => {
        //             return (

        //     <div className='dashboard-content'>
        //         <div className='dashboard-card'>
        //             <img className="card-image" src={ele.url} alt={ele.title} />
        //             <div className='card-detail'>
        //                 <h4>{ele.title}<span>{ele.price}</span></h4>
        //                 <p>{ele.description}</p>
        //                 <p className='card-time'><span className="fas fa-clock"></span>{ele.timing}</p>
        //             </div>
        //         </div>


        //     </div>
        //     )
        //         })
        //     }