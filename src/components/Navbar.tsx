import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/workbench', label: 'Workbench' },
  { path: '/logbook', label: 'Logbook' },
  { path: '/library', label: 'Library' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 left-0 right-0 z-50">
      <div className="mx-auto px-4">
        <div className="bg-black/90 rounded-3xl border border-white transition-all">
          <div className="flex items-center justify-between h-12 px-6">
            {/* Logo Container - Extreme Left */}
            <div className="flex-shrink-0">
              <Link to="/" className="block">
                <img 
                  src="/logo.png" 
                  alt="KV Logo" 
                  className="h-14 w-auto"
                />
              </Link>
            </div>
            
            {/* Navigation Links - Extreme Right */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="relative group text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {label}
                  {location.pathname === path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_rgba(255,77,0,0.5)]"
                      layoutId="underline"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-2 bg-black/90 backdrop-blur-lg rounded-xl p-4 border border-[#ff4d00]/20"
            >
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="block py-2 text-sm font-medium text-white/70 hover:text-white hover:text-[#ff4d00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 