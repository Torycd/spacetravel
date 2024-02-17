const Technology = () => {
  return (
    <div className="text-white">
      <div>
        <h2 className="font-Inte">Space Launch 101</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-10">
          {/* rounded item */}
          <div className="text-black font-Inte ml-32 ">
            <div className="bg-white w-24 h-24 rounded-full flex">
              <span className="self-center mx-auto text-2xl">1</span>
            </div>
            <div className="bg-white w-24 h-24 rounded-full flex">
              <span className="self-center mx-auto text-2xl">2</span>
            </div>
            <div className="bg-white w-24 h-24 rounded-full flex">
              <span className="self-center mx-auto text-2xl">3</span>
            </div>
          </div>
          {/* information */}
          <div className="">
            <h1>Text1</h1>
            <h2>Text2</h2>
            <p>statement1</p>
          </div>
        </div>
        <img src="#" />
      </div>
    </div>
  );
};

export default Technology;
