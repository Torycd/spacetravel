const ResponsiveBackground = ({ children }) => {
  return (
    <>
      {/* desktop view */}
      <div
        className="hidden lg:block bg-cover h-screen"
        style={{
          backgroundImage: "url('/src/assets/background-home-desktop.jpg')",
        }}
      >
        {children}
      </div>
      {/* tablet view */}
      <div
        className="hidden md:block lg:hidden bg-cover h-screen"
        style={{
          backgroundImage: "url('/src/assets/background-home-tablet.jpg')",
        }}
      >
        {children}
      </div>
      {/* mobile view */}
      <div
        className="md:hidden bg-cover h-screen"
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
