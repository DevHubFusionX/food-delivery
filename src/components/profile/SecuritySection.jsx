import { useState } from 'react';

const SecuritySection = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Simulate password change
    alert('Password updated successfully!');
    setShowPasswordForm(false);
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      // Simulate logout
      alert('Logged out successfully!');
      // In real app: clear auth tokens, redirect to login
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <div>
            <div className="font-medium text-gray-900">Password</div>
            <div className="text-sm text-gray-600">Last updated 30 days ago</div>
          </div>
          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            {showPasswordForm ? 'Cancel' : 'Change Password'}
          </button>
        </div>

        {showPasswordForm && (
          <form onSubmit={handlePasswordChange} className="space-y-3 p-4 bg-gray-50 rounded-lg">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded font-medium hover:bg-orange-600"
            >
              Update Password
            </button>
          </form>
        )}

        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <div>
            <div className="font-medium text-gray-900">Two-Factor Authentication</div>
            <div className="text-sm text-gray-600">Add an extra layer of security</div>
          </div>
          <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
            Enable
          </button>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <div>
            <div className="font-medium text-gray-900">Login Sessions</div>
            <div className="text-sm text-gray-600">Manage your active sessions</div>
          </div>
          <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
            View Sessions
          </button>
        </div>

        <div className="pt-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;