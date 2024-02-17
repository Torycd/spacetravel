import desktop from "../assets/background-home-desktop.jpg";
import tablet from "../assets/background-home-tablet.jpg";
import phone from "../assets/background-home-mobile.jpg";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const ResponsiveBackground = ({ children }) => {
  const location = useLocation();

  let backgroundImage = `url(${desktop})`;
  let backgroundImageTablet = `url(${tablet})`;
  let backgroundImageMobile = `url(${phone})`;

  if (location.pathname == "/") {
    backgroundImage = `url(/src/assets/background-home-desktop.jpg)`;
    backgroundImageTablet = `url(/src/assets/background-home-tablet.jpg)`;
    backgroundImageMobile = `url(/src/assets/background-home-mobile.jpg)`;
  } else if (
    location.pathname == "/Destination" ||
    location.pathname == "/Destination/Mars" ||
    location.pathname == "/Destination/Moon" ||
    location.pathname == "/Destination/Titan" ||
    location.pathname == "/Destination/Europa"
  ) {
    backgroundImage = `url(/src/assets/background-destination-desktop.jpg)`;
    backgroundImageTablet = `url(/src/assets/background-destination-tablet.jpg)`;
    backgroundImageMobile = `url(/src/assets/background-destination-mobile.jpg)`;
  } else if (location.pathname == "/Crew") {
    backgroundImage = `url(/src/assets/background-crew-desktop.jpg)`;
    backgroundImageTablet = `url(/src/assets/background-crew-tablet.jpg)`;
    backgroundImageMobile = `url(/src/assets/background-crew-mobile.jpg)`;
  } else if (
    location.pathname == "/Technology" ||
    location.pathname == "/Technology/Capsule" ||
    location.pathname == "/Technology/Vehicle"
  ) {
    backgroundImage = `url(/src/assets/background-technology-desktop.jpg)`;
    backgroundImageTablet = `url(/src/assets/background-technology-tablet.jpg)`;
    backgroundImageMobile = `url(/src/assets/background-technology-mobile.jpg)`;
  }

  // console.log(location.pathname);

  return (
    <>
      {/* desktop view */}
      <div
        className="hidden lg:flex flex-col h-dvh"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
      {/* tablet view */}
      <div
        className="hidden md:flex flex-col lg:hidden h-dvh "
        style={{
          backgroundImage: backgroundImageTablet,
        }}
      >
        {children}
      </div>
      {/* mobile view */}
      <div
        className="md:hidden flex flex-col bg-cover h-dvh"
        style={{
          backgroundImage: backgroundImageMobile,
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
