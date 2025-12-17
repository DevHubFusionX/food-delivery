import { useState } from 'react';

const PaymentMethodsSection = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'card', last4: '4242', brand: 'Visa', isDefault: true },
    { id: 2, type: 'paypal', email: 'john.doe@email.com', isDefault: false }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddCard = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const cardNumber = formData.get('cardNumber');
    const newCard = {
      id: Date.now(),
      type: 'card',
      last4: cardNumber.slice(-4),
      brand: 'Visa', // Simplified
      isDefault: false
    };
    setPaymentMethods([...paymentMethods, newCard]);
    setShowAddForm(false);
  };

  const setDefault = (id) => {
    setPaymentMethods(methods => methods.map(method => ({ ...method, isDefault: method.id === id })));
  };

  const removeMethod = (id) => {
    setPaymentMethods(methods => methods.filter(method => method.id !== id));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Payment Methods</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-orange-600 hover:text-orange-700 text-sm font-medium"
        >
          {showAddForm ? 'Cancel' : 'Add Card'}
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {paymentMethods.map(method => (
          <div key={method.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                {method.type === 'card' ? '💳' : '🅿️'}
              </span>
              <div>
                <div className="font-medium">
                  {method.type === 'card' 
                    ? `${method.brand} •••• ${method.last4}`
                    : `PayPal ${method.email}`
                  }
                </div>
                {method.isDefault && (
                  <span className="text-xs text-green-600">Default</span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              {!method.isDefault && (
                <button
                  onClick={() => setDefault(method.id)}
                  className="text-xs text-orange-600 hover:text-orange-700"
                >
                  Set Default
                </button>
              )}
              <button
                onClick={() => removeMethod(method.id)}
                className="text-xs text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddForm && (
        <form onSubmit={handleAddCard} className="space-y-3 p-4 bg-gray-50 rounded-lg">
          <input name="cardNumber" placeholder="Card Number" className="w-full p-2 border border-gray-300 rounded" required />
          <div className="grid grid-cols-2 gap-2">
            <input name="expiry" placeholder="MM/YY" className="p-2 border border-gray-300 rounded" required />
            <input name="cvv" placeholder="CVV" className="p-2 border border-gray-300 rounded" required />
          </div>
          <input name="name" placeholder="Cardholder Name" className="w-full p-2 border border-gray-300 rounded" required />
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded font-medium hover:bg-orange-600">
            Add Card
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentMethodsSection;