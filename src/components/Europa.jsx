

const Europa = () => {
  return (
    <div className="flex flex-col gap-10 text-left mt-20">
      <h1 className="text-8xl">EUROPA</h1>
      <p>
      he smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lovers dream. With an icy surface, its perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.
      </p>
      <hr className="bg-white mr-40" />
      <div className="flex justify-around mr-40">
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
