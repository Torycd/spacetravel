import { NavLink, Outlet } from "react-router-dom";
import moon from "../assets/image-moon.png";

const Destination = () => {

  return (
    <div className="text-white grid sm:grid-cols-2">
      <div>
        <img className="ml-10" src={moon} alt="#" />
      </div>

      <div>
        <div>
          <ul className="flex gap-5 mt-5">
            <li className="h-full flex items-center">
              <NavLink
                to="/Destination"
                className={({ isActive }) =>
                  isActive
                    ? "h-full flex items-center gap-2 border-b-4 border-white"
                    : "h-full flex items-center gap-2 border-none"
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
                    ? "h-full flex items-center gap-2 border-b-4 border-white"
                    : "h-full flex items-center gap-2 border-none"
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
                    ? "h-full flex items-center gap-2 border-b-4 border-white"
                    : "h-full flex items-center gap-2 border-none"
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
                    ? "h-full flex items-center gap-2 border-b-4 border-white"
                    : "h-full flex items-center gap-2 border-none"
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
