import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import StatsCard from '../../components/admin/StatsCard';
import OrdersTable from '../../components/admin/OrdersTable';
import { adminData } from '../../data/adminData';

const AdminDashboard = () => {
  const [orders, setOrders] = useState(adminData.recentOrders);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Orders"
              value={adminData.stats.totalOrders}
              icon="📋"
              trend={12}
            />
            <StatsCard
              title="Revenue"
              value={`$${adminData.stats.totalRevenue.toLocaleString()}`}
              icon="💰"
              trend={8}
            />
            <StatsCard
              title="Active Riders"
              value={adminData.stats.activeRiders}
              icon="🚴"
              trend={-2}
            />
            <StatsCard
              title="Avg Delivery Time"
              value={`${adminData.stats.avgDeliveryTime} min`}
              icon="⏱️"
              trend={-5}
            />
          </div>

          <OrdersTable orders={orders} onStatusChange={handleStatusChange} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;