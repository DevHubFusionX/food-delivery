import { useState, createContext, useContext } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/navbar/Navbar';
import ProtectedNavbar from './components/navbar/ProtectedNavbar';
import LoginModal from './components/auth/LoginModal';
import SignupModal from './components/auth/SignupModal';
import AppRoutes from './AppRoutes';

const LoginContext = createContext();

export const useLoginHandler = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginHandler must be used within LoginProvider');
  }
  return context;
};

function AppContent() {
  const location = useLocation();
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const protectedRoutes = ['/dashboard', '/checkout', '/orders', '/profile'];
  const isProtectedRoute = protectedRoutes.some(route => location.pathname.startsWith(route));

  const loginHandler = {
    openLogin: () => setLoginOpen(true),
    openSignup: () => setSignupOpen(true)
  };

  return (
    <LoginContext.Provider value={loginHandler}>
      <div className="min-h-screen bg-gray-50">
        {isProtectedRoute ? (
          <ProtectedNavbar />
        ) : (
          <Navbar 
            onLoginClick={() => setLoginOpen(true)}
            onSignupClick={() => setSignupOpen(true)}
          />
        )}
        <main>
          <AppRoutes />
        </main>
        <LoginModal 
          open={loginOpen} 
          onClose={() => setLoginOpen(false)} 
          onOpenSignup={() => {
            setLoginOpen(false);
            setSignupOpen(true);
          }}
        />
        <SignupModal 
          open={signupOpen} 
          onClose={() => setSignupOpen(false)} 
          onOpenLogin={() => {
            setSignupOpen(false);
            setLoginOpen(true);
          }}
        />
      </div>
    </LoginContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;