import React from 'react'
import { ArrowRight } from "lucide-react";

const App = () => {
  return (
    <section>
        <div
            className="w-full min-h-screen relative bg-cover bg-center"
            style={{ backgroundImage: `url(https://media.istockphoto.com/id/2140172947/photo/women-using-laptop-shopping-online-with-cart-icons-with-a-virtual-interface-shipping-global.jpg?s=612x612&w=0&k=20&c=_uRyv3FW3oowPPmo6zd4ImJAWOe9hSc5e5PSuX18Inw=)` }}
          >
            <div className="absolute inset-0 bg-[#071228] opacity-90"></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-5xl md:text-7xl">Grow Your <span className="text-[#a3e635]">Online Business </span> </span><br />with Expert Management
              </h1>
                    
              <p className="mt-10 text-lg md:text-xl">
               Boost your online business with expert management, smart strategies, <br />and consistent growth-driven digital solutions.

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

export default App
