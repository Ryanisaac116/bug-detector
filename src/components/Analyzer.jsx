import React, { useState } from "react";

function validateUrl(url) {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

function Analyzer({ url, setUrl, bugs, setBugs, setSuggestions, loading, setLoading, error, setError }) {
  const [touched, setTouched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    setError("");
    setSuggestions([]);
    setBugs([]);
    if (!validateUrl(url)) {
      setError("Please enter a valid URL (must start with http:// or https://)");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/analyse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      if (!res.ok) throw new Error("Failed to analyze");
      const data = await res.json();
      setBugs(data.bugs || []);
      // Optionally trigger fetching suggestions here or in Suggestions.jsx
    } catch (err) {
      setError("Error analyzing the URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="analysis" className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(#1f2937_1px,transparent_1px),linear-gradient(90deg,#1f2937_1px,transparent_1px)] bg-[size:64px_64px] opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
           <svg className="w-8 h-8 text-primary-dark dark:text-electric" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M19 9L19 17C19 18.1046 18.1046 19 17 19L7 19C5.89543 19 5 18.1046 5 17L5 7C5 5.89543 5.89543 5 7 5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
             <path d="M17 5L15 7L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M13 9L15 7L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <circle cx="10" cy="12" r="1" fill="currentColor"/>
             <circle cx="14" cy="12" r="1" fill="currentColor"/>
             <path d="M9.5 15.5C9.5 15.5 10 16 12 16C14 16 14.5 15.5 14.5 15.5" stroke="currentColor" strokeLinecap="round"/>
           </svg>
           UI Analyzer
         </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-10 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Enter any website URL below and our AI will analyze it for UI bugs and accessibility issues.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <input
                type="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-electric focus:border-electric outline-none transition-all"
                placeholder="https://example.com"
                required
                onBlur={() => setTouched(true)}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-primary-dark dark:bg-electric text-white font-medium hover:bg-primary-dark/90 dark:hover:bg-electric/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-sm"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                "Analyze Site"
              )}
            </button>
          </form>
          
          {error && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-md text-red-600 dark:text-red-400 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}
        </div>
        
        {/* Bug results are now displayed in the App.jsx component based on active tab */}
      </div>
    </section>
  );
}

export default Analyzer;
