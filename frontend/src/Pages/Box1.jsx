
import React, { useEffect, useState } from 'react';
import axios from "axios";

const Box1 = () => {
    const initialUserState = { n: "", a: "", i: "" };
    const [user, setuser] = useState(initialUserState);
    const [User, setUser] = useState([]);
    // Naya State: Track karne ke liye ki hum edit kar rahe hain ya naya create
    const [editId, setEditId] = useState(null);

    const handle = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        
        if (editId) {
            // EDIT LOGIC (PUT Request)
            await axios.put(`http://localhost:7000/api/update/${editId}`, user)
                .then((response) => {
                    console.log("Updated:", response);
                    setEditId(null);
                    setuser(initialUserState);
                    fetchdata(); // Data refresh karne ke liye
                }).catch(error => console.log(error));
        } else {
            // CREATE LOGIC (Post Request)
            await axios.post("http://localhost:7000/api/upload", user)
                .then((response) => {
                    console.log("Created:", response);
                    window.location.reload();
                }).catch(error => console.log(error));
        }
    };

    const fetchdata = async () => {
        const response = await axios.get("http://localhost:7000/api/images");
        setUser(response.data.data);
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const deleteUser = async (userid) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await axios.delete(`http://localhost:7000/api/delete/${userid}`)
                .then((response) => {
                    setUser((prevUser) => prevUser.filter((u) => u._id !== userid));
                }).catch(error => console.log(error));
        }
    };

    // EDIT BUTTON CLICK FUNCTION
    const startEdit = (selectedUser) => {
        setEditId(selectedUser._id); // ID save karo
        setuser({ n: selectedUser.n, a: selectedUser.a , i: selectedUser.i}); // Form mein data bharo
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Upar scroll karo
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setuser({ ...user, i: reader.result });
        };
    };


    return (
        <section className="container mx-auto mt-20 px-4 sm:px-8 w-3/4 lg:px-12 py-10 flex flex-col items-center gap-12">
            <div className="container mx-auto">
                {/* Main Form Card */}
                <div className="mx-auto max-w-4xl rounded-[2.5rem] border-2 border-[#A3FF00] bg-white p-8 shadow-xl md:p-12">
                    <h2 className="text-center mb-6 font-bold text-[#0B2C19] text-xl uppercase tracking-widest">
                        {editId ? "Edit Blog" : " New Blog"}
                    </h2>
                    
                    <form className="space-y-6" onSubmit={submit}>
                        <div className="flex flex-col md:flex-row gap-8">   
                            <div className="flex flex-col items-center gap-3">
                                <label
                                    htmlFor="projectImage"
                                    className="w-32 h-32 rounded-xl border border-slate-200 cursor-pointer flex items-center justify-center overflow-hidden bg-slate-50"
                                >
                                    {user.i ? (
                                        <img
                                            src={user.i}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="font-bold text-[#0B2C19] text-xs">
                                            Add Photo
                                        </span>
                                    )}
                                </label>

                                <input
                                    type="file"
                                    id="projectImage"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImage}
                                />
                            </div>


                            {/* Inputs */}
                            <div className="flex-1 space-y-4">
                                <div className="space-y-2">
                                    <label className="ml-1 text-sm font-semibold text-slate-700">Project Name</label>
                                    <input
                                        type="text"
                                        name="n"
                                        value={user.n} // Controlled input important hai
                                        onChange={handle}
                                        placeholder="Project Name"
                                        className="w-full rounded-xl border border-slate-200 px-6 py-4 focus:ring-2 focus:ring-[#A3FF00] outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="ml-1 text-sm font-semibold text-slate-700">About Project</label>
                                    <textarea
                                        name="a"
                                        value={user.a} // Controlled input important hai
                                        rows={4}
                                        onChange={handle}
                                        placeholder="Description..."
                                        className="w-full rounded-xl border border-slate-200 px-6 py-4 focus:ring-2 focus:ring-[#A3FF00] outline-none resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button type="submit" className="flex-1 rounded-xl bg-[#0B2C19] py-5 text-lg font-bold text-[#A3FF00] hover:shadow-lg transition-all">
                                {editId ? "Update Project" : "ADD"}
                            </button>
                            {editId && (
                                <button 
                                    type="button" 
                                    onClick={() => {setEditId(null); setuser(initialUserState);}}
                                    className="px-8 rounded-xl bg-slate-100 font-bold text-slate-500 hover:bg-slate-200"
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* List Section */}
                <div className="container mx-auto mt-16">
                    {User.map((u, index) => (
                        <div key={u._id} className="mx-auto max-w-4xl rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm md:p-12 mb-10 relative">
                            
                            {/* Circle Box Number */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#A3FF00] border-4 border-white rounded-full flex items-center justify-center shadow-md z-10">
                                <span className="text-[#0B2C19] font-bold text-sm">{index + 1}</span>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-32 h-32 rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                                        <img src={u.i} alt="Thumbnail" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Project Cover</span>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="space-y-1">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Name</h4>
                                        <div className="w-full rounded-xl bg-slate-50 px-6 py-4 text-lg font-semibold text-[#0B2C19]">
                                            {u.n}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">About Project</h4>
                                        <div className="w-full rounded-xl bg-slate-50 px-6 py-4 text-slate-600">
                                            {u.a}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Separator Circle Line */}
                            <div className="relative flex py-8 items-center">
                                <div className=" border-t border-slate-100"></div>
                                <span className=" mx-4 w-3 h-3 rounded-full bg-slate-200"></span>
                                <div className=" border-t border-slate-100"></div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => startEdit(u)}
                                    className="flex-1 rounded-xl border-2 border-[#0B2C19] py-4 text-sm font-bold text-[#0B2C19] hover:bg-[#0B2C19] hover:text-white transition-all"
                                >
                                    Edit Project
                                </button>
                                <button
                                    onClick={() => deleteUser(u._id)}
                                    className="flex-1 rounded-xl bg-red-50 py-4 text-sm font-bold text-red-600 hover:bg-red-600 hover:text-white transition-all"
                                >
                                    Delete Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Box1;