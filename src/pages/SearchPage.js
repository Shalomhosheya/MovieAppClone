import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
 

const SearchPage = () => {
  const loc = useLocation()
  const[data,setData] = useState([])
  const  [page,setPage]= useState(1)
  console.log(loc)

  const fetchData = async () => {

    try {
      const response = await axios.get(`/search/collection`, {
        params: {
          query:loc?.search?.slice(3),
          page: page,
        },
      });
      setData((prevData) => [...prevData, ...response.data.results]);
      
    } catch (error) {
      console.log('error', error);
    }
  };
  console.log("location", loc.search.slice(3))

  useEffect(() => {

    setData([])
    setPage(1)
    fetchData()
  }, [loc?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prevPageNo) => prevPageNo + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);
  
  return (
    <div className='py-16'>
      <div className='container mx-auto px-4 py-8'>
        <h2 className='text-2xl font-bold mb-4'>Search Results</h2>
        <div className="grid grid-cols-[repeat(auto-fit,260px)] gap-8 justify-center lg:justify-start">
          {data.map((searchData, index) => (
            <Card
              data={searchData}
              key={searchData.id + 'SearchDataSection'}
              media_type={searchData.media_type}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
