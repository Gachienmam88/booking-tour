import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/config';

// Đăng nhập
export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(credentials),
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

// Đăng ký
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(credentials),
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
export const logout=createAsyncThunk(
    'auth/logout',
    async(_,{rejectWithValue})=>{
        try {
            const response=await fetch(`${BASE_URL}/auth/logout`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include'
            }
            )
            if(!response.ok){
                const errorData=await response.json()
                return rejectWithValue(errorData.message)
            }
            // const data=await response.json()

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState: {
    //     user:localStorage.getItem('user')!==undefined?JSON.parse(localStorage.getItem('user')):null,
    // loading:false,
    // error:null
        user: localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
        loginStatus: 'none',
        logoutStatus:'none',
        loginError: null,
        logoutError:null,
        registerStatus:'none',
        registerError:null
    },
    reducers: {

        resetLoginStatus(state) {
            state.loginStatus = '';
            state.loginError = null;
        },
        resetLogoutStatus(state){
            state.logoutStatus='';
            state.logoutError=null;
        },
        resetRegisterStatus(state){
            state.registerStatus='';
            state.registerError=null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loginStatus = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loginStatus = 'succeed';
                state.user = action.payload.data;
                localStorage.setItem('user',JSON.stringify(action.payload.data))
            })
            .addCase(login.rejected, (state, action) => {
                state.loginStatus = 'failed';
                state.loginError = action.payload.message || action.error.message;
            })
            .addCase(register.pending, (state) => {
                state.registerStatus = 'loading';
            })
            .addCase(register.fulfilled, (state) => {
                console.log(1)
                state.registerStatus = 'succeed';
            })
            .addCase(register.rejected, (state, action) => {
                state.registerStatus = 'failed';
                state.registerError = action.payload.message || action.error.message;
            })
            .addCase(logout.pending,(state)=>{
                state.logoutStatus='loading'
            })
            .addCase(logout.fulfilled,(state)=>{
                state.logoutStatus='succeed';
                state.user=null;
                localStorage.setItem('user','')
            })
            .addCase(logout.rejected,(state,action)=>{
                state.logoutStatus='failed';
                state.logoutError=action.payload.message || action.error.message;
            })
    }
});

export const {  resetLoginStatus,resetLogoutStatus,resetRegisterStatus } = userSlice.actions;
export default userSlice.reducer;