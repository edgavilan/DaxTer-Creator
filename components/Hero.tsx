import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800 animate-fade-in-up">
              <span className="mr-2">★</span> Version 2.5 Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white leading-tight">
              Master Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                PSP Collection
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Compress and decompress ISO games and movies for your PlayStation
              Portable. Save space without sacrificing quality with the ultimate
              utility tool.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 bg-secondary hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0">
                <span className="material-icons">download</span>
                <div className="text-left">
                  <div className="text-xs uppercase opacity-90 font-medium">Download Now</div>
                  <div className="text-lg leading-none">Version 2.5</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark text-gray-700 dark:text-gray-200 font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md">
                <span className="material-icons text-gray-400">info</span>
                Learn More
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <span className="material-icons text-green-500 text-base">verified_user</span>
                100% Secure
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-gray-400 text-base">windows</span>
                Windows XP/7/10/11
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-gray-400 text-base">money_off</span>
                Freeware
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl dark:bg-primary/10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl dark:bg-secondary/10 animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <div className="relative bg-surface-light dark:bg-surface-dark rounded-xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
              <div className="bg-gray-100 dark:bg-gray-800 border-b border-border-light dark:border-border-dark px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center text-xs font-medium text-gray-500 dark:text-gray-400 font-mono">
                  DaxTer Creator v2.5.exe
                </div>
              </div>
              <div className="relative aspect-video bg-gray-900">
                 <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuIyCK-2jKscVNaSuG8NLmzedqAmGn_vJ6V8viYW7lT7wuqlmpygdGULIwbEs9_w9KGKAc9hjJ0RBRGou7yaqNx7oO2jOgXCQ-t6xK7VkKnvh8KaI9fHOA3JtWg58U5_fOsM2PWl0-EgM-O7W-2KvY8LHgqlQunQzNjyqhKxsGxtOX3uoFPUnsDxFmW18fKF2N2bYT8PMzdU11tjJMQK_XDHtApK83vZqFuFnS_fO218mwCesOx_-L2UJLcPmdcTMaolj3l681vqA" 
                    alt="DaxTer Creator Interface"
                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                 />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                        <p className="font-bold text-gray-800 dark:text-white">Preview Interface</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Classic layout, powerful engine</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;