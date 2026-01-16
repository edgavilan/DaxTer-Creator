import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <>
      {/* Why Use Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-border-light dark:border-border-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why use DaxTer Creator?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            DaxTer Creator is a surprising application created by fans, for fans. Its
            main objective is to compress and decompress movies and games for the{" "}
            <strong className="text-primary">Sony PSP</strong> console. The handling
            is incredibly simple, featuring an intuitive interface where you only
            need to fill in a few fields: the original ISO file location and your
            desired destination path.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Multimedia', 'System Tools', 'PSP Utilities', 'ISO to CSO'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="features" className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Capabilities
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Powerful Compression Made Simple
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ISO to CSO',
                desc: 'Efficiently convert bulky ISO files into compressed CSO format to save valuable memory stick space without losing playability.',
                icon: 'compress',
              },
              {
                title: 'Fast Processing',
                desc: 'Optimized algorithms ensure that your files are processed quickly. Includes batch processing options for multiple files.',
                icon: 'speed',
              },
              {
                title: 'User Friendly',
                desc: 'A clean, no-nonsense interface designed for everyone. From NC areas to compression levels, control every aspect easily.',
                icon: 'settings_suggest',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border-light dark:border-border-dark flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <span className="material-icons text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-white dark:bg-gray-900 border-t border-border-light dark:border-border-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Easy Workflow
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Quick Start Guide
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400 mx-auto">
              Optimize your game library in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"></div>
            
            {[
              {
                step: 1,
                title: 'Select Files',
                desc: 'Choose your ISO or game files from your computer. Supports batch selection for multiple games.',
                icon: 'folder_open',
                colorClass: 'text-primary',
                bgClass: 'bg-blue-50 dark:bg-blue-900/30',
                badgeBg: 'bg-primary'
              },
              {
                step: 2,
                title: 'Configure Settings',
                desc: 'Pick compression level (1-9) to balance size vs speed, and choose your output folder.',
                icon: 'tune',
                colorClass: 'text-secondary',
                bgClass: 'bg-amber-50 dark:bg-amber-900/30',
                badgeBg: 'bg-secondary'
              },
              {
                step: 3,
                title: 'Start Compression',
                desc: "Click 'Compress' and wait for the magic. The optimized CSO file is created automatically.",
                icon: 'play_arrow',
                colorClass: 'text-green-500',
                bgClass: 'bg-green-50 dark:bg-green-900/30',
                badgeBg: 'bg-green-500'
              },
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="relative bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-border-light dark:border-border-dark text-center transition-transform duration-300 hover:-translate-y-2 h-full">
                  <div className={`w-20 h-20 mx-auto ${item.bgClass} rounded-full flex items-center justify-center mb-6 shadow-inner ring-4 ring-white dark:ring-gray-800`}>
                    <span className={`material-icons text-4xl ${item.colorClass}`}>{item.icon}</span>
                  </div>
                  <div className={`absolute -top-4 -right-4 w-10 h-10 ${item.badgeBg} text-white rounded-full flex items-center justify-center font-bold shadow-md transform group-hover:scale-110 transition-transform`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;