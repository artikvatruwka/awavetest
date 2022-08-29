import { createSlice } from "@reduxjs/toolkit"
import axios from '../../utils/axios';
const slice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        totalItems: 0,
        totalPages: 0,
        error: null,
        users: [],
    },
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        stopLoading(state) {
            state.isLoading = false;
        },
        getUsers(state, action) {
            state.users = action.payload.data;
            state.totalItems = action.payload.total;
            state.totalPages= action.payload.total_pages;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        stopError(state) { 
            state.error = null;
        },
    }
});


export const { stopError } = slice.actions;

export default slice.reducer;

export const getUsers = (page, per_page) => async (dispatch) => {
    dispatch(slice.actions.startLoading());
    axios.get('/api/users', { params: {  page, per_page }})
        .then((response) => {
            dispatch(slice.actions.getUsers(response.data))
        })
        .catch((error)=> {
            console.error(error?.response?.data);
        })
        .finally(()=>{
            dispatch(slice.actions.stopLoading());
        })
}