import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const OrderSummary = ({ items, deliveryFee = 2.99, discount = 0, onLoginRequired }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + deliveryFee + tax - discount;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Delivery fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="border-t pt-3">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => {
          if (isAuthenticated) {
            navigate('/checkout');
          } else {
            onLoginRequired?.();
          }
        }}
        className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium mt-6 hover:bg-orange-600 transition-colors"
      >
        {isAuthenticated ? 'Proceed to Checkout' : 'Sign in to Checkout'}
      </button>
    </div>
  );
};

export default OrderSummary;