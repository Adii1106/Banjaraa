import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
export default function Navbar() {

  const demoUser = {
    email: "demo@banjaara.com",
    password: "123456",
    username: "Aditya",
  }

  const navigate = useNavigate()
  const [mobileMenu, setMobileMenu] = useState(false);

  
  const toSignup = ()=>{
    navigate('/login')
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/icons/logo.png"
            alt="Banjaraa"
            className="h-10 w-auto"
          />

          <h1 className="text-xl font-bold text-white tracking-wide">
            Banjaraa
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm text-white hover:text-indigo-400 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm text-gray-300 hover:text-indigo-400 transition"
          >
            Explore
          </a>

          <a
            href="#"
            className="text-sm text-gray-300 hover:text-indigo-400 transition"
          >
            Community
          </a>

          <a
            href="#"
            className="text-sm text-gray-300 hover:text-indigo-400 transition"
          >
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* CTA Button */}
          <button onClick={toSignup} className="hidden md:block rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition">
            Start Journey
          </button>

          {/* Profile */}
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="profile"
            className="h-9 w-9 rounded-full border border-white/20 object-cover"
          />

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-lg">
          <div className="flex flex-col space-y-3 px-6 py-4">

            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>

            <a href="#" className="text-gray-300 hover:text-white">
              Explore
            </a>

            <a href="#" className="text-gray-300 hover:text-white">
              Community
            </a>

            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>

            <button onClick={toSignup} className="mt-2 rounded-full bg-indigo-600 px-4 py-2 text-sm text-white">
              Start Journey
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}