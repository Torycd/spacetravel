import { NavLink, Outlet } from "react-router-dom";

const Technology = () => {
  return (
    <div className="text-white">
      <div className="my-4 ml-36">
        <h2 className="font-Inte text-2xl opacity-90">Space Launch 101</h2>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-10">
          {/* rounded item */}
          <div className="text-black font-Inte ml-32 my-auto flex flex-col gap-5 font-bold">
            <NavLink
              to="/Technology"
              className={({ isActive }) =>
                isActive
                  ? "bg-white w-24 h-24 rounded-full flex"
                  : "border-2 w-24 h-24 rounded-full flex border-slate-200 bg-slate-800 text-white"
              }
              end
            >
              <span className="self-center mx-auto text-4xl">1</span>
            </NavLink>
            <NavLink
              to="/Technology/Capsule"
              className={({ isActive }) =>
                isActive
                  ? "bg-white w-24 h-24 rounded-full flex"
                  : "border-2 w-24 h-24 rounded-full flex border-slate-200 bg-slate-800 text-white"
              }
            >
              <span className="self-center mx-auto text-4xl">2</span>
            </NavLink>
            <NavLink
              to="/Technology/Vehicle"
              className={({ isActive }) =>
                isActive
                  ? "bg-white w-24 h-24 rounded-full flex"
                  : "border-2 w-24 h-24 rounded-full flex border-slate-200 bg-slate-800 text-white"
              }
            >
              <span className="self-center mx-auto text-4xl">3</span>
            </NavLink>
          </div>
          {/* information */}
          <div className="my-auto flex flex-col gap-8 ">
            <h1 className="text-2xl font-bold font-Inte opacity-70">
              The terminology...
            </h1>
            <h2 className="text-6xl font-semibold font-Inte">Space capsule</h2>
            <p className="right opacity-70">
              A space capsule is an often-crewed spacecraft that uses a<br />
              blunt-body reentry capsule to reenter the Earths atmosphere
              <br />
              without wings. Our capsule is where youll spend your time during
              <br />
              the flight. It includes a space gym, cinema, and plenty of other
              <br />
              activities to keep you entertained.
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Technology;
