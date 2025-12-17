const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://food-delivery-backend-c8yx.onrender.com/api/v1';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem('accessToken');
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        
        if (response.status === 401 && errorData.error === 'Access token expired') {
          const refreshed = await this.refreshToken();
          if (refreshed) {
            config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
            const retryResponse = await fetch(url, config);
            if (retryResponse.ok) {
              return await retryResponse.json();
            }
            const retryErrorData = await retryResponse.json().catch(() => ({}));
            throw new Error(retryErrorData.error || `HTTP error! status: ${retryResponse.status}`);
          } else {
            // Refresh failed, clear auth data and throw error
            this.clearAuthData();
            throw new Error('Session expired. Please log in again.');
          }
        }
        
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) return false;

      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken })
      });

      if (response.ok) {
        const { accessToken } = await response.json();
        localStorage.setItem('accessToken', accessToken);
        return true;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
    
    return false;
  }

  clearAuthData() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }

  // Auth
  login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  googleAuth(idToken) {
    return this.request('/auth/oauth/google', {
      method: 'POST',
      body: JSON.stringify({ idToken }),
    });
  }

  // Restaurants
  getRestaurants(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/restaurants?${params}`);
  }

  getRestaurant(id) {
    return this.request(`/restaurants/${id}`);
  }

  searchRestaurants(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/search${queryString ? `?${queryString}` : ''}`);
  }

  // Cart
  getCart() {
    return this.request('/cart');
  }

  updateCart(items) {
    return this.request('/cart', {
      method: 'POST',
      body: JSON.stringify({ items }),
    });
  }

  clearCart() {
    return this.request('/cart', {
      method: 'DELETE',
    });
  }

  // Orders
  getOrders(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/orders${queryString ? `?${queryString}` : ''}`);
  }

  getOrder(id) {
    return this.request(`/orders/${id}`);
  }

  createOrder(orderData) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  cancelOrder(id, reason) {
    return this.request(`/orders/${id}/cancel`, {
      method: 'POST',
      body: JSON.stringify({ reason }),
    });
  }

  // Payments
  createPaystackTransaction(amount_cents, order_id) {
    return this.request('/payments/paystack-init', {
      method: 'POST',
      body: JSON.stringify({ amount_cents, order_id }),
    });
  }
}

export default new ApiService();