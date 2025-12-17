const OperatingHours = ({ hours }) => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Operating Hours</h2>
      
      <div className="space-y-2">
        {Object.entries(hours).map(([day, time]) => (
          <div
            key={day}
            className={`flex justify-between py-2 ${
              day === today ? 'bg-orange-50 px-3 rounded font-medium' : ''
            }`}
          >
            <span className="text-gray-700">{day}</span>
            <span className="text-gray-900">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperatingHours;