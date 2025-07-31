import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Report from "../pages/Reports.jsx";

import Body from "../pages/Body.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import PlainLayout from "../layouts/PlainLayout.jsx";
import HeaderOnlyLayout from "../layouts/HeaderOnlyLayout .jsx";
import Notifications from "../pages/Notifications.jsx";

import FooterOnlyLayout from "../layouts/FooterOnlyLayout.jsx";

import Register from "../pages/Register.jsx";
import PrivateRoute from "../components/PrivateRoute.jsx"; // 👈

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Layout con Header y Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Layout sin Header ni Footer */}
        <Route element={<PlainLayout />}></Route>

        <Route element={<HeaderOnlyLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ✅ Ruta protegida */}
        <Route
          element={
            <PrivateRoute>
              <HeaderOnlyLayout />
            </PrivateRoute>
          }
        >
          <Route path="/report" element={<Report />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
