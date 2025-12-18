import { useState } from 'react';
import { Link } from 'react-router-dom';
import { appData } from '../../data/data';

const MobileMenu = ({ onLoginClick, onSignupClick, isAuthenticated, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = appData.navigation;

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white p-2 text-gray-800 shadow-sm transition hover:bg-gray-50"
      >
        {isOpen ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div id="mobile-nav" className="absolute right-0 mt-3 w-56 origin-top-right rounded-xl border border-black/10 bg-white p-2 shadow-xl">
          <nav className="flex flex-col">
            {isAuthenticated ? (
              // Authenticated user links
              <>
                <Link to="/dashboard" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 transition hover:bg-orange-50 hover:text-orange-700" onClick={() => setIsOpen(false)}>Dashboard</Link>
                <Link to="/restaurants" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 transition hover:bg-orange-50 hover:text-orange-700" onClick={() => setIsOpen(false)}>Restaurants</Link>
                <Link to="/orders" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 transition hover:bg-orange-50 hover:text-orange-700" onClick={() => setIsOpen(false)}>Orders</Link>
                <Link to="/profile" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 transition hover:bg-orange-50 hover:text-orange-700" onClick={() => setIsOpen(false)}>Profile</Link>
              </>
            ) : (
              // Non-authenticated user links
              <>
                <Link to="/" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 transition hover:bg-orange-50 hover:text-orange-700" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/restaurants" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 transition hover:bg-orange-50 hover:text-orange-700" onClick={() => setIsOpen(false)}>Restaurants</Link>
                <Link to="/about" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 transition hover:bg-orange-50 hover:text-orange-700" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/contact" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 transition hover:bg-orange-50 hover:text-orange-700" onClick={() => setIsOpen(false)}>Contact</Link>
              </>
            )}
            <div className="my-2 h-px bg-gray-200" />
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2 text-sm text-gray-600">
                  Hi, {user?.firstName}
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLogout();
                  }}
                  className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLoginClick();
                  }}
                  className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onSignupClick();
                  }}
                  className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-white bg-orange-600 transition hover:bg-orange-500 mt-1"
                >
                  Sign up
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;