import React from 'react'
import { ArrowRight } from "lucide-react";

const Socialmediamarket = () => {
  return (
    <section>
         <div
            className="w-full min-h-screen relative bg-cover bg-center"
            style={{ backgroundImage: `url(https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg)` }}
          >
            <div className="absolute inset-0 bg-[#071228] opacity-90"></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-5xl md:text-7xl">Connect Your Audience Through </span><br />Social <span className="text-[#a3e635]">Media Marketing</span>
              </h1>
                    
              <p className="mt-6 text-lg md:text-xl">
                Engage and connect with your audience effectively using strategic <br />social media marketing for business growth.

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
    </section>
  )
}

export default Socialmediamarket
