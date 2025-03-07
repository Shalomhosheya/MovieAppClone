import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = ({ data,trending,index }) => {
  const imageURL = useSelector(state => state.movieData.imageURL);

  return (
    <Link to={"/"+data.media_type+"/"+data.id} className='w-full h-full min-w-[250px] max-w-[250px] h-80  block overflow-hidden rounded relative'>
      <img src={imageURL + data?.poster_path} alt={data.title} />
     <div className='absolute top-0'>
     {
        trending && (
          <div className='py-2 px-4 backdrop-blur-3xl text-white bg-black/60 rounded-full text-sm overflow-hidden'>
            # {index} Trending
          </div>
        )
     }
     </div>
     <div className='absolute bottom-0 py-2 px-4 backdrop-blur-3xl w-full  bg-black/70 text-white  p-2 overflow-hidden'>
       <h2 className='text-ellipsis text-lg'>{data.title || data.name}</h2>
       <div className='text-sm text-neutral-400 flex justify-between items-center'>
        <p>{moment(data.release_date).format('MMMM Do YYYY')}</p>
        <p className='bg-black px-1 rounded-full text-xs text-white'>Rating: {Number(data.vote_average).toFixed(1)}</p>
       </div>
     </div>
    </Link>
  );
};

export default Card;
