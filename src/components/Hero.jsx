import React from "react";

function Hero({ onStartAnalysis, onLearnMore }) {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden px-6 py-24 bg-gray-50 dark:bg-gray-900">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(#2d3748_1px,transparent_1px),linear-gradient(90deg,#2d3748_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.02] pointer-events-none"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-10 dark:opacity-5"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-primary dark:text-primary-light">UI</span> Analyser
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Identify UI issues and enhance user experience
          </p>
          
          <p className="text-base text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            Our AI-powered platform analyzes your website's interface to detect bugs and provide actionable recommendations for improvement.
          </p>
        </div>
        
        <div className="mb-16 flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={onStartAnalysis}
            className="btn btn-primary px-6 py-3 flex items-center justify-center shadow-sm"
          >
            Start Analysis
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          {onLearnMore && (
            <button
              onClick={onLearnMore}
              className="btn btn-outline px-6 py-3 shadow-sm"
            >
              Learn More
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "AI-Powered Analysis" },
            { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Instant Results" },
            { icon: "M9 17v1a3 3 0 003 3v0a3 3 0 003-3v-1m-6 0a3 3 0 003-3v-7a3 3 0 00-3-3v0a3 3 0 00-3 3v7a3 3 0 003 3z", text: "Professional Reports" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700 dark:text-gray-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
              <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
              </svg>
              {feature.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
