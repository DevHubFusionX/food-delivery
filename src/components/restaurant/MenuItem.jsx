import { useState } from 'react';
import { useCart } from '../../context/CartContext';

const MenuItem = ({ item }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
    addItem({ ...item, quantity: 1, restaurant_id: item.restaurant_id });
  };

  const handleQuantityChange = (newQuantity) => {
    const diff = newQuantity - quantity;
    setQuantity(newQuantity);
    if (diff > 0) {
      addItem({ ...item, quantity: diff, restaurant_id: item.restaurant_id });
    }
  };

  return (
    <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover flex-shrink-0"
      />
      
      <div className="flex-1 p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <span className="font-bold text-orange-600">${item.price}</span>
          </div>
          
          <div className="ml-4">
            {quantity === 0 ? (
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Add
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;