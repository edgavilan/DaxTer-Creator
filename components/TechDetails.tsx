import React from 'react';

const TechDetails: React.FC = () => {
  return (
    <section
      id="details"
      className="py-20 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Tech Spec Table */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-icons text-primary">info</span>
              Technical Information
            </h3>
            <div className="overflow-hidden bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                  {[
                    { label: 'License', value: 'Freeware', highlight: 'text-green-600 dark:text-green-400 font-semibold' },
                    { label: 'Version', value: '2.5' },
                    { label: 'Operating System', value: 'Windows 2000 / XP / Vista / 7 / 10' },
                    { label: 'Language', value: 'Spanish / English' },
                    { label: 'File Size', value: '< 0.01 MB' },
                    { label: 'Category', value: 'Multimedia Tools', highlight: 'text-primary hover:underline cursor-pointer' },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 w-1/3">
                        {row.label}
                      </td>
                      <td className={`px-6 py-4 text-sm text-gray-900 dark:text-white ${row.highlight || ''}`}>
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Installation Guide */}
          <div id="install">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-icons text-primary">build</span>
              How to Install
            </h3>
            <div className="bg-blue-50 dark:bg-gray-800/50 rounded-xl p-8 border border-blue-100 dark:border-gray-700">
              <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 shadow-md">
                    <span className="text-white text-sm font-bold">1</span>
                  </span>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                    Download & Locate
                  </h4>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Find the DaxTer Creator archive in your downloads folder.
                  </p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 shadow-md">
                    <span className="text-white text-sm font-bold">2</span>
                  </span>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                    Unzip File
                  </h4>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Windows: Press{' '}
                    <kbd className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-xs text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
                      Ctrl
                    </kbd>{' '}
                    +{' '}
                    <kbd className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-xs text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
                      J
                    </kbd>{' '}
                    to find downloads, then right-click and "Extract All".
                  </p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 shadow-md">
                    <span className="text-white text-sm font-bold">3</span>
                  </span>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                    Run Installer
                  </h4>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Double click the extracted file. Follow the on-screen
                    instructions.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 shadow-md animate-bounce" style={{animationDuration: '2s'}}>
                    <span className="material-icons text-white text-sm">check</span>
                  </span>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                    Ready to use!
                  </h4>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Enjoy DaxTer Creator for free.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechDetails;