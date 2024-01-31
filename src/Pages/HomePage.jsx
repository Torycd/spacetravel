

const HomePage = () => {
  return (      
      <div className="text-white flex flex-col m-2 sm:flex-row justify-between">
      <div className="flex flex-col gap-8 sm:ml-10 sm:my-40">
        <p className="font-normal sm:text-3xl text-center sm:text-right">
          So, you want to travel to
        </p>
        <h2 className="sm:text-9xl text-7xl font-bold text-center sm:text-right">
          Space
        </h2>
        <p className="mt-2 text-sm text-center sm:text-right">
          Lets face it; if you want to go to space, you might as well
          <br />
          genuinely go to outer space and not hover kind of on the
          <br />
          edge of it. Well sit back, and relax because well give you
          <br />a truly out of this world experience!
        </p>
      </div>

      <div className="sm:w-64 sm:h-64 w-44 h-44 flex items-center justify-center rounded-full my-auto mx-auto bg-white sm:ml-40 sm:mr-60">
        <h2 className="text-black font-semibold sm:text-3xl">Explore</h2>
      </div>
    </div>
    
  );
};

export default HomePage;
