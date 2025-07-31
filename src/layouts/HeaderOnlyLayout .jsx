import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const HeaderOnlyLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default HeaderOnlyLayout;
