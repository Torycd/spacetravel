import { NavLink } from "react-router-dom";

const SpaceNavigation = () => {
  return (
    <div className="flex text-white justify-between mt-2 m-2 sm:mt-10 z-40">
      <div className="sm:ml-10 my-3">
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
      <hr className="bg-white text-bold hidden sm:block" />
      <div className="my-auto sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>

      <div className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-transparent bg-opacity-20 hidden sm:block">
        <ul className="flex justify-around gap-10 ml-40  mr-60 h-full font-medium">
          <li className="h-full flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "h-full flex items-center gap-2 border-b-4 border-white"
                  : "h-full flex items-center gap-2 border-none"
              }
              end
            >
              <span>01</span>
              <span className="text-slate-200">Home</span>
            </NavLink>
          </li>

          <li className="h-full flex items-center">
            <NavLink
              to="/Destination"
              className={({ isActive }) =>
                isActive
                  ? "h-full flex items-center gap-2  border-b-4 border-white"
                  : "h-full flex items-center gap-2 border-none"
              }
            >
              <span>02</span>
              <span className="text-slate-200">Destination</span>
            </NavLink>
          </li>
          <li className="h-full flex items-center">
            <NavLink
              to="/Crew"
              className={({ isActive }) =>
                isActive
                  ? "h-full flex items-center gap-2 border-b-4 border-white"
                  : "h-full flex items-center gap-2 border-none"
              }
            >
              <span>03</span>
              <span className="text-slate-200">Crew</span>
            </NavLink>
          </li>
          <li className="h-full flex items-center">
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
    </div>
  );
};

export default SpaceNavigation;
