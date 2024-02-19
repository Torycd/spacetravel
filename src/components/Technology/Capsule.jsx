import Tech1 from "../../assets/image-space-capsule-portrait.jpg";
import Tech2 from "../../assets/image-space-capsule-landscape.jpg";

const Capsule = () => {
  return (
    <>
      <img className="hidden md:block" src={Tech1} />
      <img className="md:hidden" src={Tech2} />
    </>
  );
};

export default Capsule;
