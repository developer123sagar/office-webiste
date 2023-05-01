import React from 'react'

const PrvPolicyCard = ({title, contentNep, contentEng}) => {
    return (
        <div className='mt-4'>
            <li className='font-bold text-base md:text-lg'>{title}</li>
            <p className='my-4 text-sm md:text-base text-justify'>{contentNep}</p>
            <p className='text-sm md:text-base italic text-justify'>{contentEng}</p>
        </div>
    )
}

export default PrvPolicyCard