export const menuData = {
  1: { // Mario's Pizza Palace
    categories: [
      {
        id: 1,
        name: "Pizzas",
        items: [
          { id: 1, name: "Margherita Pizza", price: 12.99, description: "Fresh tomatoes, mozzarella, basil", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&auto=format&fit=crop&q=60" },
          { id: 2, name: "Pepperoni Pizza", price: 14.99, description: "Pepperoni, mozzarella, tomato sauce", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: 2,
        name: "Appetizers",
        items: [
          { id: 3, name: "Garlic Bread", price: 6.99, description: "Crispy bread with garlic butter", image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=300&auto=format&fit=crop&q=60" }
        ]
      }
    ],
    reviews: [
      { id: 1, user: "Sarah M.", rating: 5, comment: "Best pizza in town!", date: "2 days ago" },
      { id: 2, user: "Mike R.", rating: 4, comment: "Great taste, fast delivery", date: "1 week ago" }
    ],
    hours: {
      "Monday": "11:00 AM - 11:00 PM",
      "Tuesday": "11:00 AM - 11:00 PM",
      "Wednesday": "11:00 AM - 11:00 PM",
      "Thursday": "11:00 AM - 11:00 PM",
      "Friday": "11:00 AM - 12:00 AM",
      "Saturday": "11:00 AM - 12:00 AM",
      "Sunday": "12:00 PM - 10:00 PM"
    }
  },
  2: { // Burger Junction
    categories: [
      {
        id: 1,
        name: "Burgers",
        items: [
          { id: 1, name: "Classic Cheeseburger", price: 8.99, description: "Beef patty, cheese, lettuce, tomato", image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=300&auto=format&fit=crop&q=60" },
          { id: 2, name: "BBQ Bacon Burger", price: 11.99, description: "Beef patty, bacon, BBQ sauce, onions", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: 2,
        name: "Sides",
        items: [
          { id: 3, name: "French Fries", price: 4.99, description: "Crispy golden fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&auto=format&fit=crop&q=60" }
        ]
      }
    ],
    reviews: [
      { id: 1, user: "John D.", rating: 4, comment: "Juicy burgers, good value", date: "3 days ago" }
    ],
    hours: {
      "Monday": "10:00 AM - 10:00 PM",
      "Tuesday": "10:00 AM - 10:00 PM",
      "Wednesday": "10:00 AM - 10:00 PM",
      "Thursday": "10:00 AM - 10:00 PM",
      "Friday": "10:00 AM - 11:00 PM",
      "Saturday": "10:00 AM - 11:00 PM",
      "Sunday": "11:00 AM - 9:00 PM"
    }
  }
};