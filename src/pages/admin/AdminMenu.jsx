import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import MenuItemForm from '../../components/admin/MenuItemForm';
import { adminData } from '../../data/adminData';

const AdminMenu = () => {
  const [menuItems, setMenuItems] = useState(adminData.menuItems);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleSave = (item) => {
    if (editingItem) {
      setMenuItems(prev => prev.map(i => i.id === item.id ? item : i));
    } else {
      setMenuItems(prev => [...prev, { ...item, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingItem(null);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setMenuItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const toggleAvailability = (id) => {
    setMenuItems(prev => prev.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
              <p className="text-gray-600">Add, edit, and manage your menu items</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              Add Menu Item
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                  <p className="font-bold text-orange-600 mb-4">${item.price}</p>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleAvailability(item.id)}
                      className={`flex-1 py-2 rounded ${
                        item.available 
                          ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
                          : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                    >
                      {item.available ? 'Disable' : 'Enable'}
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showForm && (
            <MenuItemForm
              item={editingItem}
              onSave={handleSave}
              onCancel={() => {
                setShowForm(false);
                setEditingItem(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;