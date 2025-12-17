import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { adminData } from '../../data/adminData';

const AdminRestaurant = () => {
  const [restaurant, setRestaurant] = useState(adminData.restaurant);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedRestaurant = {
      ...restaurant,
      name: formData.get('name'),
      address: formData.get('address'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      hours: {
        monday: formData.get('monday'),
        tuesday: formData.get('tuesday'),
        wednesday: formData.get('wednesday'),
        thursday: formData.get('thursday'),
        friday: formData.get('friday'),
        saturday: formData.get('saturday'),
        sunday: formData.get('sunday')
      }
    };
    setRestaurant(updatedRestaurant);
    setIsEditing(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Restaurant Information</h1>
              <p className="text-gray-600">Manage your restaurant details and hours</p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              {isEditing ? 'Cancel' : 'Edit Details'}
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {isEditing ? (
              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name</label>
                    <input
                      name="name"
                      defaultValue={restaurant.name}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      name="phone"
                      defaultValue={restaurant.phone}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      name="address"
                      defaultValue={restaurant.address}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      defaultValue={restaurant.email}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Operating Hours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(restaurant.hours).map(([day, hours]) => (
                      <div key={day}>
                        <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">{day}</label>
                        <input
                          name={day}
                          defaultValue={hours}
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          placeholder="e.g., 9:00 AM - 10:00 PM"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-600">Restaurant Name</label>
                    <p className="font-medium text-gray-900">{restaurant.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Phone</label>
                    <p className="font-medium text-gray-900">{restaurant.phone}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-600">Address</label>
                    <p className="font-medium text-gray-900">{restaurant.address}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-600">Email</label>
                    <p className="font-medium text-gray-900">{restaurant.email}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Operating Hours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(restaurant.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700 capitalize">{day}</span>
                        <span className="text-gray-900">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRestaurant;