import { Outlet } from "react-router-dom";
import SpaceNavigation from "../components/SpaceNavigation";
import ResponsiveBackground from "../components/ResponsiveBackground";

const RootLayOut = () => {
  return (
    <ResponsiveBackground>
      <SpaceNavigation />
      <Outlet />
    </ResponsiveBackground>
  );
};

export default RootLayOut;
