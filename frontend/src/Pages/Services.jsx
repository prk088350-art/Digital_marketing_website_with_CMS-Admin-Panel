import React from 'react';

const Services = () => {
    return (
        <section className="bg-white py-24 px-6 sm:px-8 lg:px-12">
            <div className="container mx-auto">

                <div className="mb-16 space-y-4 text-center">
                    <h2 className="text-4xl font-bold text-[#0B2C19] md:text-5xl">
                        Our Services
                    </h2>
                    <div className="mx-auto h-1.5 w-24 rounded-full bg-[#A3FF00]" />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    
                    <div className="group rounded-[2.5rem] border border-slate-50 bg-white p-10 shadow-[0_10px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#A3FF00]">
                        <div className="mb-6 inline-block rounded-2xl bg-slate-50 p-4 transition-colors duration-300 group-hover:bg-[#A3FF00]">
                            <svg
                                className="h-8 w-8 text-[#0B2C19]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        <h3 className="mb-4 text-2xl font-bold text-[#0B2C19]">
                            SEO Optimization
                        </h3>
                        <p className="mb-8 leading-relaxed text-slate-500">
                            Boost your search rankings and drive organic traffic with our expert optimization techniques.
                        </p>

                        <a
                            href="#"
                            className="flex items-center gap-2 font-bold text-[#0B2C19] transition-colors group-hover:text-emerald-700"
                        >
                            Learn More
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>

                   
                    <div className="group rounded-[2.5rem] border border-slate-50 bg-white p-10 shadow-[0_10px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#A3FF00]">
                        <div className="mb-6 inline-block rounded-2xl bg-slate-50 p-4 transition-colors duration-300 group-hover:bg-[#A3FF00]">
                            <svg
                                className="h-8 w-8 text-[#0B2C19]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>

                        <h3 className="mb-4 text-2xl font-bold text-[#0B2C19]">
                            Social Media Marketing
                        </h3>
                        <p className="mb-8 leading-relaxed text-slate-500">
                            Engage your audience on platforms like Facebook and Instagram to build brand loyalty.
                        </p>

                        <a
                            href="#"
                            className="flex items-center gap-2 font-bold text-[#0B2C19] transition-colors group-hover:text-emerald-700"
                        >
                            Learn More
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>

                   
                    <div className="group rounded-[2.5rem] border border-slate-50 bg-white p-10 shadow-[0_10px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#A3FF00]">
                        <div className="mb-6 inline-block rounded-2xl bg-slate-50 p-4 transition-colors duration-300 group-hover:bg-[#A3FF00]">
                            <svg
                                className="h-8 w-8 text-[#0B2C19]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                        </div>

                        <h3 className="mb-4 text-2xl font-bold text-[#0B2C19]">
                            Content Creation
                        </h3>
                        <p className="mb-8 leading-relaxed text-slate-500">
                            Create compelling content that converts visitors into customers through storytelling.
                        </p>

                        <a
                            href="#"
                            className="flex items-center gap-2 font-bold text-[#0B2C19] transition-colors group-hover:text-emerald-700"
                        >
                            Learn More
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                    

                </div>
            </div>
        </section>

    );
};

export default Services;