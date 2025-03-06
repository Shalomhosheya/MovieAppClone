import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerHome = () => {
    const bannerData = useSelector(state => state.movieData.bannerData);
    const imageURL = useSelector(state => state.movieData.imageURL);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!bannerData || bannerData.length === 0) return null; // Prevent errors if data is empty

    const handleNext = () => {
        setCurrentImageIndex(prev => (prev + 1) % bannerData.length); // Loop to first slide
    };

    const handlePrev = () => {
        setCurrentImageIndex(prev => (prev - 1 + bannerData.length) % bannerData.length); // Loop to last slide
    };

    return (
        <section className="w-full h-screen relative">
            <div className="flex min-h-full max-h-[95vh] overflow-hidden">
                {bannerData.map((data, index) => (
                    <div
                        key={index}
                        className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-transform duration-500"
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        {/* Image */}
                        <img
                            className="h-full w-full object-cover"
                            src={imageURL + data.backdrop_path}
                            alt={data.title || data.name}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={handlePrev}
                                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 cursor-pointer"
                            >
                                <FaAngleLeft className="text-white text-3xl" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 cursor-pointer"
                            >
                                <FaAngleRight className="text-white text-3xl" />
                            </button>
                        </div>

                        {/* Text & Details */}
                        <div className="absolute bottom-0 w-full px-4 pb-6 text-white">
                            <h1 className="font-bold text-2xl drop-shadow-lg">{data.title || data.name}</h1>
                            <p className="text-ellipsis line-clamp-2 my-2">{data.overview}</p>
                            <div className="flex items-center gap-4">
                                <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                                <span>|</span>
                                <p>Views: {Number(data.popularity).toFixed(0)}</p>
                            </div>
                            <button className="bg-red-500 px-4 py-2 rounded-lg text-white mt-4 shadow-md transition-all duration-300 hover:bg-red-600 hover:scale-105">
                                Play
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BannerHome;
