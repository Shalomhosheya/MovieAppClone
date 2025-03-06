import React from 'react'
import { useSelector } from 'react-redux';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerHome = () => {
    const bannerData = useSelector(state => state.movieData.bannerData);
    const imageURL = useSelector(state => state.movieData.imageURL);
    console.log(bannerData);

    const handleNext= () => {
        console.log("next");
    }

    const handlePrev = () => {
        
    }
  return (
    <section className="w-full h-screen">
        <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {
            bannerData.map((data, index) => (
                <div className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group">
                    <div className="w-full h-full">
                    <img className="h-full w-full object-cover" src={imageURL + data.backdrop_path} />
                    
                   </div>
                   <div className="absolute top-0  w-full h-full bg-gradient-to-t from-neutral-900 to-transparent">
                    
                   </div>
                   
                   <div className="absolute top-0 left-0 w-full h-full  hidden  items-center justify-between px-4 group-hover:lg:flex" onClick={handleNext}>
                    <button className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 cursor-pointer">
                         <FaAngleLeft className="text-white text-3xl" />
                    </button>
                    <button className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 cursor-pointer" onClick={handlePrev}>
                         <FaAngleRight className="text-white text-3xl" />
                    </button>
                    </div>

                   <div className="container mx-1">
                    
                   <div className="absolute bottom-0 w-full px-4 pb-4">
                        <h1 className="font-bold text-2xl text-white drop-shadow-2xl">{data.title}</h1>
                        <p className="text-ellipsis line-clamp-2 text-white my-2">{data.overview}</p>
                        
                        <div className="flex items-center gap-4">
                            <p>
                                Rating: {Number(data.vote_average).toFixed(1)}+
                            </p>
                            <span>!</span>
                            <p>
                                View: {Number(data.popularity).toFixed(0)}
                            </p>
                            
                        </div>
                        <button className="bg-red-500 px-4 py-2 rounded-lg text-white mt-4 shadow-md transition-all duration-300 hover:bg-red-600 hover:scale-105 ">Play</button>
                    </div>
                    </div>
                </div>
                
            ))
        }
        </div>
    </section>
  )
}

export default BannerHome
