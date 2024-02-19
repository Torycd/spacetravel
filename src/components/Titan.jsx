const Titan = () => {
  return (
    <div className="lex flex-col lg:justify-normal gap-5 lg:gap-10 text-left mt-5 lg:mt-20">
      <h1 className="text-5xl md:text-8xl font-Inte flex justify-center lg:justify-normal font-extrabold">
        Titan
      </h1>
      <p className="flex justify-center lg:justify-normal">
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr className="bg-white lg:mr-40 flex justify-center lg:justify-normal" />
      <div className="flex justify-center gap-8 lg:gap-0 lg:justify-around lg:mr-40 font-Inte">
        <span className="flex flex-col gap-2 justify-center lg:justify-normal">
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
