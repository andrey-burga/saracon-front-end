// src/services/notificationService.js
import axios from "axios";
import URL from "./urls"; // Asegúrate de que esta ruta sea correcta

export const reportNotification = async (data) => {
  try {
    const response = await axios.post(`${URL}notification`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al enviar la notificación:", error);
    throw error;
  }
};
