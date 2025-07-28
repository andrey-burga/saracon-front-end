import { useState } from "react";
import { loginUser } from "../services/authService"; // lógica separada
import PageWrapper from "../components/PageWrapper";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);

      if (result.message === "Login exitoso") {
        login(username); // guarda en localStorage y actualiza el contexto
        alert("Inicio de sesión exitoso");
        navigate("/"); // Redirecciona a la página principal
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error del servidor o de conexión");
    }
  };

  return (
    <PageWrapper>
      <div className="login-container">
        <div className="login-card card">
          <div className="tittle-card text-center mb-4">
            <h2>Iniciar Sesión</h2>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Ingrese su usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
          </form>

          <div
            className="login-footer text-center"
            style={{ color: "#040404ff" }}
          >
            <p>
              ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
            </p>
            <p>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
