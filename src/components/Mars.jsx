const Mars = () => {
  return (
    <div className="flex flex-col gap-10 text-left mt-20">
      <h1 className="text-8xl">MARS</h1>
      <p>
        Dont forget to pack your hiking boots. Youll need them to tackle Olympus
        Mons, the tallest planetary mountain in our solar system. Its two and a
        half times the size of Everest!
      </p>
      <hr className="bg-white mr-40" />
      <div className="flex justify-around mr-40">
        <span className="flex flex-col gap-2">
          <p>Avg. distance</p>
          <p className="text-3xl">225 mil. km</p>
        </span>
        <span className="flex flex-col gap-2">
          <p>Est. travel time</p>
          <p className="text-3xl">9 months</p>
        </span>
      </div>
    </div>
  );
};

export default Mars;
