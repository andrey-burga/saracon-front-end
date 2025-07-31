
import URL from "../hooks/urls";

export const loginUser = async (email, password) => {
  const response = await fetch(`${URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.status === 401) {
    // Devuelve el mensaje del backend
    return { message: "Credenciales inválidas" };
  }

  if (!response.ok) {
    throw new Error("Error en el servidor");
  }

  return data; // { message: "Login exitoso" }
};
