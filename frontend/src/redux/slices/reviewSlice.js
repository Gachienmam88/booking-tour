    import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
    import { BASE_URL } from '../../utils/config';

    // get review
    export const fetchReview = createAsyncThunk(
        'review/getReview',
        async (_, { rejectWithValue }) => {
            console.log(1)
            try {
                const response = await fetch(`${BASE_URL}/review`);
                if (!response.ok) {
                    const errorData = await response.json();
                    return rejectWithValue(errorData);
                }
                const data = await response.json(); 
                console.log(data)
                return data.data;
            } catch (error) {
                return rejectWithValue(error.message);
            }
        }
    );
    // post review
    export const postReview = createAsyncThunk(
        'auth/register',
        async (reviewObj, { rejectWithValue , getState }) => {
            try {
                const {tourId,...rest}=reviewObj
                const response = await fetch(`${BASE_URL}/review/${tourId}`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({...rest}),
                    credentials: 'include'
                });
                if (!response.ok) {
                    let errorData = await response.json()
                    errorData=errorData.message
                    return rejectWithValue(errorData);
                }
                const data = await response.json()
                const tourState=getState().tour.tours.find((tour)=>tour._id===tourId)
                const newTourStateReview= [...tourState.reviews,data.data]
                 return {tourId,newTourStateReview}
            } catch (error) {
                return rejectWithValue(error.message);
            }
        }
    );

    const userSlice = createSlice({
        name: 'review',
        initialState: {
            reviews:[],
            status: '',
            error: null,
            statusGet:'lavs',
            errorGet:'aaa'
        },
        reducers: {
            resetStatus(state) {
                state.status = '';
                state.error = null;
            } , 
            resetFetchStatus(state){
                state.statusGet='';
                state.errorGet=null
            } 
        },
        extraReducers: (builder) => {
            builder
            .addCase(postReview.pending,(state)=>{
                state.status='loading'
            })
            .addCase(postReview.fulfilled,(state)=>{
                state.status='succeed'
            })
            .addCase(postReview.rejected,(state,action)=>{
                state.error=action.payload;
                state.status='failed'
            })
            .addCase(fetchReview.pending,(state)=>{
                state.statusGet='loading'
            })
            .addCase(fetchReview.fulfilled,(state,action)=>{
                state.statusGet='succeed'
                state.reviews=action.payload
            })
            .addCase(fetchReview.rejected,(state,action)=>{
                state.errorGet=action.payload;
                state.statusGet='failed'
            })
            
        }
    });

    export const { resetStatus,resetFetchStatus } = userSlice.actions;
    export default userSlice.reducer;