import { useState } from 'react';

const MenuItemForm = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: item?.name || '',
    category: item?.category || '',
    price: item?.price || '',
    description: item?.description || '',
    image: item?.image || '',
    available: item?.available ?? true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...item, ...formData, price: parseFloat(formData.price) });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
          {item ? 'Edit Menu Item' : 'Add Menu Item'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Item Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Category</option>
            <option value="Pizza">Pizza</option>
            <option value="Burgers">Burgers</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Desserts">Desserts</option>
            <option value="Drinks">Drinks</option>
          </select>
          
          <input
            type="number"
            step="0.01"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="3"
          />
          
          <input
            type="url"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.available}
              onChange={(e) => setFormData({...formData, available: e.target.checked})}
              className="rounded"
            />
            <span>Available</span>
          </label>
          
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuItemForm;