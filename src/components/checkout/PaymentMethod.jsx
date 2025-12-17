import { useState } from 'react';

const PaymentMethod = ({ selectedMethod, onMethodChange }) => {
  const [cardDetails, setCardDetails] = useState({});

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️' },
    { id: 'apple', name: 'Apple Pay', icon: '🍎' },
    { id: 'cash', name: 'Cash on Delivery', icon: '💵' }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h2>
      
      <div className="space-y-3 mb-4">
        {paymentMethods.map(method => (
          <label
            key={method.id}
            className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedMethod === method.id
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={(e) => onMethodChange(e.target.value)}
              className="sr-only"
            />
            <span className="text-2xl mr-3">{method.icon}</span>
            <span className="font-medium text-gray-900">{method.name}</span>
          </label>
        ))}
      </div>

      {selectedMethod === 'card' && (
        <div className="border-t pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Card Number"
              className="col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              placeholder="MM/YY"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              placeholder="CVV"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              placeholder="Cardholder Name"
              className="col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;