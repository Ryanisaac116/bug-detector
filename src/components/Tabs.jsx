import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { 
      id: "bugs", 
      label: "UI Bugs", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    { 
      id: "suggestions", 
      label: "Improvements", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex justify-center mb-8 gap-3">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md border border-gray-200 dark:border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`relative px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all ${
              activeTab === tab.id 
                ? "bg-primary-dark dark:bg-electric text-white shadow-sm" 
                : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
            
            {/* Active indicator dot */}
            {activeTab === tab.id && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-white"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
