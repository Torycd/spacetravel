// import desktop from "../assets/background-home-desktop.jpg";
// import tablet from "../assets/background-home-tablet.jpg";
// import phone from "../assets/background-home-mobile.jpg";
import  PropTypes from "prop-types";

const ResponsiveBackground = ({ children }) => {
  return (
    <>
      {/* desktop view */}
      <div
        className="hidden lg:flex flex-col bg-cover h-dvh"
        style={{
          backgroundImage: `url('src/assets/background-home-desktop.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
      {/* tablet view */}
      <div
        className="hidden md:flex flex-col lg:hidden bg-cover h-dvh -mt-32"
        style={{
          backgroundImage: `url('src/assets/background-home-tablet.jpg')`,
        }}
      >
        {children}
      </div>
      {/* mobile view */}
      <div
        className="md:hidden flex flex-col bg-cover max-w-full h-dvh -mt-32"
        style={{
          backgroundImage: `url('src/assets/background-home-mobile.jpg')`,
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
  children: PropTypes.node.isRequired
}

export default ResponsiveBackground;
