const Titan = () => {
  return (
    <div className="flex flex-col gap-10 text-left mt-20">
      <h1 className="text-8xl">Titan</h1>
      <p>
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr className="bg-white mr-40" />
      <div className="flex justify-around mr-40">
        <span className="flex flex-col gap-2">
          <p>Avg. distance</p>
          <p className="text-3xl">1.6 bil. km</p>
        </span>
        <span className="flex flex-col gap-2">
          <p>Est. travel time</p>
          <p className="text-3xl">7 years</p>
        </span>
      </div>
    </div>
  );
};

export default Titan;
