import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#061B2E] text-white">
  <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Logo & About */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-3xl font-bold">
          <div className="relative h-7 w-7 rounded-full bg-[#A3FF00]">
            <div className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-slate-900 border-2 border-[#0B2C19]" />
          </div>
          <span className="text-[#A3FF00]">Digital Marketing Agencys</span>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>

        <div className="space-y-3">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" className="social-btn">
              <i className="fab fa-facebook-f text-sm" />
            </a>
            <a href="#" className="social-btn">
              <i className="fab fa-youtube text-sm" />
            </a>
            <a href="#" className="social-btn">
              <i className="fab fa-twitter text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="space-y-6">
        <h4 className="text-xl font-bold">Navigation</h4>
        <ul className="space-y-3 text-slate-300">
          <li><a href="/" className="footer-link">Home</a></li>
          <li><a href="/blog" className="footer-link">Blogs</a></li>
          <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
          <li><a href="/services" className="footer-link">Services</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="space-y-6">
        <h4 className="text-xl font-bold">Quick Links</h4>
        <ul className="space-y-3 text-slate-300">
          <li><a href="/" className="footer-link">Pages</a></li>
          <li><a href="/contact-us" className="footer-link">Contact</a></li>
          <li><a href="/blog" className="footer-link">Blog</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="space-y-6">
        <h4 className="text-xl font-bold">Contact Info</h4>
        <ul className="space-y-5 text-slate-300">
          <li className="flex items-center gap-4">
            <span className="icon-box">📞</span>
            <span>8989898989</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="icon-box">✉️</span>
            <span>prk088350@gmail.com</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="icon-box">📍</span>
            <span>New Ashok Nagar , Delhi</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</footer>

  );
};

export default Footer;