import React, { useState } from "react";

function Navbar({ dark, toggleDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  
  return (
    <header className="w-full bg-gray-50 dark:bg-gray-900 shadow-sm fixed top-0 left-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 select-none flex items-center gap-2">
            <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            UI Analyser
          </h1>
          
          <nav className="hidden md:flex ml-10 space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white font-medium">Home</a>
            <a href="#analyzer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white font-medium">Analyzer</a>
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white font-medium">Features</a>
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button 
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white font-medium flex items-center gap-1"
              >
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Content */}
              <div 
                className={`absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 origin-top-left ${resourcesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Documentation</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Tutorials</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">API Reference</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDark}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm">
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
            <span className="hidden md:inline text-sm font-medium">
              {dark ? "Light" : "Dark"}
            </span>
          </button>
          
          <a href="#contact" className="hidden md:inline-flex btn btn-primary shadow-sm">
            Contact Us
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-3 space-y-1 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">Home</a>
          <a href="#analyzer" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">Analyzer</a>
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">Features</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">Resources</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-primary hover:bg-gray-200 dark:hover:bg-gray-800">Contact Us</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
