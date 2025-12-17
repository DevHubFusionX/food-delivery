import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ApiService from '../services/api';
import SearchBar from '../components/dashboard/SearchBar';
import FilterBar from '../components/dashboard/FilterBar';
import RestaurantCard from '../components/dashboard/RestaurantCard';
import RestaurantListCard from '../components/restaurants/RestaurantListCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const Restaurants = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    cuisine: searchParams.get('cuisine') || '',
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
      if (filters.cuisine && filters.cuisine !== 'All' && filters.cuisine !== '') params.cuisine = filters.cuisine;
      if (filters.rating && filters.rating !== 'all' && filters.rating !== '') params.rating_min = filters.rating;
      
      console.log('Fetching restaurants with params:', params);
      const response = await ApiService.getRestaurants(params);
      console.log('Restaurant response:', response);
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
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Restaurants</h1>
          <SearchBar onSearch={setSearchTerm} />
        </div>

        <div className="mb-6">
          <FilterBar filters={filters} onFilterChange={setFilters} />
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-600">
            {restaurantList.length} restaurants found
          </span>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600'}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600'}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </button>
          </div>
        </div>

        {restaurantList.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {restaurantList.map(restaurant => (
              viewMode === 'grid' 
                ? <RestaurantCard key={restaurant._id} restaurant={restaurant} />
                : <RestaurantListCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No restaurants found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;