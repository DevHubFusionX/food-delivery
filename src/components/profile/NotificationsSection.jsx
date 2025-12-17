import { useState } from 'react';

const NotificationsSection = () => {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newRestaurants: false,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true
  });

  const handleToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const notificationOptions = [
    { key: 'orderUpdates', label: 'Order Updates', description: 'Get notified about your order status' },
    { key: 'promotions', label: 'Promotions & Deals', description: 'Receive special offers and discounts' },
    { key: 'newRestaurants', label: 'New Restaurants', description: 'Know when new restaurants join' },
    { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
    { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive notifications via text' },
    { key: 'pushNotifications', label: 'Push Notifications', description: 'Receive browser notifications' }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
      
      <div className="space-y-4">
        {notificationOptions.map(option => (
          <div key={option.key} className="flex items-center justify-between py-2">
            <div className="flex-1">
              <div className="font-medium text-gray-900">{option.label}</div>
              <div className="text-sm text-gray-600">{option.description}</div>
            </div>
            <button
              onClick={() => handleToggle(option.key)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications[option.key] ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications[option.key] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsSection;