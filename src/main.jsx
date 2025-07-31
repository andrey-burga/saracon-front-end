import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <div className="app-wrapper">
          <AnimatedRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
