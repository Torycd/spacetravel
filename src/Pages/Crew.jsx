import { useState } from "react";

import imageDouglasHurley from "../assets/image-douglas-hurley.png";
import imageAnoushehAnsari from "../assets/image-anousheh-ansari.png";
import imageVictorGlover from "../assets/image-victor-glover.png";

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

  return (
    <div className="mt-32 text-white">
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-4xl">{slides[currentIndex].position}</h1>
          <h1 className="text-4xl">{slides[currentIndex].name}</h1>
          <p>{slides[currentIndex].about}</p>
        </div>
        <div className="w-1/2 align-end">
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].name}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
