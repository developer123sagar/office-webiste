import React from 'react'

export const ChooseusCard = ({icon,title,content}) => {
    return (
        <>
            <div className=" bg-emerald-700 rounded-md py-5 px-4 grid place-items-center">
                <div className='flex flex-col items-center justify-center'>
                    {icon}
                    <h1 className="font-bold text-base lg:text-xl text-brown w-max mx-auto">{title}</h1>
                    <p className=" text-white text-justify text-xs lg:text-base mt-3">{content}</p>
                </div>
            </div>
        </>
    )
}
