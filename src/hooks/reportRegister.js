// src/services/reportService.js
import axios from "axios";
import URL from "./urls"; // Ajusta la ruta si es necesario

const enviarReporte = async (data) => {
  try {
    const response = await axios.post(`${URL}report`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al enviar el reporte:", error);
    throw error;
  }
};

export default enviarReporte;
