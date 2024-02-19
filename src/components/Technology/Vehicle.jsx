import Tech1 from "../../assets/image-launch-vehicle-portrait.jpg";
import Tech2 from "../../assets/image-launch-vehicle-landscape.jpg";

const Vehicle = () => {
  return (
    <>
      <img className="hidden md:block" src={Tech1} />
      <img className="md:hidden" src={Tech2} />
    </>
  );
};

export default Vehicle;
