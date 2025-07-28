import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./pages/Body.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/index.css";
import Register from "./pages/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AnimatePresence>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <div className="app-wrapper">
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
