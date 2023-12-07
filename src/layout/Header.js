import React from "react";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Book Ticket</div>
        <div className="space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Profile
          </a>
          <a href="#" className="text-white">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
