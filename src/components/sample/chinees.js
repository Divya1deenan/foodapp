import React from 'react'
import "./chinees.css"
import { foodItems } from '../../data/data'
import PreArrow from '../carosul/preArrow';
import NextArrow from '../carosul/nextArrow';
import Slider from 'react-slick';

const settings = {

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />
};
const ChineesFood = () => {


    return (
        <div className='deleveru-collection'>
            <div className='max-width'>

                <div className='collection-title'>ChineesFood</div>
                <Slider {...settings}>
                    {foodItems.map((ele) => {
                        return (
                            <div className='deleiverItem-cover'>
                                <img className="delvery-Item-image"
                                    src={ele.url}
                                    alt={ele.title} />

                            </div>
                        )
                    })}
                </Slider>
            </div>


        </div>
    )
}

export default ChineesFood
