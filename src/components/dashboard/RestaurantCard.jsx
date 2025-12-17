import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/restaurant/${restaurant._id || restaurant.id}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {restaurant.status !== 'active' && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Closed</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-800">{restaurant.name}</h3>
          <span className="text-sm text-gray-600">{restaurant.priceRange}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
        
        {restaurant.promoTags && restaurant.promoTags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {restaurant.promoTags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-1">{restaurant.rating}</span>
          </div>
          <span>{restaurant.estimatedDeliveryTime} min</span>
          <span>{restaurant.distance}</span>
        </div>
        
        <div className="mt-2 text-sm text-gray-600">
          Delivery: ${(restaurant.deliveryFee / 100).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;