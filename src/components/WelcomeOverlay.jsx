import React, { useEffect } from "react";

function WelcomeOverlay({ dismiss }) {
  useEffect(() => {
    // Add escape key listener to dismiss overlay
    const handleEscape = (e) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [dismiss]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl p-8 mx-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.01]">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center md:text-left">
            Welcome to <span className="text-primary">UI Analyser</span>
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-center md:text-left leading-relaxed">
            Our advanced UI analysis tool helps you identify design inconsistencies, 
            accessibility issues, and performance bottlenecks in your interfaces. 
            Get started now to improve your user experience.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <button
              onClick={dismiss}
              className="btn btn-primary shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeOverlay;
