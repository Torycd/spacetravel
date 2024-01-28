const ResponsiveBackground = ({ children }) => {
  return (
    <>
      {/* desktop view */}
      <div
        className="hidden lg:flex flex-col bg-cover h-dvh w-dvh "
        style={{
          backgroundImage: "url('/src/assets/background-home-desktop.jpg')",
        }}
      >
        {children}
      </div>
      {/* tablet view */} 
      <div
        className="hidden md:flex flex-col lg:hidden bg-cover h-dvh"
        style={{
          backgroundImage: "url('/src/assets/background-home-tablet.jpg')",
        }}
      >
        {children}
      </div>
      {/* mobile view */}
      <div
        className="md:hidden flex flex-col bg-cover h-dvh"
        style={{
          backgroundImage: "url('/src/assets/background-home-mobile.jpg')",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default ResponsiveBackground;
