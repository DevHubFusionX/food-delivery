import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ProfileSection from '../components/profile/ProfileSection';
import AddressesSection from '../components/profile/AddressesSection';
import PaymentMethodsSection from '../components/profile/PaymentMethodsSection';
import NotificationsSection from '../components/profile/NotificationsSection';
import SavedRestaurantsSection from '../components/profile/SavedRestaurantsSection';
import SecuritySection from '../components/profile/SecuritySection';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Profile = () => {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'addresses', name: 'Addresses', icon: '📍' },
    { id: 'payments', name: 'Payments', icon: '💳' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'saved', name: 'Saved', icon: '❤️' },
    { id: 'security', name: 'Security', icon: '🔒' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSection />;
      case 'addresses':
        return <AddressesSection />;
      case 'payments':
        return <PaymentMethodsSection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'saved':
        return <SavedRestaurantsSection />;
      case 'security':
        return <SecuritySection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-600 mt-1">Welcome back, {user?.name || 'User'}!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-orange-50 text-orange-700 border border-orange-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;