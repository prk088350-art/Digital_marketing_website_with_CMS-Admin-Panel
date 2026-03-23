import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Monitor, ShoppingCart, Palette } from 'lucide-react';

const Portf = () => {
  return (
    <div className="bg-[#0b1120] font-sans selection:bg-orange-500/30">
      <section className="py-25 px-20">
        <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <span className="text-[#a3e635] font-bold text-xs tracking-widest uppercase">Our Success Stories</span>
            <h2 className="text-5xl font-bold mt-4 text-white leading-tight">Case Studies & <span className="text-[#a3e635]">Marketing Results</span></h2>
            <div className="w-16 h-1.5 bg-[#2A7B9B] rounded-full my-6"></div>
          </div>
          <button className="bg-white hover:bg-[#a3e635] text-[#070707] font-bold py-3 px-8 rounded-full flex items-center gap-2">
            View All Case Studies <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-full mx-auto">
          {[
  {
    tag: "DIGITAL MARKETING",
    title: "Driving 150% ROI Through Data-Driven Marketing",
    about: "Implemented advanced analytics and targeted campaigns to maximize engagement and achieve a 150% return on investment for the client.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=60"
  },
  {
    tag: "WEBSITE DESIGN",
    title: "RetailHub Website Redesign & UX Overhaul",
    about: "Redesigned the RetailHub website with a modern interface and optimized user experience, increasing customer engagement and conversion rates.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60"
  },
  {
    tag: "E-COMMERCE",
    title: "Scaling FashionHub to $2.3M Revenue",
    about: "Optimized product pages, improved checkout flow, and implemented targeted marketing strategies to scale FashionHub’s revenue to $2.3M.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=60"
  },
  {
    tag: "DIGITAL MARKETING",
    title: "Driving 150% ROI Through Data-Driven Marketing",
    about: "Used performance tracking, audience segmentation, and paid campaigns to significantly boost brand visibility and ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60"
  },
  {
    tag: "WEBSITE DESIGN",
    title: "RetailHub Website Redesign & UX Overhaul",
    about: "Created a responsive and visually engaging website layout focused on seamless navigation and improved customer interaction.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=60"
  },
  {
    tag: "E-COMMERCE",
    title: "Scaling FashionHub to $2.3M Revenue",
    about: "Leveraged SEO, conversion optimization, and marketing automation to grow FashionHub into a multi-million dollar e-commerce brand.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=60"
  }
].map((c, i) => (
            <div key={i}
            className="bg-[#0f172a] rounded-3xl overflow-hidden border border-gray-800 group hover:border-gray-700 transition-all">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-[#a3e635] text-[10px] font-black px-3 py-1 rounded-full text-black">{c.tag}</div>
                <img src={c.image} alt="Case Study" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-white leading-snug">{c.title}</h3>
                <div className="flex gap-8 mb-8 text-white">
                  {c.about}
                </div>
                <button className="w-full flex items-center justify-between p-4 bg-[#1e293b]/50 rounded-xl text-gray-300 text-xs font-bold">
                  View Full Case Study <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portf;