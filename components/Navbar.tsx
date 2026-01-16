import React, { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Technical Details', href: '#details' },
    { name: 'Installation', href: '#install' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface-light/90 dark:bg-surface-dark/90 border-b border-border-light dark:border-border-dark glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-primary p-2 rounded-lg text-white shadow-md">
              <span className="material-icons text-xl block">extension</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white select-none">
              DaxTer<span className="text-primary">Creator</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block group">
              <input
                type="text"
                placeholder="Search software..."
                className="bg-gray-100 dark:bg-gray-800 border-none rounded-full py-2 px-4 pl-10 text-sm focus:ring-2 focus:ring-primary w-48 text-gray-900 dark:text-gray-100 transition-all group-hover:w-56"
              />
              <span className="material-icons absolute left-3 top-2 text-gray-400 text-sm pointer-events-none">
                search
              </span>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <span className="material-icons block">light_mode</span>
              ) : (
                <span className="material-icons block">dark_mode</span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none p-2"
              >
                <span className="material-icons">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Search Input */}
            <div className="px-3 py-2 relative sm:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-lg py-2 px-4 pl-10 text-sm focus:ring-2 focus:ring-primary text-gray-900 dark:text-gray-100"
              />
              <span className="material-icons absolute left-6 top-4 text-gray-400 text-sm pointer-events-none">
                search
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;