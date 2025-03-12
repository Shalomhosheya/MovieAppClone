// src/hooks/useFetchDetails.js
import { useState, useEffect } from 'react';

const useFetchDetails = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetchDetails;
