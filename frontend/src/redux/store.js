import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reviewReducer from './slices/reviewSlice';
import tourReducer from './slices/tour';
import userReducer from './slices/user';

// Kết hợp các reducer
const rootReducer = combineReducers({
    review: reviewReducer,
    tour: tourReducer,
    user: userReducer
    // Thêm các slice khác nếu cần
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;