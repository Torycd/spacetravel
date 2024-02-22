import { NavLink, Outlet, useLocation } from "react-router-dom";
import moon from "../assets/image-moon.png";
import titan from "../assets/image-titan.png";
import mars from "../assets/image-mars.png";
import europa from "../assets/image-europa.png";

const Destination = () => {
  const location = useLocation();

  // This change the image based in the sub navigation
  let img = moon;
  if (location.pathname == "/Destination/") {
    img = moon;
  } else if (location.pathname == "/Destination/Mars") {
    img = mars;
  } else if (location.pathname == "/Destination/Europa") {
    img = europa;
  } else if (location.pathname == "/Destination/Titan") {
    img = titan;
  }

  return (
    <>
      <div className="flex justify-center lg:justify-normal lg:my-4 md:ml-36 text-white">
        <h2 className="font-Inte text-2xl opacity-90">
          01 Pick your destination
        </h2>
      </div>
      <div className="text-white gap-2 grid lg:grid-cols-2">
        <div className="flex flex-col items-center">
          <img className="w-40 h-40 md:w-60 md:h-60 lg:w-auto lg:h-auto" src={img} alt="#" />
        </div>

        <div>
          <div className="flex justify-center lg:justify-normal">
            <ul className="flex gap-5 mt-5">
              <li className="h-full flex items-center">
                <NavLink
                  to="/Destination"
                  className={({ isActive }) =>
                    isActive
                      ? "h-full flex items-center gap-2 border-b-4 border-white pb-2"
                      : "h-full flex items-center gap-2 border-none pb-2"
                  }
                  end
                >
                  MOON
                </NavLink>
              </li>
              <li className="h-full flex items-center">
                <NavLink
                  to="/Destination/Mars"
                  className={({ isActive }) =>
                    isActive
                      ? "h-full flex items-center gap-2 border-b-4 border-white pb-2"
                      : "h-full flex items-center gap-2 border-none pb-2"
                  }
                >
                  MARS
                </NavLink>
              </li>
              <li className="h-full flex items-center">
                <NavLink
                  to="/Destination/Europa"
                  className={({ isActive }) =>
                    isActive
                      ? "h-full flex items-center gap-2 border-b-4 border-white pb-2"
                      : "h-full flex items-center gap-2 border-none pb-2"
                  }
                >
                  EUROPA
                </NavLink>
              </li>
              <li className="h-full flex items-center">
                <NavLink
                  to="/Destination/Titan"
                  className={({ isActive }) =>
                    isActive
                      ? "h-full flex items-center gap-2 border-b-4 border-white pb-2"
                      : "h-full flex items-center gap-2 border-none pb-2"
                  }
                >
                  TITAN
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
