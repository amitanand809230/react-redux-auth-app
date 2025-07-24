import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#9a463d] text-white py-6 mt-1">
      <div className="max-w-6xl mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        
        <div className="mx-auto">
          <h2 className="text-lg font-semibold">🌐 Dashboard App</h2>
          <p className="text-sm">Built with React, Redux, Firebase & Tailwind CSS</p>
        </div>

       
      </div>

      <div className="text-center mt-4 text-sm text-white">
        © {new Date().getFullYear()} Dashboard App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
