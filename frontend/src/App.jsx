import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';

import Navbar from './componentsWe/Navbar.jsx';
import Footer from './componentsWe/Footer.jsx';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';

import Seo from './Pages/services/Seo.jsx';
import Socialmediamarket from './Pages/services/Socialmediamarket.jsx';
import Appdev from './Pages/services/Appdev.jsx';
import Webdev from './Pages/services/Webdev.jsx';

import Navbar1 from './componentsWe/Navbar1.jsx';
import Box1 from './Pages/Box1.jsx';
import Portfolio1 from './Pages/Portfolio1.jsx';


import Login from './pages1/Login.jsx';
import Message1 from './Pages/Message1.jsx';
import ProtectedRoute from './lib/ProtectedRoute.jsx';


const AppLayout = () => (
  <div className='flex justify-between gap-5'>
    <div>
      <Navbar1 />
    </div>

    <div className="lg:ml-60 flex-3">
      <Outlet />
    </div>
  </div>
);

function Layout() {

  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/Admin");
  const isLogin = location.pathname.startsWith("/login");
  const signup = location.pathname.startsWith("/Signup");
  const verifyEmail = location.pathname.startsWith("/verify");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  
  return (
    <div className="min-h-screen flex flex-col">

      {isLogin || signup || verifyEmail ? null : <Navbar />}

      <main>
        <Routes>

         {isLoggedIn && (
             <Route element={<ProtectedRoute />}>
          {/* cms */}
          <Route path="/Admin" element={<AppLayout />}>
            <Route index element={<Box1 />} />
            <Route path="portfolio" element={<Portfolio1 />} />
            <Route path="message" element={<Message1 />} />
          </Route>
          </Route>
         )}   
        

          {/* webpages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo" element={<Seo />} />
          <Route path="/services/smm" element={<Socialmediamarket />} />
          <Route path="/services/e-commerce" element={<Appdev />} />
          <Route path="/services/web-development" element={<Webdev />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />

        {/* Auth*/}
        <Route path="/login" element={<Login />} />
        
         
         
          

        </Routes>
      </main>

      {!isAdmin && <Footer />}

    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;