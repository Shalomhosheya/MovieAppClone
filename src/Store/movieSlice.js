import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageURL: "",       // ✅ Added missing imageURL
  nowPlayingData: [], // ✅ Added nowPlayingData
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
    },
    setNowPlayingData: (state, action) => { // ✅ Added setNowPlayingData
      state.nowPlayingData = action.payload;
    },
  },
});

// ✅ Export all actions together
export const { setBannerData, setImageURL, setNowPlayingData } = movieSlice.actions;

export default movieSlice.reducer;
