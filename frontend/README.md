// features/cart/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks để lấy dữ liệu giỏ hàng từ API
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async () => {
    const response = await fetch('https://course-api.com/react-useReducer-cart-project');
    const data = await response.json();
    return data;
  }
);

// Thunk để cập nhật giỏ hàng trên backend khi thanh toán
export const checkoutCart = createAsyncThunk(
  'cart/checkout',
  async (cartItems) => {
    const response = await fetch('https://your-backend-api.com/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems)
    });
    const data = await response.json();
    return data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    totalAmount: 0
  },
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount += action.payload.price;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    increaseItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
        state.totalAmount += existingItem.price;
      }
    },
    decreaseItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalAmount -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.totalAmount -= existingItem.price;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    calculateTotal(state) {
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.totalAmount = action.payload.reduce((total, item) => total + item.price * item.quantity, 0);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(checkoutCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkoutCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [];
        state.totalAmount = 0;
      })
      .addCase(checkoutCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addItem, removeItem, increaseItem, decreaseItem, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;