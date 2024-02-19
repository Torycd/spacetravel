const Europa = () => {
  return (
    <div className="flex flex-col lg:justify-normal gap-5 lg:gap-10 text-left mt-5 lg:mt-20">
      <h1 className="text-5xl md:text-8xl font-Inte flex justify-center lg:justify-normal font-extrabold">
        EUROPA
      </h1>
      <p className="flex justify-center lg:justify-normal">
        he smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lovers dream. With an icy surface, its perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>
      <hr className="bg-white lg:mr-40 flex justify-center lg:justify-normal" />
      <div className="flex justify-center gap-8 lg:gap-0 lg:justify-around lg:mr-40 font-Inte">
        <span className="flex flex-col gap-2">
          <p>Avg. distance</p>
          <p className="text-3xl">628 mil. km</p>
        </span>
        <span className="flex flex-col gap-2">
          <p>Est. travel time</p>
          <p className="text-3xl">3 years</p>
        </span>
      </div>
    </div>
  );
};

export default Europa;
