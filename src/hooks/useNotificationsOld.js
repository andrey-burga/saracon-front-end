import React, { useEffect, useState } from "react";
import axios from "axios"; // Don't forget to import axios!
import URL from "./urls";

const useNotificationsOld = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchNoticiasPasadas = async () => {
      try {
        const response = await axios.get(`${URL}notification/old`);

        setNoticias(response.data);
      } catch (err) {
        console.error("Error cargando noticias pasadas:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticiasPasadas();
  }, []);

  return { noticias, loading, error };
};

export default useNotificationsOld;
