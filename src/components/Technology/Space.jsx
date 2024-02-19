import Tech1 from "../../assets/image-spaceport-portrait.jpg";
import Tech2 from "../../assets/image-spaceport-landscape.jpg";

const Space = () => {
  return (
    <>
      <img className="hidden md:block" src={Tech1} />
      <img className="md:hidden" src={Tech2} />
    </>
  );
};

export default Space;
