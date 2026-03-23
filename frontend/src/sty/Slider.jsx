import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";



const slides = [
  {
    id: 1,
    title: "Custom Web Design & Development Services",
    desc: "This is first slide",
    bg: "https://t4.ftcdn.net/jpg/04/19/26/97/240_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg",
  },
  {
    id: 2,
    title: "Grow Your Online Business with Expert Management",
    desc: "This is second slide",
    bg: "https://media.istockphoto.com/id/2140172947/photo/women-using-laptop-shopping-online-with-cart-icons-with-a-virtual-interface-shipping-global.jpg?s=612x612&w=0&k=20&c=_uRyv3FW3oowPPmo6zd4ImJAWOe9hSc5e5PSuX18Inw=",
  },
  {
    id: 3,
    title: "Connect with Your Audience Through Social Media Marketing",
    desc: "This is third slide",
    bg: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
  },
  {
    id: 4,
    title: "Design a Distinctive Brand Identity",
    desc: "This is fourth slide",
    bg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Improve Efficiency with Business Optimization",
    desc: "This is fifth slide",
    bg: "https://images.unsplash.com/photo-1625296276703-3fbc924f07b5",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Slides Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
          <div
            className="w-full h-full relative flex-shrink-0 bg-cover bg-center"
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
              <button className="bg-[#c1ff00] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-[#d4ff4d] transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </div>
              
            </div>
          </div>

           <div
            className="w-full h-full relative flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://media.istockphoto.com/id/2140172947/photo/women-using-laptop-shopping-online-with-cart-icons-with-a-virtual-interface-shipping-global.jpg?s=612x612&w=0&k=20&c=_uRyv3FW3oowPPmo6zd4ImJAWOe9hSc5e5PSuX18Inw=)` }}
          >
            <div className="absolute inset-0 bg-[#071228] opacity-90"></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-5xl md:text-7xl">Grow Your <span className="text-[#a3e635]">Online Business </span> </span><br />with Expert Management
              </h1>
                    
              <p className="mt-6 text-lg md:text-xl">
               Boost your online business with expert management, smart strategies, <br />and consistent growth-driven digital solutions.

              </p>
              <div className="flex gap-20 mt-20">
              <button className="bg-[#c1ff00] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-[#d4ff4d] transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </div>
              
            </div>
          </div>

           <div
            className="w-full h-full relative flex-shrink-0 bg-cover bg-center"
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
              <button className="bg-[#c1ff00] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-[#d4ff4d] transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </div>
              
            </div>
          </div>

           <div
            className="w-full h-full relative flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop)` }}
          >
            <div className="absolute inset-0 bg-[#071228] opacity-90"></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-5xl md:text-7xl">Design a <span className="text-[#a3e635]">Distinctive</span></span><br /> Brand Identity
              </h1>
                    
              <p className="mt-6 text-lg md:text-xl">
                Create a unique and memorable brand identity that stands out <br />and resonates with your target audience.

              </p>
              <div className="flex gap-20 mt-20">
              <button className="bg-[#c1ff00] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-[#d4ff4d] transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              </div>
              
            </div>
          </div>

           <div
            className="w-full h-full relative flex-shrink-0 bg-cover bg-center"
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
              <button className="bg-[#c1ff00] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-[#d4ff4d] transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </div>
              
            </div>
          </div>
          

      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70"
      >
        ❯
      </button>
    </div>
  );
}