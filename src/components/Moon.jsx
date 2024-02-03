const Moon = () => {
  return (
    <div className="flex flex-col gap-10 text-left mt-20">
      <h1 className="text-8xl">MOON</h1>
      <p>
        See our planet as youve never seen it before.<br/>  A perfect relaxing trip
        away to help regain perspective and<br/>  come back refreshed. While youre
        there, take in some history by visiting<br/>  the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr className="bg-white mr-40" />
      <div className="flex justify-around mr-40">
        <span className="flex flex-col gap-2">
          <p>Avg. distance</p>
          <p className="text-3xl">384,400 km Est</p>
        </span>
        <span className="flex flex-col gap-2">
          <p>travel time</p>
          <p className="text-3xl">3 s</p>
        </span>
      </div>
    </div>
  );
};

export default Moon;
