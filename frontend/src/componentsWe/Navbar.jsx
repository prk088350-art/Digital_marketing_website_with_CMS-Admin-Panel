import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      dropdown: [
        { name: "SEO", path: "/services/seo" },
        { name: "Social Media Marketing", path: "/services/smm" },
        { name: "E-commerce", path: "/services/e-commerce" },
        { name: "Web Development", path: "/services/web-development" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact-us" },
    ...(isLoggedIn ? [{ name: "Admin", path: "/Admin" }] : []),
    
  ];

  const closeMenu = () => {
    setOpen(false);
    setServiceOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate('/');
  };


  return (
    <>
      <nav className="bg-[#071228] opacity-75 shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-9/10 mx-auto px-4 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-[#06251E]">
            <img src="../src/assets/brand logo.webp" alt="logo Brandhara"
             className="h-18 w-full" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                >
                  <button className="text-sm font-medium pb-1 text-white hover:border-b-2 hover:border-[#06251E]">
                    {item.name}
                  </button>

                  {/* Dropdown */}
                  <div className="absolute left-0 w-52 bg-[#071228] shadow-lg rounded opacity-80 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-white hover:text-[#a3e635]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium pb-1 ${
                    location.pathname === item.path
                      ? "border-b-2 border-[#a3e635] text-white"
                      : "text-white hover:border-b-2 hover:border-[#a3e635]"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
            
           {isLoggedIn ? (
              <Button className="border rounded bg-[#a3e635] text-black hover:bg-white" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button className="border rounded bg-[#a3e635] text-black hover:bg-white">
                <Link to={'/login'}>Login</Link>
            </Button>)
           }
            
          </div>
          

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden bg-[#06251E] p-2 rounded text-white"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-2xl"
        >
          ✕
        </button>

        <div className="mt-20 flex flex-col space-y-4 px-6">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="text-lg font-medium text-[#06251E]"
                >
                  {item.name}
                </button>

                {serviceOpen && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={closeMenu}
                        className="text-[#06251E]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="text-lg font-medium text-[#06251E]"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;