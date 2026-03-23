import React from 'react'
import { TrendingUp, Monitor ,Award, Star, Check } from 'lucide-react';

const Websuccess = () => {
  
  const stats = [
    {
      icon: <Monitor className="w-8 h-8 text-[#a3e635]" />,
      value: "500+",
      label: "Successful Website Delivered",
      subtext: "Delivered with measurable results",
    },
    {
      icon: <Award className="w-8 h-8 text-[#a3e635]" />,
      value: "12+",
      label: "Years of Experience",
      subtext: "In Web Design & Development",
    },
    {
      icon: <Star className="w-8 h-8 text-[#a3e635]" />,
      value: "4.9",
      label: "Client Rating",
      subtext: "Based on verified reviews",
    },
  ];

  const certifications = [
    "Google Ads Certified",
    "Meta Blueprint Certified",
    "Google Analytics Expert",
    "HubSpot Certified",
  ];

  return (
    <section className="bg-[#0a1120] py-16 px-6 font-sans">
      <div className="max-w-full mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:px-10 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#111c31] border border-gray-800 rounded-xl p-10 flex flex-col items-center text-center transition-all hover:border-[#a3e635]/50"
            >
              <div className="mb-4">{stat.icon}</div>
              <h2 className="text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-xl font-semibold text-white mb-1">
                {stat.label}
              </p>
              <p className="text-gray-400 text-sm">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-2 text-white text-sm md:text-base font-medium">
              <Check className="w-5 h-5 text-[#a3e635]" strokeWidth={3} />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Websuccess
