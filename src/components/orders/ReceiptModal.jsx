const ReceiptModal = ({ order, isOpen, onClose }) => {
  if (!isOpen || !order) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const subtotal = order.items?.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0) || 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Receipt</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="text-center mb-6 pb-4 border-b border-gray-200">
            <h3 className="font-semibold text-lg">{order.restaurant}</h3>
            <p className="text-gray-600">{formatDate(order.date)}</p>
            <p className="text-sm text-gray-500">Order #{order.id}</p>
          </div>

          <div className="space-y-3 mb-4">
            {order.items?.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <div className="font-medium">{item.name || 'Unknown Item'}</div>
                  <div className="text-sm text-gray-600">Qty: {item.quantity || 0}</div>
                </div>
                <div className="font-medium">${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</div>
              </div>
            )) || <div className="text-gray-500">No items found</div>}
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span>${(order.deliveryFee || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>${(order.tax || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>${(order.total || subtotal).toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <div className={`inline-block px-3 py-1 rounded-full text-sm ${
              order.status === 'Delivered' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {order.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;