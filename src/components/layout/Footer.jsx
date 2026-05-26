import React from 'react';

export default function Footer() {
    return (
      <footer className="bg-black text-white py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            

            <div>
              <h2 className="text-2xl font-bold">Banjaraa</h2>
              <p className="text-gray-400 text-sm mt-2">
                Turn your journeys into memories.
              </p>
            </div>
  

            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-indigo-400 transition">
                Home
              </a>
  
              <a href="#" className="hover:text-indigo-400 transition">
                Explore
              </a>
  
              <a href="#" className="hover:text-indigo-400 transition">
                About
              </a>
  
              <a href="#" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </div>
          </div>
  

          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
            © 2026 Banjaraa. All rights reserved.
          </div>
  
        </div>
      </footer>
    );
  }