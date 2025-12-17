export const adminData = {
  stats: {
    totalOrders: 1247,
    totalRevenue: 28450.75,
    activeRiders: 12,
    avgDeliveryTime: 28
  },
  
  recentOrders: [
    {
      id: "ORD-1001",
      customer: "John Smith",
      items: ["Margherita Pizza", "Garlic Bread"],
      total: 19.98,
      status: "preparing",
      time: "5 min ago"
    },
    {
      id: "ORD-1002", 
      customer: "Sarah Johnson",
      items: ["Cheeseburger", "Fries"],
      total: 13.98,
      status: "out_for_delivery",
      time: "12 min ago"
    }
  ],

  menuItems: [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Pizza",
      price: 12.99,
      available: true,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Pepperoni Pizza", 
      category: "Pizza",
      price: 14.99,
      available: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&auto=format&fit=crop&q=60"
    }
  ],

  riders: [
    {
      id: 1,
      name: "Mike Wilson",
      status: "active",
      currentOrders: 2,
      rating: 4.8,
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      name: "Lisa Chen",
      status: "offline", 
      currentOrders: 0,
      rating: 4.9,
      phone: "+1 (555) 987-6543"
    }
  ],

  restaurant: {
    name: "Mario's Pizza Palace",
    address: "123 Main St, City, ST 12345",
    phone: "+1 (555) 111-2222",
    email: "info@mariospizza.com",
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    }
  }
};