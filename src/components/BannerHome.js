import React from 'react'
import { useSelector } from 'react-redux';

const BannerHome = () => {
    const bannerData = useSelector(state => state.movieData.bannerData);
    console.log(bannerData);
  return (
    <div>
        {
            bannerData.map((item, index) => (
                <div key={index} className="banner-image">
                    <img src={item.image} alt={item.title} />
                    <div className="banner-text">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default BannerHome
