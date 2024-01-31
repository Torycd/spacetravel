import { Outlet } from "react-router-dom";
import SpaceNavigation from "../components/SpaceNavigation";
// import ResponsiveBackground from "../components/ResponsiveBackground";

const RootLayOut = () => {
  return (
    // This Overall Background makes the image at the background diffrent on different device
    <>
      <SpaceNavigation />
      <Outlet />
    </>
  );
};

export default RootLayOut;
