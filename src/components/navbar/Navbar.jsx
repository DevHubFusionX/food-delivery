import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from './Logo';
import NavLinks from './NavLinks';
import CartButton from './CartButton';
import MobileMenu from './MobileMenu';

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleGetApp = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="hidden md:block">
              <NavLinks />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm text-gray-700">Hi, {user?.firstName}</span>
                <button 
                  onClick={handleLogout}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <button onClick={onLoginClick} className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/30">
                  Sign in
                </button>
                <button onClick={onSignupClick} className="rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30">
                  Sign up
                </button>
              </div>
            )}
            <button 
              onClick={handleGetApp}
              className="hidden sm:inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
            >
              Order Now
            </button>
            <CartButton />
            <div className="md:hidden">
              <MobileMenu 
                onLoginClick={onLoginClick}
                onSignupClick={onSignupClick}
                isAuthenticated={isAuthenticated}
                user={user}
                onLogout={handleLogout}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;