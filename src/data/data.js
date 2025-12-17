export const appData = {
  // Brand Information
  brand: {
    name: "FoodExpress",
    tagline: "Delicious food delivered to your doorstep",
    logo: "🍕"
  },

  // Navigation Links
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Restaurants', path: '/restaurants' },
    { name: 'Orders', path: '/orders' },
    { name: 'Profile', path: '/profile' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ],

  // Food Categories
  categories: [
    { name: 'Pizza', emoji: '🍕', color: 'bg-red-100 hover:bg-red-200' },
    { name: 'Burgers', emoji: '🍔', color: 'bg-yellow-100 hover:bg-yellow-200' },
    { name: 'Sushi', emoji: '🍣', color: 'bg-green-100 hover:bg-green-200' },
    { name: 'Desserts', emoji: '🍰', color: 'bg-pink-100 hover:bg-pink-200' },
    { name: 'Drinks', emoji: '🥤', color: 'bg-blue-100 hover:bg-blue-200' },
    { name: 'Salads', emoji: '🥗', color: 'bg-emerald-100 hover:bg-emerald-200' }
  ],

  // Hero Section Content
  hero: {
    title: "Fast Food Delivery",
    subtitle: "Order your favorite meals and get them delivered in 30 minutes or less",
    ctaText: "Order Now"
  },

  // Features & Benefits
  features: {
    delivery: {
      time: "30min delivery",
      icon: "⚡"
    },
    security: {
      text: "Secure payments",
      icon: "🔒"
    },
    rewards: {
      text: "Earn rewards",
      icon: "🏆"
    }
  },

  // Modal Content
  modals: {
    login: {
      title: "Welcome back! 👋",
      subtitle: "Sign in to your account to continue your food journey",
      welcomeBonus: {
        title: "🎉 Welcome Bonus",
        description: "Get 20% off your first order + free delivery"
      }
    },
    signup: {
      title: "Join FoodExpress! 🚀",
      subtitle: "Create your account and start your delicious journey",
      memberPerks: {
        title: "🎁 New Member Perks",
        description: "Free delivery on first 3 orders + exclusive deals",
        benefits: [
          { text: "Save favorites", icon: "💰" },
          { text: "Earn rewards", icon: "🏆" },
          { text: "Order history", icon: "📱" },
          { text: "Quick reorder", icon: "⚡" }
        ]
      }
    }
  },

  // Images
  images: {
    loginModal: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60",
    signupModal: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60",
    heroMain: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=800&auto=format&fit=crop&q=60",
    heroFloatingCard: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&auto=format&fit=crop&q=60",
    // Featured Section
    categoryBurgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60",
    categoryPizza: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&auto=format&fit=crop&q=60",
    categorySushi: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&auto=format&fit=crop&q=60",
    categoryDesserts: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=60",
    categoryHealthy: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60",
    categoryDrinks: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&auto=format&fit=crop&q=60",
    popularBurger: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=600&auto=format&fit=crop&q=60",
    popularPizza: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60",
    popularSushi: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&auto=format&fit=crop&q=60",
    popularDessert: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=60",
    // Testimonials
    testimonialSarah: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=60",
    testimonialMiguel: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    testimonialPriya: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    // App CTA
    appPreview: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60",
    appFeaturedItem: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&auto=format&fit=crop&q=60"
  },

  // Social Login Options
  socialLogin: [
    { name: 'Google', label: 'Google' },
    { name: 'Twitter', label: 'Twitter' }
  ]
};