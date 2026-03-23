import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Message1 = () => {
     
     const [User, setUser] = useState([]);

      const fetchdata = async () => {
        const response = await axios.get("http://localhost:7000/Message/images");
        setUser(response.data.data);
    };

    useEffect(() => {
        fetchdata();
    }, []);


    const deleteUser = async (userid) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await axios.delete(`http://localhost:7000/Message/delete/${userid}`)
                .then((response) => {
                    setUser((prevUser) => prevUser.filter((u) => u._id !== userid));
                }).catch(error => console.log(error));
        }
    };



  return (
        <section className="bg-slate-50 py-24 px-6 sm:px-8 lg:px-12 mt-20">
  <div className="container mx-auto max-w-5xl">

    {/* Heading */}
    <div className="mb-12 space-y-4 text-center">
      <h2 className="text-4xl font-bold text-[#0B2C19] md:text-5xl">
        Customer Messages
      </h2>
      <div className="mx-auto h-1.5 w-24 rounded-full bg-[#A3FF00]" />
    </div>

    {/* Cards Wrapper (map yahin lagega) */}
    <div className="grid gap-8 md:grid-cols-2">

      {User.map((u,index)=>(
        <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-md">

        <div className="space-y-3 text-slate-700">
          <p>
            <span className="font-semibold text-[#0B2C19]">Name:</span> {u.fname}
          </p>

          <p>
            <span className="font-semibold text-[#0B2C19]">Phone:</span> {u.phone}
          </p>

          <p>
            <span className="font-semibold text-[#0B2C19]">Email:</span> {u.email}
          </p>

          <p>
            <span className="font-semibold text-[#0B2C19]">Subject:</span> {u.subject}
          </p>

          <p>
            <span className="font-semibold text-[#0B2C19]">Message:</span>
            {u.message}
          </p>
        </div>

        {/* Delete Button (last me) */}
        <button
          onClick={() => deleteUser(u._id)}
          className="mt-6 w-full rounded-xl bg-red-600 py-4 text-lg font-bold text-white transition hover:bg-red-700"
        >
          Delete
        </button>

      </div>
      ))}
      
      

    </div>

  </div>
</section>

  )
}

export default Message1
