import { useState } from 'react';

const AddressesSection = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, label: 'Home', address: '123 Main St, City, ST 12345', isDefault: true },
    { id: 2, label: 'Work', address: '456 Office Blvd, City, ST 12345', isDefault: false }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddAddress = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAddress = {
      id: Date.now(),
      label: formData.get('label'),
      address: `${formData.get('street')}, ${formData.get('city')}, ${formData.get('state')} ${formData.get('zip')}`,
      isDefault: false
    };
    setAddresses([...addresses, newAddress]);
    setShowAddForm(false);
  };

  const setDefault = (id) => {
    setAddresses(addresses.map(addr => ({ ...addr, isDefault: addr.id === id })));
  };

  const removeAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Saved Addresses</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-orange-600 hover:text-orange-700 text-sm font-medium"
        >
          {showAddForm ? 'Cancel' : 'Add Address'}
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {addresses.map(addr => (
          <div key={addr.id} className="flex justify-between items-start p-3 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{addr.label}</span>
                {addr.isDefault && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Default</span>
                )}
              </div>
              <p className="text-sm text-gray-600">{addr.address}</p>
            </div>
            <div className="flex gap-2">
              {!addr.isDefault && (
                <button
                  onClick={() => setDefault(addr.id)}
                  className="text-xs text-orange-600 hover:text-orange-700"
                >
                  Set Default
                </button>
              )}
              <button
                onClick={() => removeAddress(addr.id)}
                className="text-xs text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddForm && (
        <form onSubmit={handleAddAddress} className="space-y-3 p-4 bg-gray-50 rounded-lg">
          <input name="label" placeholder="Label (Home, Work, etc.)" className="w-full p-2 border border-gray-300 rounded" required />
          <input name="street" placeholder="Street Address" className="w-full p-2 border border-gray-300 rounded" required />
          <div className="grid grid-cols-2 gap-2">
            <input name="city" placeholder="City" className="p-2 border border-gray-300 rounded" required />
            <input name="state" placeholder="State" className="p-2 border border-gray-300 rounded" required />
          </div>
          <input name="zip" placeholder="ZIP Code" className="w-full p-2 border border-gray-300 rounded" required />
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded font-medium hover:bg-orange-600">
            Add Address
          </button>
        </form>
      )}
    </div>
  );
};

export default AddressesSection;