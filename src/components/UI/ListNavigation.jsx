import { NavLink } from "react-router-dom";

const ListNavigation = ({ handleClick }) => {
  return (
    <div className="m-2">
      <div className="flex justify-end my-4" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </div>
      <ul className="text-white flex flex-col justify-between gap-10 text-2xl">
        <li onClick={handleClick}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "h-full flex items-center pb-4 gap-2 border-b-4 border-white"
                : "h-full flex items-center pb-4 gap-2 border-none"
            }
            end
          >
            <span>01</span>
            <span className="text-slate-200">Home</span>
          </NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink
            to="/Destination"
            className={({ isActive }) =>
              isActive
                ? "h-full flex items-center pb-4 gap-2  border-b-4 border-white"
                : "h-full flex items-center pb-4 gap-2 border-none"
            }
          >
            {" "}
            <span>02</span>
            <span className="text-slate-200">Destination</span>
          </NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink
            to="/Crew"
            className={({ isActive }) =>
              isActive
                ? "h-full flex items-center pb-4 gap-2 border-b-4 border-white"
                : "h-full flex items-center pb-4 gap-2 border-none"
            }
          >
            <span>03</span>
            <span className="text-slate-200">Crew</span>
          </NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink
            to="/Technology"
            className={({ isActive }) =>
              isActive
                ? "h-full flex items-center gap-2  border-b-4 border-white"
                : "h-full flex items-center gap-2 border-none"
            }
          >
            <span>04</span>
            <span className="text-slate-200">Technology</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ListNavigation;
