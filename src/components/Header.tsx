import React, { useState } from 'react';
import { Map, Globe, Search, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLandseiteOpen, setIsLandseiteOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Globe className="h-8 w-8 text-blue-500 mr-2" />
          <div>
            <h1 className="text-xl font-bold">weltkartemap.de</h1>
            <p className="text-sm text-gray-600">weltkarte online ansehen</p>
          </div>
        </div>
        <nav className="flex items-center space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-500">Startseite</a>
          <div className="relative">
            <button
              onClick={() => setIsLandseiteOpen(!isLandseiteOpen)}
              className="text-gray-700 hover:text-blue-500 flex items-center"
            >
              Landseite <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            {isLandseiteOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1">
                <a href="/weltkarte" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Weltkarte</a>
                <a href="/europa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Europa Karte</a>
                {/* Add more menu items here */}
              </div>
            )}
          </div>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-700 hover:text-blue-500"
          >
            <Search className="h-5 w-5" />
          </button>
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="text-gray-700 hover:text-blue-500 flex items-center"
            >
              DE <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-md py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DE Deutsch</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">EN English</a>
                {/* Add more language options here */}
              </div>
            )}
          </div>
        </nav>
      </div>
      {isSearchOpen && (
        <div className="bg-gray-100 py-2">
          <div className="container mx-auto px-4">
            <input
              type="text"
              placeholder="Suche..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;