import { Outlet } from "react-router-dom";

const PlainLayout = () => {
  return (
    <div className="plain-wrapper">
      <Outlet />
    </div>
  );
};

export default PlainLayout;
