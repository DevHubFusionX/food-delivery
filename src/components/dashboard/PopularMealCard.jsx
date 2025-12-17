const PopularMealCard = ({ meal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={meal.image}
        alt={meal.name}
        className="w-full h-32 object-cover"
      />
      
      <div className="p-3">
        <h4 className="font-semibold text-gray-800 mb-1">{meal.name}</h4>
        <p className="text-sm text-gray-600 mb-2">{meal.restaurant}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-orange-600">${meal.price}</span>
          <div className="flex items-center text-sm">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-1 text-gray-600">{meal.rating}</span>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 mt-1">
          {meal.orderCount} orders
        </div>
      </div>
    </div>
  );
};

export default PopularMealCard;