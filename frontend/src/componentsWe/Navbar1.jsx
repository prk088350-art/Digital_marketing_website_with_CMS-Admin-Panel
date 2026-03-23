import React from 'react'
import { Link } from 'react-router-dom' // Link import karna na bhoolein

const Navbar1 = () => {
  return (
    <section className="  fixed h-screen w-1/4 bg-gray-100 flex flex-col gap-5 p-5 mt-20">
      {/* Blog Button */}
      <Link to="/Admin" className="bg-green-500 text-white py-2 rounded-lg text-center">
        Blog
      </Link>
      
      {/* Portfolio Button - Ab ye sahi kaam karega */}
      <Link to="/Admin/portfolio" className="bg-green-500 text-white py-2 rounded-lg text-center">
        Portfolio
      </Link>
      <Link to="/Admin/message" className="bg-green-500 text-white py-2 rounded-lg text-center">
        Message
      </Link>
    </section>
  )
}

export default Navbar1