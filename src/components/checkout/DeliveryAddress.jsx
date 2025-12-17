import { useState } from 'react';

const DeliveryAddress = ({ address, onAddressChange }) => {
  const [isEditing, setIsEditing] = useState(!address);

  const handleSave = (formData) => {
    onAddressChange(formData);
    setIsEditing(false);
  };

  if (!isEditing && address) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Delivery Address</h2>
          <button
            onClick={() => setIsEditing(true)}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            Edit
          </button>
        </div>
        <div className="text-gray-700">
          <p className="font-medium">{address.name}</p>
          <p>{address.street}</p>
          <p>{address.city}, {address.state} {address.zip}</p>
          <p className="text-sm text-gray-600 mt-1">{address.phone}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Delivery Address</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        handleSave(Object.fromEntries(formData));
      }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            defaultValue={address?.name}
            className="col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="street"
            placeholder="Street Address"
            defaultValue={address?.street}
            className="col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="city"
            placeholder="City"
            defaultValue={address?.city}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="state"
            placeholder="State"
            defaultValue={address?.state}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="zip"
            placeholder="ZIP Code"
            defaultValue={address?.zip}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            defaultValue={address?.phone}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600"
          >
            Save Address
          </button>
          {address && (
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DeliveryAddress;