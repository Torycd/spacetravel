import { NavLink, Outlet } from "react-router-dom";

const Destination = () => {
  return (
    <div className="text-white">
      <div></div>

      <div>
        <div>
          <ul>
            <li>
              <NavLink>MOON</NavLink>
            </li>
            <li>
              <NavLink>MARS</NavLink>
            </li>
            <li>
              <NavLink>EUROPA</NavLink>
            </li>
            <li>
              <NavLink>TITAN</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Destination;
