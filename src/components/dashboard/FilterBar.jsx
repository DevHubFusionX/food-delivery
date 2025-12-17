import { restaurantData } from '../../data/restaurantData';

const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow-sm">
      {/* Cuisine Filter */}
      <select
        value={filters.cuisine}
        onChange={(e) => onFilterChange({ ...filters, cuisine: e.target.value })}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        {restaurantData.cuisineTypes.map(cuisine => (
          <option key={cuisine} value={cuisine}>{cuisine}</option>
        ))}
      </select>

      {/* Price Filter */}
      <select
        value={filters.price}
        onChange={(e) => onFilterChange({ ...filters, price: e.target.value })}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        {restaurantData.priceRanges.map(range => (
          <option key={range.value} value={range.value}>{range.label}</option>
        ))}
      </select>

      {/* Rating Filter */}
      <select
        value={filters.rating}
        onChange={(e) => onFilterChange({ ...filters, rating: e.target.value })}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="all">All Ratings</option>
        <option value="4.5">4.5+ ⭐</option>
        <option value="4.0">4.0+ ⭐</option>
        <option value="3.5">3.5+ ⭐</option>
      </select>

      {/* Distance Filter */}
      <select
        value={filters.distance}
        onChange={(e) => onFilterChange({ ...filters, distance: e.target.value })}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="all">Any Distance</option>
        <option value="1">Within 1 km</option>
        <option value="2">Within 2 km</option>
        <option value="5">Within 5 km</option>
      </select>
    </div>
  );
};

export default FilterBar;