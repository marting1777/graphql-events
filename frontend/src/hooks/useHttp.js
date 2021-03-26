import { useState, useEffect, useContext } from "react";
import axios from "../axios-orders";
import AuthContext from '../context/auth-context';

export const useHttp = (query) => {
  const [status, setStatus] = useState("Idle");
  const [data, setData] = useState([]);
  const contextAuth = useContext(AuthContext);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      setStatus("Fetching...");
      const response = await axios.post("/api", query, {
        headers: {
          "Authorization": "Bearer " + contextAuth.token,
        }
      });
      setData(response.data.data);
      setStatus("Fetched");
    };

    fetchData();
  }, [query, contextAuth.token]);

  return [status, data];
};
