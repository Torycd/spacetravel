const Mars = () => {
  return (
    <div className="flex flex-col  lg:justify-normal gap-5 lg:gap-10 text-left mt-5 lg:mt-20">
      <h1 className="text-5xl md:text-8xl font-Inte flex justify-center lg:justify-normal  font-extrabold">MARS</h1>
      <p>
        Dont forget to pack your hiking boots. Youll need them to tackle Olympus
        Mons, the tallest planetary mountain in our solar system. Its two and a
        half times the size of Everest!
      </p>
      <hr className="bg-white lg:mr-40 flex justify-center lg:justify-normal" />
      <div className="flex justify-center gap-8 lg:gap-0 lg:justify-around lg:mr-40 font-Inte">
        <span className="flex flex-col gap-2 justify-center lg:justify-normal">
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
