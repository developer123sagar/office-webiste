import React from 'react'

const About = () => {
  return (
    <div className='relative text-white mt-12'>
      <div className="w-full h-[380px] md:h-[400px]">
        <div className="w-full h-full ">
          <div className="absolute w-full h-[380px] md:h-[400px] bg-gradient-to-r from-black"></div>
          <img className="w-full h-full object-cover" src="images/bgAboutus.jpg" alt="samagra" />
          <div className="absolute w-full md:top-[15%] top-[5%] flex flex-col items-center gap-y-4 p-2 md:p-5 justify-center">
            <p className='text-yellow-400 lg:text-2xl'>About Us / Samagra Builders</p>
            <p className='text-xs md:text-sm text-justify'>Samagra Builders Pvt. Ltd. is an engineering startup company based in Nepal that prepares professional DPRs, engineering designs, and constructs all kinds of buildings and structures. We specialize in identifying and solving common and complex problems related to post construction such as color fading, water penetration, water retention, structural and non-structural cracks, etc. by using modern technology and professional engineers/home inspectors.</p>
        </div>
          </div>
      </div>

    </div>
  )
}

export default About