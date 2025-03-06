import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   bannerData : []
};

export const movieSlice = createSlice({
    
     name: "movies",
   initialState,
   reducers: {
     setBannerData: (state, action) => {
       state.bannerData = action.payload;
     },
     setImageURL: (state, action) => {
       state.imageURL = action.payload;
     }
   },
 
})

export const { setBannerData } = movieSlice.actions;
export const { setImageURL } = movieSlice.actions;


export default movieSlice.reducer;
