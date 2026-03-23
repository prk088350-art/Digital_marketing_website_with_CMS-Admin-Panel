import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Portfolio = () => {

    const [User, setUser] = useState([]);
    
     const fetchdata = async () => {
        const response = await axios.get("http://localhost:7000/api/portfolio/images");
        setUser(response.data.data);
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <section className="bg-[#0B2540] py-24 px-6 sm:px-8 lg:px-12 font-sans">
  <div className="container mx-auto">

    <div className="mb-16 space-y-4 text-center">
      <h2 className="text-4xl font-bold text-[#A3FF00] md:text-5xl">
        Our Portfolio
      </h2>
      <div className="mx-auto h-1.5 w-24 rounded-full bg-[#A3FF00]" />
    </div>

    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

      {User.map((u , index)=>(
      <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#071228] hover:border-[#A3FF00] bg-[#071228] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="h-64 overflow-hidden">
          <img
            src={u.img}
            alt="Digital Marketing Project"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="space-y-4 p-8">
          <h3 className="text-2xl font-bold text-[#A3FF00]">
            {u.nam}
          </h3>
          <p className="leading-relaxed text-white">
            {u.about}
          </p>
          <button className="rounded-xl bg-[#0B2C19] px-6 py-2.5 text-sm font-bold text-[#A3FF00] transition-all duration-300 hover:bg-[#A3FF00] hover:text-[#0B2C19]">
            View Details
          </button>
        </div>
      </div>
        ))}
     
      
      
      

    </div>
  </div>
</section>

    );
};

export default Portfolio;