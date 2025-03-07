import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorerPage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]); // ✅ Stores fetched data
  const [totalPages, setTotalPages] = useState(0);

  console.log("Params:", params);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: { page: pageNo },
      });

      // ✅ Correctly update data array
      setData((prev) => [...prev, ...response.data.results]); 
      setTotalPages(response.data.total_pages);

      console.log("Fetched data:", response.data.results);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 100 && pageNo < totalPages) {
      setPageNo((prevPageNo) => prevPageNo + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <h3 className="capitalize text-2xl font-bold">
          Popular {params.explore}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.length > 0 ? (
            data.map((item) => (
              <Card key={item.id} data={item} /> // ✅ Fixed duplicate key issue
            ))
          ) : (
            <p className="text-center col-span-full">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorerPage;
