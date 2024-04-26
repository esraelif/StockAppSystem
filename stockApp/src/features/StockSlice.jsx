import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stock",

    initialState: {
        categories: [],
        brands: [],
        firms: [],
        products: [],
        purchases: [],
        sales: [],
        loading: false,
        error: false,
    },
    reducers: {
        fetchStart: state => {
            state.loading = true;
            state.error = false;
        },
        // firmsSuccess: (state, { payload }) => {
        //     state.loading = false;
        //     state.firms = payload;
        // },

        fetchFail: state => {
            state.loading = false;
            state.error = true;
        },
        // brandSuccess: (state, { payload }) => {
        //     state.loading = false;
        //     state.brands = payload;
        // },
        getSuccess: (state, { payload: { data, url } }) => {
            console.log(payload)
            state.loading = false;
            state[url] = data;
            // state.brands = payload;

        }
    },
});

export const {
    fetchStart,
    // firmsSuccess,
    fetchFail,
    // brandSuccess,
    getSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;