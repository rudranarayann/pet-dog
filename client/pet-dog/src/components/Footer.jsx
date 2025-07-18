import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white text-center py-4 mt-10">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} Pet Adoption Manager. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
