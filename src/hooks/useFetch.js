import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayingData } from "../Store/movieSlice.js"; // ✅ Ensure it's imported
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]); // ✅ Store data locally
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // ✅ Ensure API key exists
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      if (!apiKey) {
        console.error("❌ Missing TMDB API Key. Check .env file.");
        return;
      }

      const response = await axios.get(url, {
        params: { api_key: apiKey }, 
      });

      setLoading(false);

      if (response.data && response.data.results) {
        setData(response.data.results); // ✅ Update local state
        dispatch(setNowPlayingData(response.data.results)); // ✅ Store in Redux
      } else {
        console.error("❌ Invalid API response:", response.data);
      }
    } catch (error) {
      setLoading(false);
      console.error("❌ Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]); // ✅ Fetch whenever `url` changes

  return { data, loading };
};

export default useFetch;
