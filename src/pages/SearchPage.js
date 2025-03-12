import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { useNavigate } from'react-router-dom';
 

const SearchPage = () => {
  const loc = useLocation()
  const[data,setData] = useState([])
  const  [page,setPage]= useState(1)
  const navigate = useNavigate()
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
      <div className='lg:hidden my-2 mx-1 sticky top-16 bg-black bg-opacity-75 z-40'>
        <input type='text' placeholder='Search' onChange={(e) => navigate(`/search?q=${e.target.value}`)} className='px-4 py-1 text-lg w-full bg-white rounded-full focus:outline-none text-neutral-900' />
      </div>
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
