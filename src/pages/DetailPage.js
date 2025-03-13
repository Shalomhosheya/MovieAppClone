import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../hooks/userFetchDetails';
import moment from 'moment'; // Ensure moment.js is imported
import Divider from '../components/Divider';

const DetailsPage = () => {
  const params = useParams();
  const { data } = useFetchDetails(`/${params?.mediaType}/${params?.id}`);

  console.log("Fetched Data:", data);

  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  const handlePlayVideo = (videoId) => {
    setPlayVideoId(videoId);
    setPlayVideo(true);
  };

  // TMDb image base URL
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const backdropImage = data?.backdrop_path
    ? `${IMAGE_BASE_URL}${data.backdrop_path}`
    : "https://via.placeholder.com/1280x720?text=No+Image+Available"; // Fallback image

  const posterImage = data?.poster_path
    ? `${IMAGE_BASE_URL}${data.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image+Available"; // Fallback image

  // 🛠 Fixing duration calculation
  const runtime = data?.runtime || 0; // Default to 0 if runtime is missing
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div>
      {/* Backdrop Image */}
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img src={backdropImage} className="h-full w-full object-cover" alt="Movie Poster" />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      {/* Movie Details Section */}
      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/* Poster & Play Button */}
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img src={posterImage} className="h-80 w-60 object-cover rounded" alt="Movie Poster" />
          <button
            onClick={() => handlePlayVideo(data)}
            className="mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all"
          >
            Play Now
          </button>
        </div>

        {/* Movie Info */}
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">{data?.title || data?.name}</h2>
          <p className="text-neutral-400">{data?.tagline}</p>

          <Divider />

          <div className="flex items-center gap-3">
            <p>Rating: {Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View: {Number(data?.vote_count)}</p>
            <span>|</span>
            <p>Duration: {hours}h {minutes}m</p> {/* ✅ Fixed this */}
          </div>

          <Divider />

          {/* Overview Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
            <p>{data?.overview}</p>

            <Divider />

            <div className="flex items-center gap-3 my-3 text-center">
              <p>Status: {data?.status}</p>
              <span>|</span>
              <p>Release Date: {moment(data?.release_date).format("MMMM Do YYYY")}</p> {/* ✅ Fixed this */}
              <span>|</span>
              <p>Revenue: ${Number(data?.revenue).toLocaleString()}</p> {/* ✅ Added formatting */}
            </div>

            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
