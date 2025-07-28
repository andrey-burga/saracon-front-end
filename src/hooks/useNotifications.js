import { useEffect, useState } from "react";
import axios from "axios";
import URL from "./urls";
const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
        .get(`${URL}notification`) // This is the recommended way!

      .then((res) => {
        // Ordenar por fechaNotificacion descendente
        const sorted = res.data.sort(
          (a, b) =>
            new Date(b.fechaNotificacion) - new Date(a.fechaNotificacion)
        );
        setNotifications(sorted);
      })
      .catch((err) => {
        console.error("Error al cargar notificaciones", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { notifications, loading };
};

export default useNotifications;
