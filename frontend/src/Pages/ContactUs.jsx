import React, { useState } from 'react';
import axios from "axios"
import { Mail, Phone, MapPin, Clock , CheckCircle2} from 'lucide-react';

const ContactUs = () => {

    const users = {
        fname: "",
        phone: "",
        email:"",
        subject:"",
        message:""
    }

    const [user, setuser] = useState(users);


    const handle = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
        
    }

    const submit = async (e) => {
        e.preventDefault();
        console.log(user)
        await axios.post("http://localhost:7000/Message/upload", user)

            .then((response) => {
                console.log(response)
                window.location.reload();
            }).catch(error => console.log(error))

    }

    const contactDetails = [
        {
            title: "Email Us",
            icon: <Mail className="w-6 h-6 text-[#a3e635]" />,
            lines: ["info@branddhara.com", "branddharaservicesofficial@gmail.com"],
        },
        {
            title: "Call Us",
            icon: <Phone className="w-6 h-6 text-[#a3e635]" />,
            lines: ["+91 8210897320", "+91 99719 67746"],
        },
        {
            title: "Visit Us",
            icon: <MapPin className="w-6 h-6 text-[#a3e635]" />,
            lines: ["B-10 631, Niti Khand 2, Indirapuram,", "Ghaziabad, Uttar Pradesh - 201014"],
        },
        {
            title: "Business Hours",
            icon: <Clock className="w-6 h-6 text-[#a3e635]" />,
            lines: ["Mon - Fri: 10:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
        },
    ];
         
    const benefits = [
    "Free initial consultation and project assessment",
    "24/7 customer support and dedicated account manager",
    "Proven track record with 500+ successful projects",
    "Competitive pricing with flexible payment options"
  ];


    return (
        // <section className="bg-slate-50 py-24 px-6 sm:px-8 lg:px-12">
        //     <div className="container mx-auto">

        //         <div className="mb-12 space-y-4 text-center">
        //             <h2 className="text-4xl font-bold text-[#0B2C19] md:text-5xl">
        //                 Contact Us
        //             </h2>
        //             <div className="mx-auto h-1.5 w-24 rounded-full bg-[#A3FF00]" />
        //         </div>

        //         <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm md:p-12">
        //             <form className="space-y-6" onSubmit={submit}>

                       
        //                 <div className="space-y-2">
        //                     <label
        //                         htmlFor="fname"
        //                         className="ml-1 block text-sm font-semibold text-slate-700"
        //                     >
        //                         Name
        //                     </label>
        //                     <input
        //                         type="text"
        //                         id="fname"
        //                         name="fname"
        //                         onChange={handle}
        //                         placeholder="Your full name"
        //                         className="w-full rounded-xl border border-slate-200 px-6 py-4 placeholder:text-slate-300 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#A3FF00]"
        //                     />
        //                 </div>

        //                <div className="space-y-2">
        //                     <label
        //                         htmlFor="phone"
        //                         className="ml-1 block text-sm font-semibold text-slate-700"
        //                     >
        //                         Phone Number
        //                     </label>
        //                     <input
        //                         type="text"
        //                         id="phone"
        //                         name="phone"
        //                         onChange={handle}
        //                         placeholder=" +91 XXXXX-XXXXX"
        //                         className="w-full rounded-xl border border-slate-200 px-6 py-4 placeholder:text-slate-300 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#A3FF00]"
        //                     />
        //                 </div>

        //                 <div className="space-y-2">
        //                     <label
        //                         htmlFor="email"
        //                         className="ml-1 block text-sm font-semibold text-slate-700"
        //                     >
        //                         Email
        //                     </label>
        //                     <input
        //                         type="email"
        //                         id="email"
        //                         name="email"
        //                         onChange={handle}
        //                         placeholder="example@mail.com"
        //                         className="w-full rounded-xl border border-slate-200 px-6 py-4 placeholder:text-slate-300 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#A3FF00]"
        //                     />
        //                 </div>

        //                 <div className="space-y-2">
        //                     <label
        //                         htmlFor="subject"
        //                         className="ml-1 block text-sm font-semibold text-slate-700"
        //                     >
        //                         Subject
        //                     </label>
        //                     <input
        //                         type="text"
        //                         id="subject"
        //                         name="subject"
        //                         onChange={handle}
        //                         placeholder="Subject"
        //                         className="w-full rounded-xl border border-slate-200 px-6 py-4 placeholder:text-slate-300 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#A3FF00]"
        //                     />
        //                 </div>

                       
        //                 <div className="space-y-2">
        //                     <label
        //                         htmlFor="message"
        //                         className="ml-1 block text-sm font-semibold text-slate-700"
        //                     >
        //                         Message
        //                     </label>
        //                     <textarea
        //                         id="message"
        //                         name="message"
        //                         rows={5}
        //                         onChange={handle}
        //                         placeholder="How can we help you?"
        //                         className="w-full resize-none rounded-xl border border-slate-200 px-6 py-4 placeholder:text-slate-300 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#A3FF00]"
        //                     />
        //                 </div>

                        
        //                 <button
        //                     type="submit"
        //                     className="mt-4 w-full rounded-xl bg-[#0B2C19] py-5 text-lg font-bold text-[#A3FF00] transition-all duration-300 hover:bg-[#082012] hover:shadow-lg"
                            
        //                 >
        //                     Send Message
        //                 </button>

        //             </form>
        //         </div>

        //     </div>
        // </section>
       <>
        <div className="bg-[#020617] text-white pt-30 pb-5 font-sans">
      <div className="max-w-full mx-auto text-center mb-16">
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="text-[#a3e635]">Touch</span>
        </h2>
        <p className="text-gray-300 text-sm lg:text-xl px-5 ">
          Have a question or ready to start your project? We're here to help you succeed
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-full px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactDetails.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#0a0f1e] border border-gray-800 rounded-xl p-8 transition-all hover:border-[#a3e635] -500/50 group"
          >
            {/* Icon Container */}
            <div className="bg-[#161b2c] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              {item.icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            
            <div className="space-y-2">
              {item.lines.map((line, idx) => (
                <p key={idx} className="text-gray-400 text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-[#020617] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-5 bg-[#0a0f1e] border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-3">
            Send Us a <span className="text-[#a3e635]">Message</span>
          </h2>
          
          <form className="space-y-5" onSubmit={submit}>
            <div className="grid grid-cols-1 gap-1">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input 
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={handle}
                  placeholder="Your full name" 
                  className="w-full bg-[#020617] border border-gray-800 rounded-lg py-2 px-2 focus:outline-none focus:border-[#a3e635] transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  onChange={handle}
                  placeholder="example@mail.com"
                  className="w-full bg-[#020617] border border-gray-800 rounded-lg py-2 px-2 focus:outline-none focus:border-[#a3e635] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={handle}
                  placeholder=" +91 XXXXX-XXXXX" 
                  className="w-full bg-[#020617] border border-gray-800 rounded-lg py-2 px-2 focus:outline-none focus:border-[#a3e635] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={handle}
                  placeholder="Subject"
                  className="w-full bg-[#020617] border border-gray-800 rounded-lg py-2 px-2 focus:outline-none focus:border-[#a3e635] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message *</label>
                <textarea 
                 id="message"
                 name="message"             
                 onChange={handle}
                 placeholder="How can we help you?"
                 rows="5" 
                  className="w-full bg-[#020617] border border-gray-800 rounded-lg py-2 px-2 focus:outline-none focus:border-[#a3e635] transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#a3e635] hover:[#a3e635] text-white font-bold mb-2 py-4 rounded-lg transition-all duration-300 transform active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Benefits & Image */}
        <div className="lg:col-span-7 space-y-8">
          {/* Why Choose Us Card */}
          <div className="bg-[#0a0f1e] border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-8">
              Why <span className="text-[#a3e635]">Choose Us</span>
            </h2>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#a3e635] fill-orange-500/10" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base leading-snug">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative Image */}
                        <div className="h-64 md:h-80 w-full overflow-hidden rounded-xl border border-gray-800">
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.8503477206923!2d77.36974640022284!3d28.641581487027743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4886b66990f94dfd%3A0x5fb8de2d8a2aa96!2sBranddhara%20-%20%7C%20Best%20digital%20marketing%20agency%20in%20Ghaziabad%20%7C%20Social%20Media%20marketing%20agency!5e0!3m2!1sen!2sin!4v1772107606245!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                            ></iframe>
                        </div>
        </div>

      </div>
    </div>
      </>
    );
};

export default ContactUs;