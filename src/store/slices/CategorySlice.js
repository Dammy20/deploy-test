import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';

export const categoryFetch = createAsyncThunk('Category/categoryFetch', async () => {
    const response = await api.fetchCategory();
    return response;
});

const CategorySlice = createSlice({
    name: 'Category',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        // Define any specific actions related to Category (if needed)
    },
    extraReducers: (builder) => {
        builder
            .addCase(categoryFetch.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(categoryFetch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(categoryFetch.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { } = CategorySlice.actions;
export default CategorySlice.reducer;