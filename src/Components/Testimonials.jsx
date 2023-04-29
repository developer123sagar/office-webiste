import React from 'react'
import StarRatings from "react-star-ratings";


const Testimonials = ({name,description,thoughts,rating,img}) => {
    return (
        <>
            <div className="flex items-center flex-col p-5 rounded-md bg-slate-900 text-white">
                <img src={img} alt="testimonials" className=" rounded-full mb-2" />
                <StarRatings
                    starRatedColor="red"
                    starDimension={"25"}
                    rating={rating}
                    name='rating'
                />
                <p className="font-bold text-base my-2">{name}</p>
                <p>{description}</p>
                <p className="mt-3 text-center md:text-sm text-xs">{thoughts}</p>
            </div>
        </>
    )
}

export default Testimonials