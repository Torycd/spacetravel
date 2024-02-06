// import { Carousel, Typography } from "@material-tailwind/react"
// import { CarouselDefault } from "../components/UI/CarouselCustomNavigation"
import { CarouselCustomNavigation } from "../components/UI/Carousel"
// import crew1 from "../assets/image-anousheh-ansari.png";
// import crew2 from "../assets/image-douglas-hurley.png";
// import crew3 from "../assets/image-victor-glover.png"


const Crew = () => {
  return (
    // <Carousel>
    //   <div className="relative h-full w-full">
    //     <Typography>Crew!</Typography>
    //     <img src={crew1} className="h-full w-full object-cover" alt="/"/>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <Typography>Crew2</Typography>
    //     <img src={crew2} alt="/"/>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <Typography>Crew3</Typography>
    //     <img src={crew3} alt="/"/>
    //   </div>
    // </Carousel>
    <CarouselCustomNavigation/>
  )
}

export default Crew