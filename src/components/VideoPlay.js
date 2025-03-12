import React from 'react'
import { IoClose } from "react-icons/io5";
import useFetchDetails from '../hooks/userFetchDetails';

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData, error } = useFetchDetails(`/${media_type}/${data?.id}/videos`);

  const videoKey = videoData?.results?.[0]?.key;

  return (
    <section className='fixed bg-black bg-opacity-70 top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center'> 
      <div className='relative bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded-lg overflow-hidden'>

        {/* Close Button */}
        <button onClick={close} className='absolute top-3 right-3 text-white text-4xl hover:text-red-500 transition-all'>
          <IoClose />
        </button>

        {/* Video Display */}
        {videoKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            className="w-full h-full"
            allowFullScreen
            title="video player"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            {error ? "Failed to load video" : "No video available"}
          </div>
        )}

      </div>
    </section>
  );
}

export default VideoPlay;
