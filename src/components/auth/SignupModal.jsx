import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAsyncAction } from '../../hooks/useApi';
import { appData } from '../../data/data';

const SocialButton = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500/20"
  >
    <span className="transition-transform duration-200 group-hover:scale-110">{icon}</span>
    <span>{label}</span>
  </button>
);

const GoogleIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C33.441,6.053,28.971,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,16.108,18.961,14,24,14c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C33.441,6.053,28.971,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c4.946,0,9.441-1.882,12.857-4.971l-5.939-5.018C29.89,35.345,27.095,36,24,36 c-5.202,0-9.619-3.322-11.283-7.962l-6.5,5.012C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.106,5.59c0,0,0.001,0,0.001,0l6.52,5.012 C36.367,39.593,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

const XIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.8 10.4 19 3h-1.4l-5.4 6.2L7.6 3H3l6.5 9.3L3 21h1.4l5.8-6.6 4.8 6.6H21l-6.7-9.6ZM10 13.6l-.7-.9L5 4.1h1.7l3.6 5.1.7.9 4.7 6.6h-1.7L10 13.6Z"/>
  </svg>
);

const SignupModal = ({ open, onClose, onOpenLogin }) => {
  const navigate = useNavigate();
  const { register, error: authError } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const stop = (e) => e.stopPropagation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const result = await register({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      
      if (result.success) {
        onClose();
        navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4 pt-4 sm:pt-8 animate-in fade-in duration-300 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl my-4 sm:my-8 overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={stop}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px] sm:min-h-[700px]">
          {/* Visual side */}
          <div className="relative hidden lg:block lg:col-span-2">
            <img
              src={appData.images.signupModal}
              alt="Fresh healthy food ingredients"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-transparent to-black/30" />
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  🥗 Join FoodExpress
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-gray-900">{appData.modals.signup.memberPerks.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{appData.modals.signup.memberPerks.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {appData.modals.signup.memberPerks.benefits.map((benefit, index) => (
                    <div key={index} className="rounded-xl bg-white/20 px-3 py-2 text-xs text-white backdrop-blur-sm">
                      {benefit.icon} {benefit.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex-1 p-4 sm:p-8 lg:p-12">
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{appData.modals.signup.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">{appData.modals.signup.subtitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700 shrink-0"
                  aria-label="Close"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 transition-all focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 hover:border-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 transition-all focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 hover:border-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 transition-all focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 hover:border-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Create password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({...formData, password: e.target.value});
                        checkPasswordStrength(e.target.value);
                      }}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-gray-900 shadow-sm placeholder:text-gray-400 transition-all focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 hover:border-gray-400"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {passwordStrength > 0 && (
                    <div className="mt-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-colors ${
                              level <= passwordStrength
                                ? level <= 2
                                  ? 'bg-red-400'
                                  : level === 3
                                  ? 'bg-yellow-400'
                                  : 'bg-green-400'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {passwordStrength <= 2 ? 'Weak' : passwordStrength === 3 ? 'Good' : 'Strong'} password
                      </p>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-gray-900 shadow-sm placeholder:text-gray-400 transition-all focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 hover:border-gray-400"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    required
                    className="mt-1 rounded border-gray-300 text-orange-600 focus:ring-orange-500 focus:ring-2" 
                  />
                  <label className="text-sm text-gray-600 leading-relaxed">
                    I agree to the <button type="button" className="text-orange-600 hover:text-orange-500 font-medium">Terms of Service</button> and <button type="button" className="text-orange-600 hover:text-orange-500 font-medium">Privacy Policy</button>
                  </label>
                </div>
                
                {(error || authError) && (
                  <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error || authError}</div>
                )}
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3.5 text-white font-semibold shadow-lg transition-all duration-200 hover:from-orange-500 hover:to-orange-400 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-orange-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Creating account...</span>
                    </div>
                  ) : (
                    'Create your account'
                  )}
                </button>
              </form>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-500 font-medium">Or sign up with</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <SocialButton 
                  icon={<GoogleIcon />} 
                  label="Google" 
                  onClick={() => console.log('Google signup')}
                />
                <SocialButton 
                  icon={<XIcon />} 
                  label="Twitter" 
                  onClick={() => console.log('Twitter signup')}
                />
              </div>
            </div>
            
            <div className="border-t border-gray-100 p-6 bg-gray-50/50">
              <p className="text-center text-sm text-gray-600">
                Already have an account? 
                <button 
                  onClick={onOpenLogin} 
                  className="font-semibold text-orange-600 hover:text-orange-500 transition-colors ml-1"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
