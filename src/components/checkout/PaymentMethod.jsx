import { useState } from 'react';

const PaymentMethod = ({ selectedMethod, onMethodChange }) => {
  const [cardDetails, setCardDetails] = useState({});

  const paymentMethods = [
    { id: 'cash', name: 'Cash on Delivery', icon: '💵' },
    { id: 'paystack', name: 'Paystack (Card Payment)', icon: '💳' }
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

      {selectedMethod === 'paystack' && (
        <div className="border-t pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">
                💳 You will be redirected to Paystack to complete your payment securely.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;