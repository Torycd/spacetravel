import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import desktopImage from "../assets/background-home-desktop.jpg";
import tabletImage from "../assets/background-home-tablet.jpg";
import mobileImage from "../assets/background-home-mobile.jpg";
import destinationDesktopImage from "../assets/background-destination-desktop.jpg";
import destinationTabletImage from "../assets/background-destination-tablet.jpg";
import destinationMobileImage from "../assets/background-destination-mobile.jpg";
import crewDesktopImage from "../assets/background-crew-desktop.jpg";
import crewTabletImage from "../assets/background-crew-tablet.jpg";
import crewMobileImage from "../assets/background-crew-mobile.jpg";
import technologyDesktopImage from "../assets/background-technology-desktop.jpg";
import technologyTabletImage from "../assets/background-technology-tablet.jpg";
import technologyMobileImage from "../assets/background-technology-mobile.jpg";

const ResponsiveBackground = ({ children }) => {
  const location = useLocation();

  let backgroundImage = desktopImage;
  let backgroundImageTablet = tabletImage;
  let backgroundImageMobile = mobileImage;

  if (location.pathname === "/") {
    backgroundImage = desktopImage;
    backgroundImageTablet = tabletImage;
    backgroundImageMobile = mobileImage;
  } else if (
    location.pathname === "/Destination" ||
    location.pathname === "/Destination/Mars" ||
    location.pathname === "/Destination/Moon" ||
    location.pathname === "/Destination/Titan" ||
    location.pathname === "/Destination/Europa"
  ) {
    backgroundImage = destinationDesktopImage;
    backgroundImageTablet = destinationTabletImage;
    backgroundImageMobile = destinationMobileImage;
  } else if (location.pathname === "/Crew") {
    backgroundImage = crewDesktopImage;
    backgroundImageTablet = crewTabletImage;
    backgroundImageMobile = crewMobileImage;
  } else if (
    location.pathname === "/Technology" ||
    location.pathname === "/Technology/Capsule" ||
    location.pathname === "/Technology/Vehicle"
  ) {
    backgroundImage = technologyDesktopImage;
    backgroundImageTablet = technologyTabletImage;
    backgroundImageMobile = technologyMobileImage;
  }

  return (
    <>
      {/* desktop view */}
      <div
        className="hidden lg:flex flex-col h-dvh fixed overflow-auto inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
      {/* tablet view */}
      <div
        className="hidden md:flex flex-col lg:hidden h-dvh fixed overflow-auto inset-0"
        style={{
          backgroundImage: `url(${backgroundImageTablet})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
      {/* mobile view */}
      <div
        className="md:hidden flex flex-col bg-cover bg-center fixed overflow-auto inset-0 h-dvh"
        style={{
          backgroundImage: `url(${backgroundImageMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
    </>
  );
};

ResponsiveBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponsiveBackground;
