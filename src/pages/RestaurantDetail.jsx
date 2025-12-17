import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ApiService from '../services/api';
import RestaurantBanner from '../components/restaurant/RestaurantBanner';
import MenuCategories from '../components/restaurant/MenuCategories';
import MenuItem from '../components/restaurant/MenuItem';
import Reviews from '../components/restaurant/Reviews';
import OperatingHours from '../components/restaurant/OperatingHours';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items: cartItems, getTotal } = useCart();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, [id]);

  const fetchRestaurantData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const restaurantData = await ApiService.getRestaurant(id);
      setRestaurant(restaurantData);
      
      // Group menu items by category
      const itemsByCategory = {};
      const categorySet = new Set();
      
      restaurantData.menu_items?.forEach(item => {
        const categoryName = item.categoryId?.name || 'Other';
        categorySet.add(categoryName);
        
        if (!itemsByCategory[categoryName]) {
          itemsByCategory[categoryName] = [];
        }
        itemsByCategory[categoryName].push({
          id: item._id,
          name: item.name,
          description: item.description,
          price: item.priceCents / 100,
          image: item.imageUrl,
          isAvailable: item.isAvailable,
          preparationTime: item.preparationTime,
          restaurant_id: id
        });
      });
      
      const categoryList = Array.from(categorySet).map((name, index) => ({
        id: index + 1,
        name,
        items: itemsByCategory[name] || []
      }));
      
      setCategories(categoryList);
      setMenuItems(restaurantData.menu_items || []);
      
      if (categoryList.length > 0) {
        setActiveCategory(categoryList[0].id);
      }
    } catch (err) {
      console.error('Failed to fetch restaurant:', err);
      setError('Failed to load restaurant data');
    } finally {
      setLoading(false);
    }
  };



  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorMessage message={error} />
        </div>
      </div>
    );
  }

  if (!restaurant) {
    return <div className="flex justify-center items-center h-64">Restaurant not found</div>;
  }

  const activeMenuCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <RestaurantBanner restaurant={{
        id: restaurant._id,
        name: restaurant.name,
        description: restaurant.description,
        cuisine: restaurant.cuisine,
        rating: restaurant.rating,
        reviewCount: restaurant.reviewCount,
        deliveryTime: `${restaurant.estimatedDeliveryTime} min`,
        deliveryFee: `$${(restaurant.deliveryFee / 100).toFixed(2)}`,
        image: restaurant.image,
        address: `${restaurant.address.street}, ${restaurant.address.city}`,
        phone: restaurant.phone
      }} />
      
      <MenuCategories
        categories={categories}
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {activeMenuCategory?.name}
              </h2>
              <div className="space-y-4">
                {activeMenuCategory?.items.map(item => (
                  <MenuItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </div>
            
            <Reviews reviews={[]} />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-2">Estimated Delivery</h3>
              <p className="text-orange-600 font-medium">{restaurant.estimatedDeliveryTime} min</p>
            </div>
            
            <OperatingHours hours={{
              monday: `${restaurant.openTime} - ${restaurant.closeTime}`,
              tuesday: `${restaurant.openTime} - ${restaurant.closeTime}`,
              wednesday: `${restaurant.openTime} - ${restaurant.closeTime}`,
              thursday: `${restaurant.openTime} - ${restaurant.closeTime}`,
              friday: `${restaurant.openTime} - ${restaurant.closeTime}`,
              saturday: `${restaurant.openTime} - ${restaurant.closeTime}`,
              sunday: `${restaurant.openTime} - ${restaurant.closeTime}`
            }} />
            
            {cartItems.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-3">Your Order</h3>
                <div className="space-y-2 mb-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/cart')}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium mt-4 hover:bg-orange-600 transition-colors"
                >
                  View Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;