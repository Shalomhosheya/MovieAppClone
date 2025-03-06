import React from 'react';
import BannerHome from '../components/BannerHome';
import { useSelector } from 'react-redux';
import Card from '../components/Card.js';

export const Home = () => {
  const trending = useSelector(state => state.movieData.bannerData) ; // Ensure it's always an array

  return (
    <div>
      <BannerHome />
      <div className='container mx-auto px-4 py-8'>
        <h2 className='text-2xl font-bold mb-4'>Trending Movies</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m:gap-6 lg:gap-8'>
          
        {
          trending.map((data,index) => (
          
            <Card key={data.id} data={data} index={index+1}trending={true}/> 
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Home;
