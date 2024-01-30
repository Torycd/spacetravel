import desktop from '../assets/background-home-desktop.jpg'
import tablet from '../assets/background-home-tablet.jpg';
import phone from "../assets/background-home-mobile.jpg"

const ResponsiveBackground = ({ children }) => {
  return (
    <>
      {/* desktop view */}
      <div
        className="hidden lg:flex flex-col bg-cover h-dvh "
        style={{
          backgroundImage: desktop,
        }}
      >
        {children}
      </div>
      {/* tablet view */} 
      <div
        className="hidden md:flex flex-col lg:hidden bg-cover h-dvh"
        style={{
          backgroundImage: tablet,
        }}
      >
        {children}
      </div>
      {/* mobile view */}
      <div
        className="md:hidden flex flex-col bg-cover max-w-full h-dvh"
        style={{
          backgroundImage: phone,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default ResponsiveBackground;
