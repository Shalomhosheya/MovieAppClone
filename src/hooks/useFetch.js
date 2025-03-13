import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!endpoint) {
      setError("Invalid endpoint");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(endpoint);
      setData(response.data.results);
    } catch (error) {
      console.log('error', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;