const Moon = () => {
  return (
    <div className="flex flex-col  lg:justify-normal gap-5 lg:gap-10 text-left mt-5 lg:mt-20">
      <h1 className="text-8xl font-Inte flex justify-center lg:justify-normal  font-extrabold">MOON</h1>
      <p className="flex justify-center lg:justify-normal">
        See our planet as youve never seen it before.<br/>  A perfect relaxing trip
        away to help regain perspective and<br/>  come back refreshed. While youre
        there, take in some history by visiting<br/>  the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr className="bg-white lg:mr-40 flex justify-center lg:justify-normal " />
      <div className="flex justify-center gap-8 lg:gap-0 lg:justify-around lg:mr-40 font-Inte">
        <span className="flex flex-col gap-2 justify-center lg:justify-normal">
          <p>Avg. distance</p>
          <p className="text-3xl">384,400 km Est</p>
        </span>
        <span className="flex flex-col gap-2">
          <p>travel time</p>
          <p className="text-3xl">3 days</p>
        </span>
      </div>
    </div>
  );
};

export default Moon;
