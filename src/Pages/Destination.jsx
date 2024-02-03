import { NavLink, Outlet, useLocation } from "react-router-dom";
import moon from "../assets/image-moon.png";
// import titan from "../assets/image-titan.png";
// import mars from "../assets/image-mars.png"
// import europa from "../assets/image-europa.png"

const Destination = () => {
  const location = useLocation()

  let img = moon;
  if (location.pathname == "/" ){
    // work on the decision
    return;
  } else if ( location.pathname == "//" ){
    return;
  }


  return (
    <div className="text-white grid sm:grid-cols-2">
      <div>
        <img className="ml-10" src={img} alt="#" />
      </div>

      <div>
        <div>
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
            <li className="h-full flex items-center pb-2">
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
  );
};

export default Destination;
