import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import WelcomeOverlay from "./components/WelcomeOverlay";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Analyzer from "./components/Analyzer";
import Suggestions from "./components/Suggestions";
import Tabs from "./components/Tabs";

function App() {
  // State management
  const [dark, setDark] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState("bugs");
  const [url, setUrl] = useState("");
  const [bugs, setBugs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Apply dark mode class to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  // Toggle dark mode function
  const toggleDark = () => setDark(prev => !prev);
  
  // Check if user has visited before to potentially skip welcome screen
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (hasVisitedBefore) {
      setShowWelcome(false);
    }
  }, []);
  
  // Handle welcome screen dismissal
  const dismissWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('hasVisitedBefore', 'true');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Welcome overlay */}
      {showWelcome && <WelcomeOverlay dismiss={dismissWelcome} />}
      
      {/* Header with Navbar */}
      <Header dark={dark} toggleDark={toggleDark} />
      
      {/* Hero section */}
      <Hero onStartAnalysis={() => {
        // Smooth scroll to analysis section
        const target = document.getElementById("analysis");
        if (!target) return;
        const offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }} />
      
      {/* Main content */}
      <main className="flex-1 w-full">
        {/* Analysis section */}
        <section id="analyzer" className="py-16 bg-light dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-5xl mx-auto px-6">
            <Analyzer
              url={url}
              setUrl={setUrl}
              bugs={bugs}
              setBugs={setBugs}
              setSuggestions={setSuggestions}
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          </div>
        </section>
        
        {/* Results tabs section */}
        <section className="py-8 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-6">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* Conditional rendering based on active tab */}
            <div className="mt-8">
              {activeTab === "bugs" && (
                <div className="animate-fade-in">
                  {/* Bug results are displayed in the Analyzer component */}
                  <div id="bugResults" className="min-h-[120px]">
                    {loading ? (
                      <div className="flex flex-col justify-center items-center py-16 text-center">
                        <svg className="animate-spin h-10 w-10 text-primary-dark dark:text-electric mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                        <p className="text-gray-700 dark:text-gray-300">Analyzing website for UI bugs...</p>
                        <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
                      </div>
                    ) : bugs.length === 0 && url && !error ? (
                      <div className="text-center py-16">
                        <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">No bugs detected!</p>
                        <p className="text-sm text-gray-500 mt-2">Your UI appears to be working correctly</p>
                      </div>
                    ) : bugs.length === 0 && !url ? (
                      <div className="text-center py-16">
                        <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-dark dark:text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">Ready to analyze your website</p>
                        <p className="text-sm text-gray-500 mt-2">Paste a URL above and click Analyze to see UI bugs here</p>
                      </div>
                    ) : (
                      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {bugs.map((bug, i) => (
                          <div 
                            key={i} 
                            className="bg-white dark:bg-gray-800 border border-red-100 dark:border-red-900/30 shadow-sm rounded-lg p-5 flex gap-4 items-start"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-medium text-red-600 dark:text-red-400">{bug.title || "UI Bug Detected"}</h3>
                              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{bug.description || bug}</p>
                              {bug.solution && (
                                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                  <p className="text-sm text-gray-600 dark:text-gray-400"><span className="text-electric font-medium">Suggested Fix:</span> {bug.solution}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {activeTab === "suggestions" && (
                <div className="animate-fade-in">
                  <Suggestions url={url} suggestions={suggestions} loading={loading} />
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 bg-light dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-5xl mx-auto px-6">
            <Features />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
