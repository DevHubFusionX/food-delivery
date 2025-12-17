import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import ApiService from '../services/api';
import DeliveryAddress from '../components/checkout/DeliveryAddress';
import PaymentMethod from '../components/checkout/PaymentMethod';
import DeliveryTime from '../components/checkout/DeliveryTime';
import PromoCode from '../components/checkout/PromoCode';
import DeliveryInstructions from '../components/checkout/DeliveryInstructions';
import CheckoutSummary from '../components/checkout/CheckoutSummary';

const Checkout = () => {
  const navigate = useNavigate();
  const { items: cartItems, clearCart, getTotal } = useCart();
  const { handleSessionExpired } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState({
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001'
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryTime, setDeliveryTime] = useState('asap');
  const [promo, setPromo] = useState(null);
  const [instructions, setInstructions] = useState('');

  const deliveryFee = getTotal() >= 25 ? 0 : 2.99;

  const handlePlaceOrder = async () => {
    if (!address) {
      alert('Please add a delivery address');
      return;
    }
    
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Get restaurant_id from first cart item
      const restaurant_id = cartItems[0]?.restaurant_id;
      if (!restaurant_id) {
        throw new Error('Restaurant information missing');
      }
      
      const orderData = {
        restaurant_id,
        address_id: null, // Would need to create address first in real app
        items: cartItems.map(item => ({
          menu_item_id: item.id || item._id,
          quantity: item.quantity,
          notes: item.notes || ''
        })),
        payment_method: paymentMethod,
        scheduled_time: deliveryTime === 'asap' ? null : deliveryTime,
        coupon_code: promo?.code || null
      };
      
      const response = await ApiService.createOrder(orderData);
      clearCart();
      alert('Order placed successfully! 🎉');
      navigate('/orders');
    } catch (err) {
      console.error('Order placement failed:', err);
      const errorMessage = err.message || 'Failed to place order';
      
      if (errorMessage.includes('Session expired') || errorMessage.includes('Access token expired')) {
        handleSessionExpired();
        navigate('/');
        return;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = address && paymentMethod;

  return (
    <div className="min-h-screen bg-gray-50 pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-1">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <DeliveryAddress 
              address={address}
              onAddressChange={setAddress}
            />
            
            <PaymentMethod
              selectedMethod={paymentMethod}
              onMethodChange={setPaymentMethod}
            />
            
            <DeliveryTime
              selectedTime={deliveryTime}
              onTimeChange={setDeliveryTime}
            />
            
            <PromoCode onPromoApply={setPromo} />
            
            <DeliveryInstructions
              instructions={instructions}
              onInstructionsChange={setInstructions}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg mb-4 border border-red-200">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">⚠️</span>
                    {error}
                  </div>
                </div>
              )}
              <CheckoutSummary
                items={cartItems}
                deliveryFee={deliveryFee}
                promo={promo}
                onPlaceOrder={handlePlaceOrder}
                loading={loading}
                disabled={!isFormValid || cartItems.length === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;