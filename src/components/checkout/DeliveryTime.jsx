import { useState } from 'react';

const DeliveryTime = ({ selectedTime, onTimeChange }) => {
  const [isScheduled, setIsScheduled] = useState(selectedTime !== 'asap');

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
  ];

  const handleTimeTypeChange = (type) => {
    setIsScheduled(type === 'scheduled');
    if (type === 'asap') {
      onTimeChange('asap');
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Delivery Time</h2>
      
      <div className="space-y-4">
        <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${
          !isScheduled ? 'border-orange-500 bg-orange-50' : 'border-gray-300'
        }`}>
          <input
            type="radio"
            name="deliveryType"
            checked={!isScheduled}
            onChange={() => handleTimeTypeChange('asap')}
            className="sr-only"
          />
          <div className="flex-1">
            <div className="font-medium text-gray-900">ASAP</div>
            <div className="text-sm text-gray-600">25-35 minutes</div>
          </div>
          <div className="text-2xl">⚡</div>
        </label>

        <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${
          isScheduled ? 'border-orange-500 bg-orange-50' : 'border-gray-300'
        }`}>
          <input
            type="radio"
            name="deliveryType"
            checked={isScheduled}
            onChange={() => handleTimeTypeChange('scheduled')}
            className="sr-only"
          />
          <div className="flex-1">
            <div className="font-medium text-gray-900">Schedule for later</div>
            <div className="text-sm text-gray-600">Choose your preferred time</div>
          </div>
          <div className="text-2xl">📅</div>
        </label>

        {isScheduled && (
          <div className="border-t pt-4">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => onTimeChange(time)}
                  className={`p-2 text-sm border rounded-lg transition-colors ${
                    selectedTime === time
                      ? 'border-orange-500 bg-orange-500 text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryTime;