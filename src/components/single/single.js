import React from 'react'
import { useHistory } from 'react-router-dom'
import "../single/single.css"
import { foodItems } from '../../data/data'
const Single = () => {

  const history = useHistory
  // let newFoodImage = foodItems.filter((ele) => ele.id == ele.length)

  // function allFoodImages() {

  //   // history.push(`/singleFood?id=${foodid}`)
    history.push("/singleFood")

  // }
  return (
    <>

      {

        foodItems.map((ele) => {
          return (

            <div>
              <div>{ele.id}

                {/* <img src={ele.url} alt={ele.title} onClick={allFoodImages}/> */}
                {/* <img src={ele.url} alt={ele.title} onClick={() => allFoodImages(newFoodImage[0].id)} /> */}
              </div>

            </div>
          )
        })

      }


    </>

  )
}


export default Single