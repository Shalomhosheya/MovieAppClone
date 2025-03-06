import React from 'react';
import { useSelector } from 'react-redux';

const Card = ({ data,trending,index }) => {
  const imageURL = useSelector(state => state.movieData.imageURL);

  return (
    <div className='w-full h-full max-w-[250px] h-80 overflow-hidden rounded relative'>
      <img src={imageURL + data?.poster_path} alt={data.title} />
     <div className='absolute top-0'>
     {
        trending && (
          <div >
            {index}Trending
          </div>
        )
     }
     </div>
    </div>
  );
};

export default Card;
