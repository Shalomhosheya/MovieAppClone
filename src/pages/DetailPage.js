import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../hooks/userFetchDetails';
import moment from 'moment';
import Divider from '../components/Divider';
import VideoPlay from '../components/VideoPlay';
import HorizontalScollCard from '../components/HorizonScrollCard';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const DetailsPage = () => {
  const params = useParams();
  
  // Fetch movie details
  const { data } = useFetchDetails(`/${params?.mediaType}/${params?.id}`);
  // Fetch cast details
  const { data: castData } = useFetchDetails(`/${params?.mediaType}/${params?.id}/credits`);

  // https://api.themoviedb.org/3/movie/{movie_id}/recommendations take this as url and add to the horizontal scroll card
  //https://api.themoviedb.org/3/movie/{movie_id}/similar take this as url and add to the horizontal scroll card

  console.log("Movie Data:", data);
  console.log("Cast Data:", castData);

  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  const handlePlayVideo = (videoId) => {
    if (!videoId) {
      console.error("Invalid video ID");
      return;
    }
    setPlayVideoId(videoId);
    setPlayVideo(true);
  };
  

  // Backdrop Image
  const backdropImage = data?.backdrop_path
    ? `${IMAGE_BASE_URL}${data.backdrop_path}`
    : "https://via.placeholder.com/1280x720?text=No+Image+Available";

  // Poster Image
  const posterImage = data?.poster_path
    ? `${IMAGE_BASE_URL}${data.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image+Available";

  // Duration Calculation
  const runtime = data?.runtime || 0;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  const { data : similarData } = useFetchDetails(`/${params?.explore}/${params?.id}/similar`)//fix
  const { data : recommendationData } = useFetchDetails(`/${params?.explore}/${params?.id}/recommendations`)//fix this
  // Get Director and Writer
  const director = castData?.crew?.find(person => person.job === "Director")?.name || "Unknown";
  const writer = castData?.crew?.find(person => person.job === "Writer")?.name || "Unknown";

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
            <p>Duration: {hours}h {minutes}m</p>
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
              <p>Release Date: {moment(data?.release_date).format("MMMM Do YYYY")}</p>
              <span>|</span>
              <p>Revenue: ${Number(data?.revenue).toLocaleString()}</p>
            </div>

            <Divider />
          </div>

          {/* Director & Writer */}
          <div>
            <p><span className="text-white">Director:</span> {director}</p>
            <Divider />
            <p><span className="text-white">Writer:</span> {writer}</p>
          </div>

          <Divider />

          {/* Cast Section */}
          <h2 className="font-bold text-lg">Cast :</h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4">
            {castData?.cast?.filter(el => el?.profile_path)?.map((starCast, index) => (
              <div key={starCast.id}>
                <div>
                  <img
                    src={`${IMAGE_BASE_URL}${starCast?.profile_path}`}
                    className="w-24 h-24 object-cover rounded-full"
                    alt={starCast?.name}
                  />
                </div>
                <p className="font-bold text-center text-sm text-neutral-400">{starCast?.name}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div>
              <HorizontalScollCard data={similarData} heading={"Similar "+params?.mediaType} media_type={params?.mediaType}/>
              <HorizontalScollCard data={recommendationData} heading={"Recommendation "+params?.mediaType} media_type={params?.mediaType}/>
      </div>

          {
            playVideo && (
              <VideoPlay data={playVideoId} close={()=>setPlayVideo(false)} media_type={params?.mediaType}/>
            )
          }
    </div>
  );
};

export default DetailsPage;
