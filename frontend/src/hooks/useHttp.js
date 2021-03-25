import { useState, useEffect } from "react";
import axios from "../axios-orders";

export const useHttp = (query) => {
  const [status, setStatus] = useState("Idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      setStatus("Fetching...");
      const response = await axios.post("/api", query);
      setData(response.data.data);
      setStatus("Fetched");
    };

    fetchData();
  }, [query]);

  return [status, data];
};
