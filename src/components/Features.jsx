import React from "react";

const features = [
  {
    title: "Intelligent Bug Detection",
    desc: "Our AI algorithms identify visual issues, layout problems, and accessibility concerns with precision and speed.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14.5V16.5M7 10.5H17M7 7.5H17M8 19.5H16C17.1046 19.5 18 18.6046 18 17.5V6.5C18 5.39543 17.1046 4.5 16 4.5H8C6.89543 4.5 6 5.39543 6 6.5V17.5C6 18.6046 6.89543 19.5 8 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    details: ["Pixel-perfect analysis", "Cross-browser compatibility", "Responsive design validation"]
  },
  {
    title: "Actionable Recommendations",
    desc: "Receive targeted suggestions to enhance user experience, accessibility, and overall design quality.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 14.5L11.5 16.5L14.5 12.5M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    details: ["UX best practices", "Accessibility compliance", "Performance optimization"]
  },
  {
    title: "Developer-Friendly Reports",
    desc: "Detailed reports with code snippets and specific fixes make implementation straightforward for all skill levels.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    details: ["Code-level suggestions", "Priority-based fixes", "Workflow integration"]
  },
  {
    title: "Professional Interface",
    desc: "A clean, intuitive interface that makes analyzing and improving your website's UI efficient and straightforward.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.07989 21 8.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 19V21M10 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    details: ["Clean design", "Intuitive navigation", "Comprehensive reporting"]
  },
];

function Features() {
  return (
    <section id="features" className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(#d1d5db_1px,transparent_1px),linear-gradient(90deg,#d1d5db_1px,transparent_1px)] dark:bg-[linear-gradient(#2d3748_1px,transparent_1px),linear-gradient(90deg,#2d3748_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.02] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100 tracking-tight">
            Why Choose <span className="text-primary">UI Analyser</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-400 text-lg">
            Our platform combines advanced technology with intuitive design to deliver a superior UI analysis experience.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <svg className="h-3.5 w-3.5 text-gray-500 dark:text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#analyzer" 
            className="btn btn-primary inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white"
          >
            Try the Analyzer
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;
