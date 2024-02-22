import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ListNavigation = ({ handleClick }) => {
  return (
    <div>
      <div className="flex justify-end my-4 mx-4" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </div>
      <ul className="text-white flex flex-col justify-between gap-10 text-xl">
        <li onClick={handleClick}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "h-full flex justify-center gap-2 bg-slate-100 text-black p-4"
                : "h-full flex justify-center pb-4 gap-2 border-none"
            }
            end
          >
            <span>01</span>
            <span>Home</span>
          </NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink
            to="/Destination"
            className={({ isActive }) =>
              isActive
                ? "h-full flex justify-center gap-2 bg-slate-100 text-black p-4"
                : "h-full flex justify-center pb-4 gap-2 border-none"
            }
          >
            <span>02</span>
            <span>Destination</span>
          </NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink
            to="/Crew"
            className={({ isActive }) =>
              isActive
                ? "h-full flex justify-center gap-2 bg-slate-100 text-black p-4"
                : "h-full flex justify-center pb-4 gap-2 border-none"
            }
          >
            <span>03</span>
            <span>Crew</span>
          </NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink
            to="/Technology"
            className={({ isActive }) =>
              isActive
                ? "h-full flex justify-center gap-2 bg-slate-100 text-black p-4"
                : "h-full flex justify-center pb-4 gap-2 border-none"
            }
          >
            <span>04</span>
            <span>Technology</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
ListNavigation.propTypes = {
  handleClick: PropTypes.function
}
export default ListNavigation;
