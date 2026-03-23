import React from 'react';

import Slider from '../sty/Slider.jsx';
import Autoslid from '../sty/Autoslid.jsx';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Servi from '../sty/Servi.jsx';
import Portf from '../sty/Portf.jsx';


const Home = () => {
    return (
        <div>
            <Slider />
            
            <Autoslid />
     <section className="bg-[#071228]  text-white py-25 px-6 md:px-12 lg:px-18">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center gap-18">
        
        {/* Left Side: Image Container */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-3xl h-[300px] lg:h-[500px] overflow-hidden shadow-2xl">
                            <img
                                src="https://www.simplilearn.com.cach3.com/ice9/free_resources_article_thumb/Five-Important-Steps-to-Upskilling-Your-Digital-Marketing-Team.jpg"
                                alt="Team collaborating"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <header className="space-y-2">
            <span className="text-[#a3e635] font-bold tracking-widest text-sm uppercase">
              About Our Agency
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We Help Brands <br />
              <span className="text-[#c1ff00]">Grow & Succeed</span>
            </h2>
          </header>

          <p className="text-gray-400 text-lg leading-relaxed">
            Branddhara is more than just a digital agency. We are your strategic partners 
            in growth, committed to delivering exceptional results through innovative 
            digital solutions.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-7">
            {[
              "Data-Driven Strategies",
              "Expert Team Members",
              "ROI Focused Approach",
              "24/7 Support"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="text-[#a3e635] w-5 h-5" />
                <span className="text-gray-200 font-medium py-1">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a href="/contact-us">
            <button className="bg-[#c1ff00] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-[#d4ff4d] transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
            {/* s3*/}
          <Servi />
            {/* s4 */}
            <section className="container mx-auto px-4 sm:px-8 lg:px-12 py-20 bg-white">

                {/* TOP CONTENT */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">

                    <div className="lg:w-1/2 space-y-4">
                        <span className="inline-block px-4 py-1 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 text-sm font-medium">
                            About Us
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
                            Maximize Your Growth with Our Digital Marketing
                        </h2>
                    </div>

                    <div className="lg:w-1/3">
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* IMAGE */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                                alt="Team Presentation"
                                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                            />
                        </div>
                    </div>

                    {/* CONTENT BOX */}
                    <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-8 border border-slate-100">

                        {/* ITEM 1 */}
                        <div className="flex gap-6 items-start">
                            <div className="bg-[#A3FF00] text-[#0B2C19] font-bold text-xl w-14 h-14 rounded-xl flex items-center justify-center">
                                01
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-slate-900">
                                    Customized Strategies
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>

                        {/* ITEM 2 */}
                        <div className="flex gap-6 items-start">
                            <div className="bg-[#A3FF00] text-[#0B2C19] font-bold text-xl w-14 h-14 rounded-xl flex items-center justify-center">
                                02
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-slate-900">
                                    Experienced Team
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>

                        {/* ITEM 3 */}
                        <div className="flex gap-6 items-start">
                            <div className="bg-[#A3FF00] text-[#0B2C19] font-bold text-xl w-14 h-14 rounded-xl flex items-center justify-center">
                                03
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-slate-900">
                                    Client-Centric Approach
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* s6 */}
            <Portf />
            {/* s8 */}
            <div className="bg-[#061B2E]">
            <section className="container mx-auto px-4 sm:px-8 lg:px-12 py-16">
                <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden flex items-center justify-center">

                    
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600"
                            alt="Technology Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
                    </div>

                    
                    <div className="relative z-10 text-center px-6 max-w-3xl space-y-8">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                            Subscribe Our <span className="text-[#a3e635]"> Newsletter </span>
                        </h2>

                        <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            
                            <a href="/contact-us">
                            <button className="bg-[#a3e635] text-slate-900 px-8 sm:px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all">
                                Contact Us
                            </button>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            </div>

        </div>
    );
};



export default Home;