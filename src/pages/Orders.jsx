import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ApiService from '../services/api';
import OrderCard from '../components/orders/OrderCard';
import ReceiptModal from '../components/orders/ReceiptModal';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const Orders = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await ApiService.getOrders();
      setOrders(response.orders || []);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
      setError('Failed to load orders');
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const ordersList = orders;

  const handleReorder = (order) => {
    // Add all items from order to cart
    order.items.forEach(item => {
      addItem({
        id: item.id || Math.random(),
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: order.image // Use order image as fallback
      });
    });
    navigate('/cart');
  };

  const handleViewReceipt = (order) => {
    setSelectedOrder(order);
    setShowReceipt(true);
  };

  const closeReceipt = () => {
    setShowReceipt(false);
    setSelectedOrder(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (error && orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorMessage message={error} onRetry={fetchOrders} />
        </div>
      </div>
    );
  }

  if (ordersList.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No orders yet</h2>
            <p className="text-gray-600 mb-6">Start ordering to see your history here</p>
            <button
              onClick={() => navigate('/restaurants')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Browse Restaurants
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
          <p className="text-gray-600 mt-1">{ordersList.length} orders</p>
        </div>

        <div className="space-y-4">
          {ordersList.map(order => (
            <OrderCard
              key={order._id}
              order={{
                id: order._id,
                orderNumber: order.order_number,
                restaurant: order.restaurant_id?.name || 'Unknown Restaurant',
                status: order.order_status,
                total: order.total_cents / 100,
                date: new Date(order.createdAt).toLocaleDateString(),
                items: order.items?.map(item => ({
                  id: item.menu_item_id,
                  name: item.menu_item_id?.name || 'Unknown Item',
                  quantity: item.quantity,
                  price: item.price_cents / 100
                })) || [],
                image: order.restaurant_id?.image || '/placeholder-restaurant.jpg'
              }}
              onReorder={handleReorder}
              onViewReceipt={handleViewReceipt}
            />
          ))}
        </div>

        <ReceiptModal
          order={selectedOrder}
          isOpen={showReceipt}
          onClose={closeReceipt}
        />
      </div>
    </div>
  );
};

export default Orders;