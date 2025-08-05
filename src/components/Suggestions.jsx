import React, { useEffect, useState } from "react";

function Suggestions({ url, suggestions, loading }) {
  const [localSuggestions, setLocalSuggestions] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [fetching, setFetching] = useState(false);
  
  // Fetch suggestions when URL changes
  useEffect(() => {
    if (!url) return;
    setFetching(true);
    fetch(`/api/suggestions/${encodeURIComponent(url)}`)
      .then(res => res.ok ? res.json() : { suggestions: [] })
      .then(data => {
        setLocalSuggestions(data.suggestions || []);
      })
      .catch(() => setLocalSuggestions([]))
      .finally(() => setFetching(false));
  }, [url]);

  // Toggle expanded state for a suggestion
  const toggle = idx => setExpanded(e => ({ ...e, [idx]: !e[idx] }));

  // Use only real suggestions from API
  const displaySuggestions = localSuggestions;

  return (
    <section id="suggestions" className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(#1f2937_1px,transparent_1px),linear-gradient(90deg,#1f2937_1px,transparent_1px)] bg-[size:64px_64px] opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <svg className="w-8 h-8 text-primary-dark dark:text-electric" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.66347 17H14.3364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Improvements & Suggestions
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-10 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Our AI analyzes your website and provides actionable improvements, suggestions, and fixes to enhance user experience, accessibility, and performance.</p>
          
          {fetching ? (
            <div className="flex flex-col justify-center items-center py-16 text-center">
              <svg className="animate-spin h-10 w-10 text-primary-dark dark:text-electric mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
              <p className="text-gray-700 dark:text-gray-300">Generating enhancement suggestions...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
            </div>
          ) : !url ? (
            <div className="text-center py-16">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-dark dark:text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Enter a URL in the analyzer to get started</p>
              <p className="text-sm text-gray-500 mt-2">We'll analyze your website and provide enhancement suggestions</p>
            </div>
          ) : (
            <div className="space-y-4">
              {displaySuggestions.map((suggestion, i) => (
                <div 
                  key={i} 
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg overflow-hidden relative"
                >
                  <button 
                    className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-900 dark:text-white hover:text-electric focus:outline-none transition-colors"
                    onClick={() => toggle(i)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-dark dark:text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span>{suggestion.title || `Suggestion ${i+1}`}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${expanded[i] ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${expanded[i] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} md:absolute md:top-0 md:right-0 md:w-3/4 md:z-10 md:transform md:translate-x-0 md:translate-y-12 md:rounded-lg md:shadow-lg`}>
                    <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm md:border md:rounded-lg md:pt-4">
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{suggestion.description || suggestion}</p>
                      
                      {suggestion.category && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium">{suggestion.category}</span>
                          {suggestion.priority && (
                            <span className={`px-3 py-1 rounded-md text-xs font-medium ${suggestion.priority === 'High' ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' : 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'}`}>
                              {suggestion.priority} Priority
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Suggestions;
