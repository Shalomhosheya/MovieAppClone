import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const ExplorerPage = () => {
  const { mediaType } = useParams(); // Use mediaType instead of explore
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  console.log('Media Type:', mediaType);

  const fetchData = async () => {
    if (!mediaType) {
      console.error('Media type is undefined');
      return;
    }

    try {
      const response = await axios.get(`/discover/${mediaType}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prevData) => [...prevData, ...response.data.results]);
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prevPageNo) => prevPageNo + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [mediaType]); // Add mediaType as a dependency

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Popular {mediaType} show
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,260px)] gap-8 justify-center lg:justify-start">
          {data.map((exploreData, index) => (
            <Card
              data={exploreData}
              key={exploreData.id + 'exploreSection'}
              media_type={mediaType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorerPage;