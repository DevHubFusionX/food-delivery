import { useState } from 'react';

const PromoCode = ({ onPromoApply }) => {
  const [code, setCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [error, setError] = useState('');

  const validCodes = {
    'SAVE10': { discount: 10, type: 'percentage' },
    'FIRST5': { discount: 5, type: 'fixed' },
    'WELCOME20': { discount: 20, type: 'percentage' }
  };

  const handleApply = () => {
    const promo = validCodes[code.toUpperCase()];
    if (promo) {
      setAppliedPromo({ code: code.toUpperCase(), ...promo });
      setError('');
      onPromoApply(promo);
    } else {
      setError('Invalid promo code');
      setAppliedPromo(null);
      onPromoApply(null);
    }
  };

  const handleRemove = () => {
    setAppliedPromo(null);
    setCode('');
    setError('');
    onPromoApply(null);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Promo Code</h2>
      
      {appliedPromo ? (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <span className="text-green-600 text-xl mr-2">✅</span>
            <div>
              <div className="font-medium text-green-900">{appliedPromo.code}</div>
              <div className="text-sm text-green-700">
                {appliedPromo.type === 'percentage' 
                  ? `${appliedPromo.discount}% off` 
                  : `$${appliedPromo.discount} off`}
              </div>
            </div>
          </div>
          <button
            onClick={handleRemove}
            className="text-green-600 hover:text-green-700 font-medium text-sm"
          >
            Remove
          </button>
        </div>
      ) : (
        <div>
          <div className="flex gap-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter promo code"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleApply}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600"
            >
              Apply
            </button>
          </div>
          {error && (
            <p className="text-red-600 text-sm mt-2">{error}</p>
          )}
          <div className="mt-3 text-sm text-gray-600">
            Try: SAVE10, FIRST5, WELCOME20
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoCode;