import { createContext, useContext, useState, useEffect } from 'react';
import ApiService from '../services/api';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const cartData = await ApiService.getCart();
        if (cartData?.items) {
          setItems(cartData.items.map(item => ({
            id: item.menu_item_id,
            name: item.menu_item_id?.name || 'Unknown Item',
            price: (item.price_cents || 0) / 100,
            quantity: item.quantity,
            restaurant_id: item.menu_item_id?.restaurantId,
            notes: item.notes
          })));
        }
      } else {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          setItems(JSON.parse(savedCart));
        }
      }
    } catch (error) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    }
  };

  const syncCart = async (newItems) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        await ApiService.updateCart(newItems.map(item => ({
          menu_item_id: item.id,
          quantity: item.quantity,
          notes: item.notes || ''
        })));
      }
    } catch (error) {
      console.error('Cart sync failed:', error);
    }
    localStorage.setItem('cart', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    setItems(prev => {
      const validPrice = typeof item.price === 'number' && !isNaN(item.price) ? item.price : 0;
      const itemWithValidPrice = { ...item, price: validPrice };

      const existing = prev.find(i => i.id === item.id);
      let newItems;
      if (existing) {
        newItems = prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      } else {
        newItems = [...prev, { ...itemWithValidPrice, quantity: item.quantity || 1 }];
      }
      syncCart(newItems);
      return newItems;
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(prev => {
      const newItems = prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      syncCart(newItems);
      return newItems;
    });
  };

  const removeItem = (id) => {
    setItems(prev => {
      const newItems = prev.filter(item => item.id !== id);
      syncCart(newItems);
      return newItems;
    });
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        await ApiService.clearCart();
      }
    } catch (error) {
      console.error('Clear cart failed:', error);
    }
    localStorage.removeItem('cart');
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((sum, item) => {
      const price = typeof item.price === 'number' && !isNaN(item.price) ? item.price : 0;
      const quantity = typeof item.quantity === 'number' && !isNaN(item.quantity) ? item.quantity : 0;
      return sum + (price * quantity);
    }, 0);
  };

  const getItemCount = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const value = {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    getTotal,
    getItemCount,
    fetchCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};