import { createSlice } from "@reduxjs/toolkit"
import axios from '../../utils/axios';
const slice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isAuthenticated: false,
        isError: false,
        errorMessage: null,
        user: null,
    },
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        stopLoading(state) {
            state.isLoading = false;
        },
        login(state, action) {
            state.token = action.payload;
            state.isAuthenticated = true;
            state.isError = false;
            state.errorMessage = null;
        },
        setError(state, action) {
            state.isError = true;
            state.errorMessage = action.payload;
        },
        stopError(state) { 
            state.isError = false;
            state.errorMessage = null;
        },
    }
});


export const { stopError } = slice.actions;

export default slice.reducer;

export const login = (email, password) => async (dispatch) => {
    dispatch(slice.actions.startLoading());
    axios.post('/api/login', { email, password})
        .then((response) => {
            dispatch(slice.actions.login(response.data.token))
            userId = response.data.id
        })
        .catch((error)=> {
            console.error(error?.response?.data?.error);
            dispatch(slice.actions.setError(error?.response?.data?.error))
        })
        .finally(()=>{
            dispatch(slice.actions.stopLoading());
        })
}

export const register = (email, password) => async (dispatch) => {
    dispatch(slice.actions.startLoading());
    axios.post('/api/register', { email, password })
        .then((response) => {
            dispatch(slice.actions.login(response.data.token))
        })
        .catch((error)=> {
            dispatch(slice.actions.setError(error?.response?.data?.error))
        })
        .finally(()=>{
            dispatch(slice.actions.stopLoading());
        })
}

export const logout = () => (dispatch) => {
    dispatch({type: 'USER_LOGOUT'})
}