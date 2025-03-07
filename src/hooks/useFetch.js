import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayingData } from "../Store/movieSlice.js"; // ✅ Import Redux action
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]); // ✅ Store data locally
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        params: { api_key: process.env.REACT_APP_TMDB_API_KEY }, // ✅ Use environment variable
      });
      setLoading(false);
      setData(response.data.results); // ✅ Update local state
      dispatch(setNowPlayingData(response.data.results)); // ✅ Store in Redux
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // ✅ Use inline function to avoid missing dependencies
  }, [url]); // ✅ Add `url` as a dependency

  return { data, loading };
};

export default useFetch;
