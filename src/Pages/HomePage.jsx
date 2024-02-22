const HomePage = () => {
  return (
    <>
      
      <div className="text-white flex flex-col gap-10 m-2 md:flex-row sm:gap-0 justify-between">
        <div className="flex flex-col gap-8 sm:ml-10 my-6 lg:my-32">
          <p className="font-normal text-xl sm:text-3xl text-center md:text-right opacity-90">
            So, you want to travel to
          </p>
          <h2 className="font-Inte sm:text-9xl text-7xl font-extrabold text-center md:text-right">
            Space
          </h2>
          <p className="mt-2 text-sm text-center md:text-right opacity-90">
            Lets face it; if you want to go to space, you might as well
            <br />
            genuinely go to outer space and not hover kind of on the
            <br />
            edge of it. Well sit back, and relax because well give you
            <br />a truly out of this world experience!
          </p>
        </div>

        <div className="lg:w-64 lg:h-64 w-44 h-44 flex items-center justify-center rounded-full sm:my-auto mx-auto bg-white lg:ml-40 lg:mr-60">
          <h2 className="font-Inte text-black font-semibold sm:text-3xl">
            Explore
          </h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
