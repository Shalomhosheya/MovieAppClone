import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "YOUR_TMDB_API_KEY"; // 🔹 Replace with your actual API key

const useFetchDetails = (endpoint) => {
  const [data,setData] = useState()
  const [loading,setLoading] = useState(false)

  const fetchData = async()=>{
      try {
          setLoading(true)
          const response = await axios.get(endpoint)
          setLoading(false)
          setData(response.data)
      } catch (error) {
          console.log('error',error)
     }
  }

  useEffect(()=>{
      fetchData()
  },[endpoint])

  return { data , loading}
};

export default useFetchDetails;
