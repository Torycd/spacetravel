import { Outlet } from "react-router-dom";
import SpaceNavigation from "../components/SpaceNavigation";
// import ResponsiveBackground from "../components/ResponsiveBackground";


const RootLayOut = () => {

  const content = (
<>
      <SpaceNavigation />
      <Outlet />
    </>
  )
  return (
    // This Overall Background makes the image at the background diffrent on different device
    <>
      <div
        className="hidden lg:flex flex-col bg-cover h-dvh"
        style={{
          backgroundImage: `url('src/assets/background-home-desktop.jpg')`,
        }}
      >
        {content}
      </div>
      {/* tablet view */}
      <div
        className="hidden md:flex flex-col lg:hidden bg-cover h-dvh"
        style={{
          backgroundImage: `url('src/assets/background-home-tablet.jpg')`,
        }}
      >
        {content}
      </div>
      {/* mobile view */}
      <div
        className="md:hidden flex flex-col bg-cover max-w-full h-dvh"
        style={{
          backgroundImage: `url('src/assets/background-home-mobile.jpg')`,
        }}
      >
        {content}
      </div>
    </>
  );
};

export default RootLayOut;
