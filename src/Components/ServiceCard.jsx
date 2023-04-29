import React from 'react'

const ServiceCard = ({title, content,serviceImg}) => {
    return (
        <>
            <div className="text-white p-2">
                <img src={serviceImg} alt="services img" className="object-cover rounded-md mb-4 h-[250px] w-full lg:w-[410px] lg:h-[310px]" />
                <h1 className="text-center font-bold text-base">{title}</h1>
                <p className="text-center text-sm">{content}</p>
                <p className="mx-auto py-2 px-4 mt-2 cursor-pointer hover:text-green-500 w-fit">Read More</p>
            </div>
        </>
    )
}

export default ServiceCard