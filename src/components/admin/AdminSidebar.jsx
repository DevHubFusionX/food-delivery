import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { id: 'overview', name: 'Overview', icon: '📊', path: '/admin' },
    { id: 'orders', name: 'Orders', icon: '📋', path: '/admin/orders' },
    { id: 'menu', name: 'Menu Items', icon: '🍕', path: '/admin/menu' },
    { id: 'riders', name: 'Delivery Riders', icon: '🚴', path: '/admin/riders' },
    { id: 'restaurant', name: 'Restaurant Info', icon: '🏪', path: '/admin/restaurant' },
    { id: 'analytics', name: 'Analytics', icon: '📈', path: '/admin/analytics' }
  ];

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-screen">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
        <p className="text-sm text-gray-600">Restaurant Management</p>
      </div>
      
      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-orange-50 text-orange-700 border border-orange-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;