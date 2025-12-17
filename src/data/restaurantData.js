export const restaurantData = {
  nearbyRestaurants: [
    {
      id: 1,
      name: "Mario's Pizza Palace",
      cuisine: "Italian",
      rating: 4.8,
      deliveryTime: "25-35 min",
      deliveryFee: 2.99,
      distance: "0.8 km",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&auto=format&fit=crop&q=60",
      priceRange: "$$",
      isOpen: true,
      promoTags: ["Free Delivery"]
    },
    {
      id: 2,
      name: "Burger Junction",
      cuisine: "American",
      rating: 4.6,
      deliveryTime: "20-30 min",
      deliveryFee: 1.99,
      distance: "1.2 km",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=60",
      priceRange: "$",
      isOpen: true,
      promoTags: ["20% Off", "Fast Delivery"]
    },
    {
      id: 3,
      name: "Sakura Sushi",
      cuisine: "Japanese",
      rating: 4.9,
      deliveryTime: "30-40 min",
      deliveryFee: 3.99,
      distance: "2.1 km",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&auto=format&fit=crop&q=60",
      priceRange: "$$$",
      isOpen: true,
      promoTags: []
    },
    {
      id: 4,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      rating: 4.5,
      deliveryTime: "15-25 min",
      deliveryFee: 1.49,
      distance: "0.5 km",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&auto=format&fit=crop&q=60",
      priceRange: "$",
      isOpen: false,
      promoTags: ["Buy 1 Get 1"]
    },
    {
      id: 5,
      name: "Green Garden",
      cuisine: "Salads",
      rating: 4.7,
      deliveryTime: "20-30 min",
      deliveryFee: 0,
      distance: "1.5 km",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60",
      priceRange: "$$",
      isOpen: true,
      promoTags: ["Free Delivery", "Healthy Choice"]
    },
    {
      id: 6,
      name: "Spice Route",
      cuisine: "Indian",
      rating: 4.4,
      deliveryTime: "35-45 min",
      deliveryFee: 2.49,
      distance: "3.2 km",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=60",
      priceRange: "$$",
      isOpen: true,
      promoTags: ["15% Off"]
    }
  ],

  popularMeals: [
    {
      id: 1,
      name: "Margherita Pizza",
      restaurant: "Mario's Pizza Palace",
      price: 12.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=60",
      orderCount: 245
    },
    {
      id: 2,
      name: "Classic Cheeseburger",
      restaurant: "Burger Junction",
      price: 8.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&auto=format&fit=crop&q=60",
      orderCount: 189
    },
    {
      id: 3,
      name: "Salmon Roll Set",
      restaurant: "Sakura Sushi",
      price: 18.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&auto=format&fit=crop&q=60",
      orderCount: 156
    }
  ],

  cuisineTypes: [
    "All", "Italian", "American", "Japanese", "Mexican", "Chinese", "Indian", "Thai"
  ],

  priceRanges: [
    { label: "All Prices", value: "all" },
    { label: "$", value: "$" },
    { label: "$$", value: "$$" },
    { label: "$$$", value: "$$$" }
  ]
};