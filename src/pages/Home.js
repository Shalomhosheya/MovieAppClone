import React, { useEffect } from "react";
import BannerHome from "../components/BannerHome";
import HorizonScrollCard from "../components/HorizonScrollCard.js";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setNowPlayingData } from "../Store/movieSlice.js"; // Import action
import useFetch from "../hooks/useFetch.js"; // Import custom hook


export const Home = () => {
  const trending = useSelector((state) => state.movieData.bannerData) || [];
  const {data: nowPlayingData} = useFetch("/movie/now_playing"); 
  const {data: topRateddata} = useFetch("/movie/top_rated"); 


  return (
    <div>
      <BannerHome />
      <HorizonScrollCard data={trending} heading="Trending" />
      <HorizonScrollCard data={nowPlayingData} heading="Now Playing" /> 
     <HorizonScrollCard data={topRateddata} heading="Top Rated Movies" />
    </div>
  );
};

export default Home;
