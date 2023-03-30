import React from 'react'
import "../all/alldish.css"
// import AllFoodItems from './AllFoodItems'
import { useHistory } from 'react-router-dom'
import { foodItems } from '../../data/data'


const AllDish = () => {

    const history = useHistory();

    let newFoodIndian = foodItems.filter((ele) => ele.food === "Indian")
    let newFoodchinnese = foodItems.filter((ele) => ele.food === "chinees")
    let newFoodfrench = foodItems.filter((ele) => ele.food === "french")

    function allIndianFood(foodid) {

        history.push(`/AllFoodItems?id=${foodid}`)  
    }
    function allFoodchinnese(foodid) {

        history.push(`/AllFoodItems?id=${foodid}`)
    }
    function allFrenchFood(foodid) {

        history.push(`/AllFoodItems?id=${foodid}`)
    }

    

    return (
        <>

            <div className='All-Items'>
                {/* <button className='Food-Items' >All DISH</button> */}
                <button className='Food-Items' id='indian' onClick={() => allIndianFood(newFoodIndian[0].foodid)}>Indian DISH</button>
                <button className='Food-Items'id='chinese' onClick={() => allFoodchinnese(newFoodchinnese[0].foodid)}>Chinees DISH</button>
                <button className='Food-Items' id='french' onClick={() => allFrenchFood(newFoodfrench[0].foodid)}>French DISH</button>

            </div>


           

        </>

    )
}

export default AllDish
