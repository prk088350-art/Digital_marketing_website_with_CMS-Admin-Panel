import React from 'react'
import { ArrowRight } from "lucide-react";

const Seo = () => {
  return (
    <section>
      <div
            className="w-full min-h-screen relative bg-cover bg-center"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1625296276703-3fbc924f07b5)` }}
          >
            <div className="absolute inset-0 bg-[#071228] opacity-90"></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-5xl md:text-7xl">Improve Efficiency with</span><br /> <span className="text-[#a3e635]">Business Optimization</span>
              </h1>
                    
              <p className="mt-6 text-lg md:text-xl">
                Enhance your business performance and productivity through strategic planning <br /> and effective optimization solutions.

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

export default Seo
