import { NavLink } from "react-router-dom";

const SpaceNavigation = () => {
  return (
    <div className="flex text-white justify-between mt-10">
      <div className="ml-10 my-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <hr className="bg-white text-bold" />

      <div className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-transparent bg-opacity-20">
        <ul className="flex justify-around gap-10 ml-40  mr-60 h-full">
          <li className="h-full flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "h-full flex items-center border-b-8 border-white"
                  : "h-full flex items-center border-none"
              }
              end
            >
              <span>01</span> Home
            </NavLink>
          </li>

          <li className="h-full flex items-center">
            <NavLink
              to="/Destination"
              className={({ isActive }) => (
                isActive
                  ? "h-full flex items-center border-b-8 border-white"
                  : "h-full flex items-center border-none"
              )}
            >
              <span>02</span> Destination
            </NavLink>
          </li>
          <li className="h-full flex items-center">
            <NavLink
              to="/Crew"
              className={({ isActive }) => (
                isActive
                  ? "h-full flex items-center border-b-8 border-white"
                  : "h-full flex items-center border-none"
              )}
            >
              <span>03</span> Crew
            </NavLink>
          </li>
          <li className="h-full flex items-center">
            <NavLink
              to="/Technology"
              className={({ isActive }) => (
                isActive
                  ? "h-full flex items-center border-b-8 border-white"
                  : "h-full flex items-center border-none"
              )}
            >
              <span>04</span> Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SpaceNavigation;
