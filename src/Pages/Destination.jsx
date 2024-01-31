import { NavLink, Outlet } from "react-router-dom";
import moon from "../assets/image-moon.png";

const Destination = () => {
  return (
    <div className="text-white grid grid-cols-2">
      <div>
        <img src={moon} alt="#" />
      </div>

      <div>
        <div>
          <ul>
            <li>
              <NavLink to="/Destination/">MOON</NavLink>
            </li>
            <li>
              <NavLink to="/Destination/Mars">MARS</NavLink>
            </li>
            <li>
              <NavLink to="/Destination/Europa">EUROPA</NavLink>
            </li>
            <li>
              <NavLink to="/Destination/Titan">TITAN</NavLink>
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
