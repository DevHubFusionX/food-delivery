const CheckoutSummary = ({ items, deliveryFee, promo, onPlaceOrder }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  
  let discount = 0;
  if (promo) {
    discount = promo.type === 'percentage' 
      ? subtotal * (promo.discount / 100)
      : promo.discount;
  }
  
  const total = subtotal + deliveryFee + tax - discount;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-4">
        {items.map(item => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.quantity}x {item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4 space-y-2">
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
        
        <div className="border-t pt-2">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={onPlaceOrder}
        className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg mt-6 hover:bg-orange-600 transition-colors"
      >
        Place Order - ${total.toFixed(2)}
      </button>
      
      <p className="text-xs text-gray-500 text-center mt-3">
        By placing this order, you agree to our Terms of Service
      </p>
    </div>
  );
};

export default CheckoutSummary;