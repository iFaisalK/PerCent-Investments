import React, { useState } from 'react';
import { Search, Bell, Upload } from 'lucide-react';
import UploadModal from '../ui/UploadModal';

// A helper object to provide subtitles for each page
const pageSubtitles = {
  Dashboard: "Daily performance and trading activity overview.",
  Analytics: "A deep dive into performance trends and metrics.",
  Team: "An overview of all agents and their summary stats.",
};

const Header = ({ currentPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="flex flex-wrap justify-between items-center gap-4 bg-white px-6 lg:px-8 py-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 font-heading">{currentPage}</h1>
          <p className="text-sm text-gray-500 mt-1">{pageSubtitles[currentPage] || 'Welcome!'}</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-48 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <img src="https://placehold.co/40x40/22c55e/FFFFFF/png?text=A" alt="Admin" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold text-gray-800 text-sm">Murshid Choudhuri</p>
              <p className="text-xs text-gray-500">murshid@percentinvestments.com</p>
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm font-semibold"
          >
              <Upload className="w-5 h-5" />
              Import KRA Sheet
          </button>
        </div>
      </header>
      <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
