import React from 'react'
import { ArrowRight } from "lucide-react";
import Websuccess from './websuccess.jsx';

const Webdev = () => {
  return (
    <div>
      <div
            className="w-full min-h-screen relative bg-cover bg-center"
            style={{ backgroundImage: `url(https://t4.ftcdn.net/jpg/04/19/26/97/240_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg)` }}
          >
            <div className="absolute inset-0 bg-[#071228] opacity-90"></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-5xl md:text-7xl">Custom Web <span className="text-[#a3e635]">Design &</span> </span><br />Development Services
              </h1>
                    
              <p className="mt-6 text-lg md:text-xl">
                We create fast, responsive, and modern websites tailored to your business <br />goals and brand identity.
              </p>
              <div className="flex gap-20 mt-20">
                <a href="/contact-us">
              <button className="bg-[#c1ff00] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-[#d4ff4d] transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button></a>
              </div>
              
            </div>
          </div>
           
            <Websuccess />


    </div>
  )
}

export default Webdev
