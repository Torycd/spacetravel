import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Technology = () => {
  const location = useLocation();

  let name = "Space capsule";
  let statement =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmospherewithout wings. Our capsule is where youll spend your time duringthe flight. It includes a space gym, cinema, and plenty of otheractivities to keep you entertained.";

  if (location.pathname == "/Technology") {
    name = "Spaceport";
    statement =
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earths rotation for launch.";
  } else if (location.pathname == "/Technology/Capsule") {
    name = "Space capsule";
    statement =
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmospherewithout wings. Our capsule is where youll spend your time duringthe flight. It includes a space gym, cinema, and plenty of otheractivities to keep you entertained.";
  } else if (location.pathname == "/Technology/Vehicle") {
    name = "Launch vehicle";
    statement =
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  }
  return (
    <div className="text-white">
      <div className="my-4 ml-36">
        <h2 className="font-Inte text-2xl opacity-90">Space Launch 101</h2>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* rounded item */}
          <div className="text-black font-Inte mx-auto lg:ml-32 mt-4 lg:my-auto flex lg:flex-col gap-5 font-bold">
            <NavLink
              to="/Technology"
              className={({ isActive }) =>
                isActive
                  ? "bg-white w-12 h-12 md:w-24 md:h-24 rounded-full flex"
                  : "border-2 w-12 h-12 md:w-24 md:h-24 rounded-full flex border-slate-200 bg-slate-800 text-white"
              }
              end
            >
              <span className="self-center mx-auto text-2xl md:text-4xl">
                1
              </span>
            </NavLink>
            <NavLink
              to="/Technology/Capsule"
              className={({ isActive }) =>
                isActive
                  ? "bg-white w-12 h-12 md:w-24 md:h-24 rounded-full flex"
                  : "border-2 w-12 h-12 md:w-24 md:h-24 rounded-full flex border-slate-200 bg-slate-800 text-white"
              }
            >
              <span className="self-center mx-auto text-2xl md:text-4xl">
                2
              </span>
            </NavLink>
            <NavLink
              to="/Technology/Vehicle"
              className={({ isActive }) =>
                isActive
                  ? "bg-white w-12 h-12 md:w-24 md:h-24 rounded-full flex"
                  : "border-2 w-12 h-12 md:w-24 md:h-24 rounded-full flex border-slate-200 bg-slate-800 text-white"
              }
            >
              <span className="self-center mx-auto text-2xl md:text-4xl">
                3
              </span>
            </NavLink>
          </div>
          {/* information */}
          <div className="my-auto flex flex-col gap-2 lg:gap-8 ">
            <h1 className="text-xl md:text-2xl font-bold font-Inte opacity-70">
              The terminology...
            </h1>
            <h2 className="text-4xl md:text-6xl font-semibold font-Inte">{name}</h2>
            <p className="text-center lg:right opacity-70">{statement}</p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Technology;
