import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/config';
import { postReview } from './reviewSlice';
// Đăng nhập
export const fetchTour = createAsyncThunk(
    'tour/fetchTour',
    async ( _,{ rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/tours`);
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const getFeaturedTour = createAsyncThunk(
    'tour/getFeaturedTours',
    async ( _,{ rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/tours/search/getFeaturedTours`);
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
// Đăng ký
export const addTour = createAsyncThunk(
    'tour/addTour',
    async (newItem, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/tours`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newItem),
                credentials: 'include'
            });
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateTour = createAsyncThunk(
    'items/updateTour',
    async (item,{rejectWithValue}) => {
        try {
            const response = await fetch(`${BASE_URL}/tours/${item._id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(item),
                credentials: 'include'
            });
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
  );

  export const deleteTour = createAsyncThunk(
    'tour/deleteTour',
    async (id,{rejectWithValue}) => {
        try {
            const response = await fetch(`${BASE_URL}/tours/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(),
                credentials: 'include'
            });
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
  );
  export const getSingleTour = createAsyncThunk(
    'tour/getSingleTour',
    async ( id,{ rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/tours/${id}`);
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        tours: null,
        status: 'none',
        error: null,
        featuredTours:null,
    },
    reducers: {
        resetStatus(state) {
            state.status = '';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
         // fetchTour
         .addCase(fetchTour.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTour.fulfilled, (state, action) => {
            state.status = 'succeed';
            state.tours = action.payload.data; // Cập nhật danh sách tour
        })
        .addCase(fetchTour.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || action.error.message; // Sử dụng `payload` từ `rejectWithValue`
        })

        // addTour
        .addCase(addTour.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addTour.fulfilled, (state, action) => {
            state.status = 'succeed';
            state.tours.push(action.payload.data); // Thêm tour mới vào danh sách
        })
        .addCase(addTour.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || action.error.message; // Sử dụng `payload` từ `rejectWithValue`
        })

        // updateTour
        .addCase(updateTour.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(updateTour.fulfilled, (state, action) => {
            state.status = 'succeed';
            const index = state.tours.findIndex(tour => tour._id === action.payload._id);
            if (index !== -1) {
                state.tours[index] = action.payload.data; // Cập nhật tour trong danh sách
            }
        })
        .addCase(updateTour.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || action.error.message; // Sử dụng `payload` từ `rejectWithValue`
        })

        // deleteTour
        .addCase(deleteTour.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(deleteTour.fulfilled, (state, action) => {
            state.status = 'succeed';
            state.tours = state.tours.filter(tour => tour._id !== action.payload.data._id); // Xóa tour khỏi danh sách
        })
        .addCase(deleteTour.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || action.error.message; // Sử dụng `payload` từ `rejectWithValue`
        })
        
        //get FeaturedTour
        .addCase(getFeaturedTour.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getFeaturedTour.fulfilled, (state, action) => {
            state.status = 'succeed';
            state.featuredTours = action.payload.data; // Cập nhật danh sách tour
        })
        .addCase(getFeaturedTour.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || action.error.message; // Sử dụng `payload` từ `rejectWithValue`
        })

        //get single tour
        .addCase(getSingleTour.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getSingleTour.fulfilled, (state, action) => {
            state.status = 'succeed';
            state.featuredTours = action.payload.data; // Cập nhật danh sách tour
        })
        .addCase(getSingleTour.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || action.error.message; // Sử dụng `payload` từ `rejectWithValue`
        })
        //post review
        .addCase(postReview.fulfilled,(state,action)=>{
            const {tourId,newTourStateReview}=action.payload
            const index = state.tours.findIndex(tour => tour._id === tourId);
            if(index!==-1){
                state.tours[index].reviews=newTourStateReview
            }
        })
    }
});

export const { resetStatus } = tourSlice.actions;
export default tourSlice.reducer;