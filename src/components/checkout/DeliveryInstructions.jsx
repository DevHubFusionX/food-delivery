import { useState } from 'react';

const DeliveryInstructions = ({ instructions, onInstructionsChange }) => {
  const [customInstructions, setCustomInstructions] = useState(instructions || '');

  const quickOptions = [
    'Leave at door',
    'Ring doorbell',
    'Call when arrived',
    'Meet at lobby',
    'Contactless delivery'
  ];

  const handleQuickSelect = (option) => {
    const newInstructions = customInstructions 
      ? `${customInstructions}, ${option}` 
      : option;
    setCustomInstructions(newInstructions);
    onInstructionsChange(newInstructions);
  };

  const handleCustomChange = (value) => {
    setCustomInstructions(value);
    onInstructionsChange(value);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Delivery Instructions</h2>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {quickOptions.map(option => (
            <button
              key={option}
              onClick={() => handleQuickSelect(option)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-full hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <textarea
        value={customInstructions}
        onChange={(e) => handleCustomChange(e.target.value)}
        placeholder="Add any special delivery instructions..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
        rows="3"
      />
    </div>
  );
};

export default DeliveryInstructions;