import { useState } from 'react';

const OrderCard = ({ order, onReorder, onViewReceipt }) => {
  const [showItems, setShowItems] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={order.image}
            alt={order.restaurant}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{order.restaurant}</h3>
            <p className="text-sm text-gray-600">{formatDate(order.date)}</p>
            <p className="text-sm text-gray-600">Order #{order.id}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-gray-900">${(order.total || 0).toFixed(2)}</div>
          <div className={`text-sm px-2 py-1 rounded-full ${
            order.status === 'Delivered' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {order.status}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowItems(!showItems)}
          className="text-orange-600 hover:text-orange-700 text-sm font-medium"
        >
          {showItems ? 'Hide items' : `${order.items.length} items`}
        </button>
        
        <div className="flex gap-2">
          <button
            onClick={() => onViewReceipt(order)}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            Receipt
          </button>
          <button
            onClick={() => onReorder(order)}
            className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Reorder
          </button>
        </div>
      </div>

      {showItems && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.quantity}x {item.name}</span>
                <span>${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;