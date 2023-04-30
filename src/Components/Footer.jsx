import React from 'react'
import logo from "../img/logo.png"
import { useQuickLinks } from '../App'
import { Link } from 'react-router-dom'
import { FaFacebook, FaHeart, FaInstagram, FaPhoneAlt, FaTiktok, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  const navLinks = useQuickLinks()
  return (
    <div className='w-full bg-gray-900 text-white mt-14 footerSmall md:footer'>
      <div className='flex flex-col lg:flex-row gap-1 pt-10 pl-2 pr-2 lg:pt-10 lg:px-8 lg:pb-4 lg:gap-8'>
        <div className='lg:basis-1/4 pr-2 lg:pr-0'>
          <div className="flex mb-1 items-center gap-1">
            <img src={logo} alt="logo" className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] object-cover object-center" />
            <p className="text-base font-bold md:text-lg">Samagra Builders Pvt. Ltd.</p>
          </div>
          <p className='md:text-sm pl-2 mb-2 md:mb-4 text-justify text-xs'>Samagra Builders Pvt. Ltd. is an engineering startup company based in Nepal that prepares professional DPRs, engineering designs, and constructs all kinds of buildings and structures.</p>
          <p className='md:text-sm pl-2 text-justify text-xs'>आफ्नो घरमा भएको 𝐒𝐞𝐞𝐩𝐚𝐠𝐞, 𝐃𝐚𝐦𝐩𝐧𝐞𝐬𝐬 जस्ता समस्या सधैको लागी समाधान गर्न Samagra Builders को Engineer को टिम बाट घरको चेक, जाच गराउनुहोस |</p>
        </div>

        <div className='mt-1 p-3 w-fit'>
          <h1 className='font-bold text-lg'>Quick Links</h1>
          <div className={"text-white"} >
            {navLinks.map((link, id) => (
              <Link to={link.to} key={id}>
                <p className="cursor-pointer nav w-fit text-sm text-blue-500 lg:mt-5 mt-3">{link.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className='mt-1 p-3 w-full lg:basis-1/4'>
          <h1 className='font-bold text-lg mb-2'>Location</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9622687618503!2d85.3602719744065!3d27.68756102636574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bb0069ba74f%3A0xe35ee8f50fbad0f2!2sSamagra%20Builders%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1682794961309!5m2!1sen!2snp" className='w-full h-[260px] rounded-md' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <p className='mt-2 text-sm'>Pepsicola - 32, Kathmandu Metropolitan City, Kathmandu, Nepal </p>
        </div>

        <div className="mt-1 p-3 lg:basis-1/4">
          <h1 className='font-bold text-lg mb-2'>Contact Info</h1>
          <div className='flex items-center gap-[2px] sm:gap-x-3'>
            <MdEmail size={20} />
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQMFxpWvQDTGDHtjlrJDgMqQbMsgxTFLnGVGCsSlGhWZDCLrvzTZLpsvTDqjbsjnPWBkFC" target='_blank' className='text-sm ml-1'>samagrabuildersofficial@gmail.com</a>
          </div>
          <div className='flex items-center gap-x-3 mt-5'>
            <FaPhoneAlt size={20} />
            <a href="tel:+977982-6761861">982-6761861</a>
          </div>
          <h1 className='font-bold text-lg mt-8 border-b-[1px] border-gray-200'>Connect With Us</h1>
          <div className='flex items-center gap-x-3 mt-5'>
            <FaInstagram color='#FD1D1D' size={25} />
            <a href="https://www.instagram.com/samagrabuilders/?fbclid=IwAR0vQkeFy3pO7KEjYIAbbtda00CyaZItuTguboCGFPZjiM36KuQDidlrTho" target='_blank'>samagrabuilders</a>
          </div>
          <div className='flex items-center gap-x-3 mt-5'>
            <FaFacebook color='blue' size={25} />
            <a href="https://www.facebook.com/samagrabuilders" target='_blank'>Samagra Builders Pvt. Ltd.</a>
          </div>
          <div className='flex items-center gap-x-3 mt-5'>
            <FaYoutube color='red' size={25} />
            <a href="https://www.youtube.com/@samagrabuilders" target='_blank'>Samagra Builders Pvt. Ltd.</a>
          </div>
          <div className='flex items-center gap-x-3 mt-5'>
            <FaTiktok size={25} />
            <a href="https://www.tiktok.com/@samagra_builders_?fbclid=IwAR2eY7al-c-g0Qmm-X7Ku-vNqtvRonE6yYv4AxkcUt2igzJejn8zGerlYt0" target='_blank'>samagra_builders_</a>
          </div>
        </div>
      </div>

      <div className='border-t-[1px] border-gray-100 w-[90%] mx-auto text-sm'>
        <h1 className='mx-auto mt-2 w-fit pb-4 text-xs'>Copyright © 2023 Samagra Builders Pvt. Ltd. &nbsp;<FaHeart color='yellow' size={15} className='inline-block'/></h1>
      </div>
    </div>
  )
}

export default Footer