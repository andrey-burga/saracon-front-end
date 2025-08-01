// src/hooks/useRegisterUser.js
import axios from "axios"; // Don't forget to import axios!
import URL from "./urls";

const useRegisterUser = async () => {
  const register = async (formData) => {
    try {
      const response = await axios.post(`${URL}entidad/register`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      return { success: true, data: response.data };
    } catch (error) {
      if (error.response) {
        console.error(
          "Error de registro (respuesta del servidor):",
          error.response.data
        );
        return {
          success: false,
          message: error.response.data.message || "Error en el registro",
        };
      } else if (error.request) {
        console.error(
          "Error de registro (sin respuesta del servidor):",
          error.request
        );
        return {
          success: false,
          message: "No se recibió respuesta del servidor. Intenta de nuevo.",
        };
      } else {
        console.error(
          "Error de registro (configuración de la solicitud):",
          error.message
        );
        return {
          success: false,
          message: error.message || "Ocurrió un error inesperado.",
        };
      }
    }
  };

  return { register };
};

export default useRegisterUser;
