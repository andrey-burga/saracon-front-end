import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const FooterOnlyLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

export default FooterOnlyLayout;
