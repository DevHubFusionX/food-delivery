import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useAsyncAction } from '../../hooks/useApi';
import ApiService from '../../services/api';

const ProfileSection = () => {
  const { user } = useAuth();
  const { execute, loading, error } = useAsyncAction();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@email.com',
    phone: user?.phone || '+1 (555) 123-4567'
  });

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || 'John Doe',
        email: user.email || 'john.doe@email.com',
        phone: user.phone || '+1 (555) 123-4567'
      });
    }
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedProfile = Object.fromEntries(formData);
    
    try {
      await execute(() => ApiService.updateProfile(updatedProfile));
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (err) {
      console.error('Profile update failed:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-orange-600 hover:text-orange-700 text-sm font-medium"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-4">
          <input
            name="name"
            defaultValue={profile.name}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="email"
            type="email"
            defaultValue={profile.email}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="phone"
            defaultValue={profile.phone}
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      ) : (
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <p className="font-medium">{profile.name}</p>
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <p className="font-medium">{profile.email}</p>
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <p className="font-medium">{profile.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;