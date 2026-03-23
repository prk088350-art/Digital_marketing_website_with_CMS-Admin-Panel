import React from "react";

const services = [
  {
    title: "Social Media Marketing",
    desc: "Engage and connect with your audience effectively using strategic social media marketing for business growth.",
    image: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
  },
  {
    title: "Website Design",
    desc: "Create stunning, high-performance websites that capture your brand essence and convert visitors into loyal customers.",
    image: "https://t4.ftcdn.net/jpg/04/19/26/97/240_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg",
  },
  {
    title: "E-Commerce Management",
    desc: "Optimize your online store operations on Amazon, Flipkart, and Shopify to increase conversions and scale revenue effectively.",
    image: "https://media.istockphoto.com/id/2140172947/photo/women-using-laptop-shopping-online-with-cart-icons-with-a-virtual-interface-shipping-global.jpg?s=612x612&w=0&k=20&c=_uRyv3FW3oowPPmo6zd4ImJAWOe9hSc5e5PSuX18Inw=",
  },
  {
    title: "Branding & Design",
    desc: "Build a distinctive visual identity with professional logo design and brand guidelines that resonate with your target audience.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  
];

const Servi = () => {
  return (
    <section className="bg-[#061B2E] text-white py-20">
      <div className="max-w-full mx-auto px-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Comprehensive <span className="text-[#a3e635]">Digital Services</span>
          </h2>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            We offer a full spectrum of digital solutions designed to help your
            business grow, innovate, and dominate in the modern marketplace.
          </p>
        </div>

        {/* Cards */}
        <div className="overflow-x-auto hide-scrollbar">
        <div className="flex min-w-500 gap-8 ">
          {services.map((service, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${service.image})` }}
    className="bg-[#0B2540] min-h-100 min-w-50 border border-[#1E3A5F] rounded-2xl p-8 flex flex-col h-full hover:border-[#a3e635] transition bg-cover bg-center bg-no-repeat"
  >
    <h3 className="text-xl font-semibold mb-4 mt-12 hover:text-[#a3e635]">
      {service.title}
    </h3>

    <p className="text-gray-300 mb-6">
      {service.desc}
    </p>

    <button className="mt-auto border border-[#a3e635] text-black px-4 py-2 rounded-lg hover:bg-[#a3e635] hover:text-white transition">
      Learn More →
    </button>
  </div>
))}
        </div>
        </div>

      </div>
    </section>
  );
};

export default Servi;