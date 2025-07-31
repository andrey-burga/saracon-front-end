import { useEffect, useState } from "react";
import axios from "axios";
import URL from "./urls";
const useReportes = () => {
  const [Alertas, setAlertas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${URL}report`) // This is the recommended way!

      .then((res) => {
        // Ordenar por fechaNotificacion descendente
        const sorted = res.data.sort(
          (a, b) => new Date(b.fechaReporte) - new Date(a.fechaReporte)
        );
        setAlertas(sorted);
      })
      .catch((err) => {
        console.error("Error al cargar notificaciones", err);
      })
      .finally(() => setLoading(false));
  }, []);
   

  return { Alertas, loading };
};

export default useReportes;
