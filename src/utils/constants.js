export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh'
  },
  RESTAURANTS: {
    LIST: '/restaurants',
    DETAIL: (id) => `/restaurants/${id}`,
    MENU: (id) => `/restaurants/${id}/menu`,
    SEARCH: '/restaurants/search'
  },
  ORDERS: {
    LIST: '/orders',
    CREATE: '/orders',
    DETAIL: (id) => `/orders/${id}`,
    CANCEL: (id) => `/orders/${id}/cancel`
  },
  USER: {
    PROFILE: '/user/profile',
    ADDRESSES: '/user/addresses',
    PAYMENT_METHODS: '/user/payment-methods'
  }
};

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

export const PAYMENT_METHODS = {
  CARD: 'card',
  PAYPAL: 'paypal',
  APPLE_PAY: 'apple_pay',
  CASH: 'cash'
};