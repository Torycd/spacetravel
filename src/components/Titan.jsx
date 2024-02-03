const Titan = () => {
  return (
    <div className="flex flex-col gap-10 text-left mt-20">
      <h1 className="text-8xl">Titan</h1>
      <p>
      Titan
      </p>
      <hr className="bg-white mr-40" />
      <div className="flex justify-around mr-40">
        <span className="flex flex-col gap-2">
          <p>Avg. distance</p>
          <p className="text-3xl">Avg. distanceAvg. distance</p>
        </span>
        <span className="flex flex-col gap-2">
          <p>Est. travel time</p>
          <p className="text-3xl">9 months</p>
        </span>
      </div>
    </div>
  );
};

export default Titan;
