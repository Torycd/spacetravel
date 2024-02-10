import  Carousel  from "../components/UI/Carousel"
import crew1 from "../assets/image-anousheh-ansari.png";
import crew2 from "../assets/image-douglas-hurley.png";
import crew3 from "../assets/image-victor-glover.png"




const Crew = () => {
    const slides = [
      {
        img: crew1,
        position: "Commander",
        name: "Douglas Hurley",
        about:
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo2.",
      },
      {
        img: crew2,
        position: "Flight Engineer",
        name: "Anousheh Ansari",
        about:
          "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
      {
        img: crew3,
        position: "Pilot",
        name: "Victor Glover",
        about:
          " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      },
    ];
  return (
    <Carousel slides={slides}/>
  )
}

export default Crew;