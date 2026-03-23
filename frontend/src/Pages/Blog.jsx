import React, { useEffect, useState } from 'react';
import axios from "axios"

const Blog = () => {

    const [User, setUser] = useState([]);
     
    const fetchdata = async () => {
        const response = await axios.get("http://localhost:7000/api/images");
        setUser(response.data.data);
    };

    useEffect(() => {
        fetchdata();
    }, []);
    return (
        <section className="bg-[#0B2540] py-24 px-6 sm:px-8 lg:px-12">
            <div className="container mx-auto">

                <div className="mb-16 space-y-4 text-center">
                    <h2 className="text-4xl font-bold text-[#A3FF00] md:text-5xl">
                        Our Blogs
                    </h2>
                    <div className="mx-auto h-1.5 w-24 rounded-full bg-[#A3FF00]" />
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">


                   {User.map((u , index)=>(
                    <div className="group overflow-hidden rounded-[2.5rem] border border-[#071228] bg-[#071228] hover:border-[#A3FF00] shadow-sm transition-all duration-500 hover:shadow-xl">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={u.i}
                                alt="Marketing Strategy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute left-6 top-6 rounded-full bg-[#A3FF00] px-3 py-1 text-xs font-bold uppercase text-[#0B2C19]">
                                Company
                            </div>
                        </div>

                        <div className="space-y-4 p-8">
                            <h3 className="text-2xl font-bold leading-tight text-[#A3FF00] transition-colors group-hover:text-emerald-700">
                               {u.a}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                By Iterable on {new Date(u.createdAt).toLocaleString()}
                            </p>
                            <div className="">
                                <a href="#" className="group/link flex items-center gap-2 font-bold text-[#A3FF00]">
                                    Read Story
                                    <svg
                                        className="h-4 w-4 transition-transform group-hover/link:translate-x-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                   ))}

                </div>
            </div>
        </section>

    );
};

export default Blog;