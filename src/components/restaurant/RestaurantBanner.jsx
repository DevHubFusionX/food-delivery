const RestaurantBanner = ({ restaurant }) => {
  return (
    <div className="relative h-64 bg-gray-900">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-lg mb-2">{restaurant.cuisine}</p>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center">
              <span className="text-yellow-400">⭐</span>
              <span className="ml-1">{restaurant.rating}</span>
            </div>
            <span>{restaurant.deliveryTime}</span>
            <span>{restaurant.distance}</span>
            <span className={restaurant.deliveryFee === 0 ? "text-green-400" : ""}>
              {restaurant.deliveryFee === 0 ? "Free delivery" : `$${restaurant.deliveryFee} delivery`}
            </span>
          </div>
          
          {restaurant.promoTags && restaurant.promoTags.length > 0 && (
            <div className="flex gap-2 mt-3">
              {restaurant.promoTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantBanner;