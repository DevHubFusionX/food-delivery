import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ApiService from '../services/api';
import SearchBar from '../components/dashboard/SearchBar';
import FilterBar from '../components/dashboard/FilterBar';
import QuickCategories from '../components/dashboard/QuickCategories';
import RestaurantCard from '../components/dashboard/RestaurantCard';
import PopularMealCard from '../components/dashboard/PopularMealCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { restaurantData } from '../data/restaurantData';

const Dashboard = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    cuisine: '',
    price: '',
    rating: '',
    distance: ''
  });
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, [filters, searchTerm]);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = {};
      if (searchTerm) params.q = searchTerm;
      if (filters.cuisine && filters.cuisine !== 'All') params.cuisine = filters.cuisine;
      if (filters.rating && filters.rating !== 'all') params.rating_min = filters.rating;
      
      const response = await ApiService.getRestaurants(params);
      setRestaurants(response.restaurants || []);
    } catch (err) {
      console.error('Failed to fetch restaurants:', err);
      setError('Failed to load restaurants');
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  const restaurantList = restaurants;
  const popularMeals = restaurantData.popularMeals;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (error && restaurants.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorMessage message={error} onRetry={fetchRestaurants} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName}! 👋
          </h1>
          <p className="text-gray-600">What would you like to eat today?</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar onSearch={setSearchTerm} />
        </div>

        {/* Quick Categories */}
        <QuickCategories onCategorySelect={(category) => setFilters({...filters, cuisine: category})} />

        {/* Filters */}
        <div className="mb-8">
          <FilterBar filters={filters} onFilterChange={setFilters} />
        </div>

        {/* Popular Meals Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Right Now 🔥</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularMeals.map(meal => (
              <PopularMealCard key={meal.id} meal={meal} />
            ))}
          </div>
        </section>

        {/* Nearby Restaurants Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Nearby Restaurants 📍</h2>
            <span className="text-sm text-gray-600">
              {restaurantList.length} restaurants found
            </span>
          </div>
          
          {restaurantList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {restaurantList.map(restaurant => (
                <RestaurantCard key={restaurant._id || restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No restaurants found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;