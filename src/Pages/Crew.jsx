import { useState, useEffect } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import imageDouglasHurley from "../assets/image-douglas-hurley.webp";
import imageAnoushehAnsari from "../assets/image-anousheh-ansari.webp";
import imageVictorGlover from "../assets/image-victor-glover.webp";

const Crew = () => {
  const slides = [
    {
      url: imageDouglasHurley,
      position: "Commander",
      name: "Douglas Hurley",
      about:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo2.",
    },
    {
      url: imageAnoushehAnsari,
      position: "Flight Engineer",
      name: "Anousheh Ansari",
      about:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
    {
      url: imageVictorGlover,
      position: "Pilot",
      name: "Victor Glover",
      about:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col my-18 mx-2 text-white h-auto">
      <div className="flex group">
        <div className="w-1/2 px-7 pt-10 flex flex-col gap-6">
          <h1 className="text-6xl font-Inte font-bold">
            {slides[currentIndex].position}
          </h1>
          <h1 className="text-5xl font-Inte font-bold">
            {slides[currentIndex].name}
          </h1>
          <p>{slides[currentIndex].about}</p>
        </div>
        <div className="w-1/2 h-[100%] overflow-hidden">
          <div className="w-[100%]">
            <img
              src={slides[currentIndex].url}
              alt={slides[currentIndex].name}
              className="w-auto h-[560px] object-cover transition ease-in-out duration-700"
            />
          </div>
        </div>

        {/* side buttons */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer duration-300 ease-in-out ">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer duration-300 ease-in-out">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slides, slideIndex) => (
          <div key={slides.name} className="text-2xl cursor-pointer">
            <RxDotFilled onClick={() => gotoSlide(slideIndex)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crew;
