import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { adminData } from '../../data/adminData';

const AdminRiders = () => {
  const [riders, setRiders] = useState(adminData.riders);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'busy': return 'bg-yellow-100 text-yellow-700';
      case 'offline': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const toggleRiderStatus = (id) => {
    setRiders(prev => prev.map(rider => 
      rider.id === id 
        ? { ...rider, status: rider.status === 'active' ? 'offline' : 'active' }
        : rider
    ));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Delivery Riders</h1>
            <p className="text-gray-600">Manage your delivery team</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Active Riders</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Orders</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {riders.map(rider => (
                    <tr key={rider.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{rider.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rider.status)}`}>
                          {rider.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">{rider.currentOrders}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <div className="flex items-center">
                          <span className="text-yellow-500">⭐</span>
                          <span className="ml-1">{rider.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">{rider.phone}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleRiderStatus(rider.id)}
                          className={`px-3 py-1 rounded text-xs font-medium ${
                            rider.status === 'active'
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : 'bg-green-100 text-green-700 hover:bg-green-200'
                          }`}
                        >
                          {rider.status === 'active' ? 'Set Offline' : 'Set Active'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRiders;