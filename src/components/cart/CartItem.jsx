import { useState } from 'react';

const CartItem = ({ item, onUpdateQuantity, onUpdateNotes, onRemove }) => {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(item.notes || '');

  const handleNotesChange = (value) => {
    setNotes(value);
    onUpdateNotes(item.id, value);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-start gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
        />
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600">${item.price}</p>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="text-gray-400 hover:text-red-500 p-1"
            >
              ✕
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600"
                >
                  +
                </button>
              </div>
              
              <button
                onClick={() => setShowNotes(!showNotes)}
                className="text-sm text-orange-600 hover:text-orange-700"
              >
                {showNotes ? 'Hide notes' : 'Add notes'}
              </button>
            </div>
            
            <span className="font-medium text-gray-900">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
          
          {showNotes && (
            <div className="mt-3">
              <textarea
                value={notes}
                onChange={(e) => handleNotesChange(e.target.value)}
                placeholder="Special instructions (e.g., less pepper, extra sauce)"
                className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="2"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;