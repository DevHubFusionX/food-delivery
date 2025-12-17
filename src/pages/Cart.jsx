import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';

const Cart = () => {
  const { items: cartItems, updateQuantity, removeItem } = useCart();

  const handleUpdateNotes = (itemId, notes) => {
    // This would update notes in cart context
    console.log('Update notes:', itemId, notes);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some delicious items to get started</p>
            <Link
              to="/restaurants"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Browse Restaurants
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
          <p className="text-gray-600 mt-1">{cartItems.length} items</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onUpdateNotes={handleUpdateNotes}
                  onRemove={removeItem}
                />
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 text-xl">💡</div>
                <div>
                  <h3 className="font-medium text-blue-900">Free delivery on orders over $25</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Add ${Math.max(0, 25 - cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)).toFixed(2)} more to qualify
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <OrderSummary 
                items={cartItems}
                deliveryFee={cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) >= 25 ? 0 : 2.99}
                discount={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;