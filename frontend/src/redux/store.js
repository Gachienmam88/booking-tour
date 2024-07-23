import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Sử dụng Local Storage
import reviewReducer from './slices/reviewSlice';
import tourReducer from './slices/tour';
import userReducer from './slices/user';

// Cấu hình persist
const persistConfig = {
    key: 'root',
    storage,
};

// Kết hợp các reducer
const rootReducer = combineReducers({
    review: reviewReducer,
    tour: tourReducer,
    user: userReducer
    // Thêm các slice khác nếu cần
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };