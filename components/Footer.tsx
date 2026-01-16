import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Twitter', label: 'TW', href: '#' },
    { name: 'Facebook', label: 'FB', href: '#' },
    { name: 'GitHub', label: 'GH', href: 'https://github.com/tu-usuario' },
  ];

  return (
    <>
      {/* Bottom CTA */}
      <section className="py-16 bg-primary dark:bg-blue-900 relative overflow-hidden">
        {/* Decorative pattern dots (using SVG for pure React/Tailwind no external image dependence) */}
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2.5px)',
            backgroundSize: '20px 20px'
        }}></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Saving Space on Your PSP
          </h2>
          <p className="text-blue-100 mb-8 font-medium">
            Join thousands of users optimizing their portable gaming library today.
          </p>
          <button className="bg-secondary hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-lg shadow-xl text-lg transition-transform transform hover:scale-105 flex items-center gap-2 mx-auto active:scale-95">
            <span className="material-icons">download</span>
            Download Latest Version
          </button>
          <p className="mt-4 text-xs text-blue-200 opacity-80">
            *Compatible with Windows OS. No specialized hardware required.
          </p>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-surface-dark text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-icons text-primary">extension</span>
                <span className="font-bold text-xl text-white">
                  DaxTer Creator
                </span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">
                The definitive tool for PSP ISO/CSO compression. Made by the
                community, for the community.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:rotate-12"
                    aria-label={social.name}
                  >
                    <span className="text-xs font-bold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} DaxTer Creator. All rights reserved. Not affiliated
            with Sony.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;