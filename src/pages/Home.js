import React from 'react';
import BannerHome from '../components/BannerHome';
import { useSelector } from 'react-redux';
import Card from '../components/Card.js';
import HorizonScrollCard from '../components/HorizonScrollCard.js';

export const Home = () => {
  const trending = useSelector(state => state.movieData.bannerData) ; // Ensure it's always an array


  return (
    <div>
      <BannerHome />
      <HorizonScrollCard data={trending} heading={"Trending"} />
     

    </div>
  );
};

export default Home;
