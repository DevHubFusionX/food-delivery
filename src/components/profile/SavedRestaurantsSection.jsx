import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SavedRestaurantsSection = () => {
  const navigate = useNavigate();
  const [savedRestaurants, setSavedRestaurants] = useState([
    {
      id: 1,
      name: "Mario's Pizza Palace",
      cuisine: "Italian",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Sakura Sushi",
      cuisine: "Japanese", 
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&auto=format&fit=crop&q=60"
    }
  ]);

  const removeSaved = (id) => {
    setSavedRestaurants(prev => prev.filter(restaurant => restaurant.id !== id));
  };

  const viewRestaurant = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Saved Restaurants</h2>
      
      {savedRestaurants.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-2">❤️</div>
          <p className="text-gray-600">No saved restaurants yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {savedRestaurants.map(restaurant => (
            <div key={restaurant.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{restaurant.name}</h3>
                <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500">⭐</span>
                  <span className="ml-1 text-gray-600">{restaurant.rating}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => viewRestaurant(restaurant.id)}
                  className="px-3 py-1 text-sm bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                  View
                </button>
                <button
                  onClick={() => removeSaved(restaurant.id)}
                  className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRestaurantsSection;