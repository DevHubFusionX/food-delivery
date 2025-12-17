const StatsCard = ({ title, value, icon, trend, color = "orange" }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p className={`text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
            </p>
          )}
        </div>
        <div className={`text-3xl p-3 rounded-full bg-${color}-100`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;