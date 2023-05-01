import React, { useEffect, useState } from "react";
import bg from "../img/bg.jpeg";
import Aos from "aos";
import 'aos/dist/aos.css';
import img1 from "../img/AC img/group photo.png"
import img2 from "../img/AC img/grp.jpeg"
import img3 from "../img/AC img/photo.png"
import img4 from "../img/AC img/rabin.png"
import { Typewriter } from "react-simple-typewriter";
import { FaAward } from "react-icons/fa"
import { RxDoubleArrowUp } from 'react-icons/rx'
import ServiceCard from "./ServiceCard";
import { HiOutlineArrowCircleRight } from "react-icons/hi"
import Testimonials from "./Testimonials";
import { ChooseusCard } from "./ChooseusCard";
import data from "../Datas";

const Home = () => {
  const [index, setIndex] = useState(0)
  const photos = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => index < photos.length - 1 ? index + 1 : 0)
    }, 5000);

    return () => clearInterval(interval)
  }, [])


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const { services, extraServices, testimonials, chooseUs } = data;


  return (
    <>
      <a href="#" className="fixed bottom-0 right-0 z-10"><RxDoubleArrowUp color="blue" size={25} /> </a>

      {/* starting homepage */}
      <div className="w-full h-[550px] md:h-[610px]">
        <div className="w-full h-full ">
          <div className="absolute w-full h-[550px] md:h-[610px] bg-gradient-to-r from-black"></div>
          <img className="w-full h-full object-cover" src={bg} alt="samagra" />
          <div className="absolute p-4 top-[28%] left-[10%] border-l-2 border-orange-400 text-white">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">We
              <Typewriter
                words={["lcome to Samagra Builders", " Are Commercial Renovation Experts !"]}
                loop={false}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
                cursorColor="gray"
              />
            </h1>
            <p className="lg:w-[60%] text-xs text-justify md:text-base">
              For residential homes, commercial structures, healthcare,
              hospitality, and much more, we provide construction service, Home
              improvement, Seepage control, and Waterproffing, Renovation. You
              give us a request, and we'll give you the best services for your
              upcoming major project.
            </p>
            <button className="mt-4 bg-yellow-500 py-2 px-4 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="w-full p-4 mt-10 lg:mt-20 relative h-[40%]" data-aos="fade-up">
        <h1 className="text-xl font-bold text-red-500">Why Choose Us ?</h1>
        <h1 className="text-xl md:text-3xl font-bold w-full">Six Reasons For People Choosing Us</h1>
        <div className="grid gap-4 grid-cols-1 grid-rows-6 sm:grid-cols-3 sm:grid-rows-2 mt-8">
          {
            chooseUs.map((item, id) => (
              <ChooseusCard key={id} title={item.title} icon={item.icon} content={item.content} />
            ))
          }
        </div>
      </div>

      {/* About the company */}
      <div className="w-full p-4 mt-10 lg:mt-20 relative" data-aos="fade-up">
        <div className="lg:flex">
          <div className="basis-1/2 mr-10 hidden lg:block">
            <img src={photos[index]} alt="/" className="h-full" />
          </div>
          <div className="basis-1/2">
            <p className="text-red-600 font-bold text-lg">About the company</p>
            <h1 className="text-xl font-semibold">Professional Engineering Experts</h1>
            <p className="my-2 text-sm lg:text-base text-justify lg:pr-5">Samagra Builders Pvt. Ltd. is an engineering startup company based in Nepal that prepares professional DPRs, engineering designs, and constructs all kinds of buildings and structures. We specialize in identifying and solving common and complex problems related to post construction such as color fading, water penetration, water retention, structural and non-structural cracks, etc. by using modern technology and professional engineers/home inspectors.</p>
            <p className="text-justify text-sm lg:text-base lg:pr-5">It is necessary to properly design, construct and inspect any structure to measure its impact. Our goal is to provide a complete solution to potential problems that could occur in any building by carefully analyzing and engineering them. We focus on engineering design and house maintenance issues and are registered with the Nepal government as Samagra Builders Private Limited, located in Pepsicola-32, Kathmandu. Our company has registered engineers, experienced sub-engineers, and skilled manpower. Our services cater to a wide range of customer</p>
            <p className="flex mt-5 items-center"><FaAward size={30} color="red" /> &nbsp; Certified Company</p>
            <button className="mt-4 bg-yellow-500 py-2 px-4 rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 mt-5 lg:px-20 gap-[2px]">
          <div className="bg-red-400 text-white text-xl p-5 text-center rounded-md">
            <p>3 + <br /> Years in Business</p>
          </div>

          <div className="bg-orange-200 text-white text-xl p-5 text-center rounded-md">
            <p>80 + <br /> Happy Clients</p>
          </div>

          <div className="bg-lime-500 text-white text-xl p-5 text-center rounded-md">
            <p>200 + <br /> Projects Completed</p>
          </div>

          <div className="bg-blue-800 text-white text-xl p-5 text-center rounded-md">
            <p>18 + <br /> Trained Staff</p>
          </div>
        </div>
      </div>

      {/* our services */}
      <div className="w-full p-4 mt-10 lg:mt-20 relative bg-slate-900" data-aos="zoom-in">
        <div className="flex justify-center w-full items-center flex-col">
          <h1 className="text-lg sm:text-xl text-red-500 font-bold">Our Services</h1>
          <p className="text-xl sm:text-2xl text-white text-center">We Provide Superior Enginerring Services</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-5 mt-5">
          {
            services.map((item, id) => (
              <div key={id} className="">
                <ServiceCard title={item.title} content={item.content} serviceImg={item.servImg} />
                <p className="mx-auto text-white cursor-pointer hover:bg-green-500 w-fit mb-5 bg-yellow-500 rounded-md px-4 py-2">Read More</p>
              </div>
            ))
          }
        </div>
        <p className="text-red-500 text-base sm:text-lg mt-2 border-t-[1px] border-gray-300 pt-5 mb-3">Additional Services</p>
        <h1 className="text-white text-xl md:text-3xl font-semibold">We Also Offer</h1>
        <div className="text-white text-sm text-justify my-5">
          <p className="lg:w-[80%]">Having served for the past 3 years, we've been providing several engineering services with quality assurance and guarantee. We are also established as a renowned engineering service provider in Nepalese market and construction industry.</p>
          {
            extraServices.map((item, id) => (
              <div key={id} className="mt-4 flex items-center gap-x-2"><HiOutlineArrowCircleRight color="purple" size={25} /><p>{item}</p></div>
            ))
          }
        </div>
      </div>

      {/* testimonials */}
      <div className="w-full p-4 relative mt-10 lg:mt-20" data-aos="fade-up">
        <h1 className="text-2xl text-center font-bold text-black mb-5">People Say The Nicest Things</h1>
        <div className="grid grid-rows-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-5">
          <Testimonials name={testimonials[0].name} description={testimonials[0].description} rating={testimonials[0].rating} thoughts={testimonials[0].thoughts} img={testimonials[0].imgTestimonial} />
          <Testimonials name={testimonials[1].name} description={testimonials[1].description} rating={testimonials[1].rating} thoughts={testimonials[1].thoughts} img={testimonials[1].imgTestimonial} />
          <Testimonials name={testimonials[2].name} description={testimonials[2].description} rating={testimonials[2].rating} thoughts={testimonials[2].thoughts} img={testimonials[2].imgTestimonial} />
        </div>
      </div>
    </>
  );
};

export default Home;
