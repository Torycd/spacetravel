import PropTypes from "prop-types";

const Carousel = ({ slides }) => {
  return (
    <div className="overflow-hidden flex w-[100%]">
      {slides.map((s) => (
        <div key={s.name} className="flex justify-center m-2">
          <div className="flex w-full justify-around gap-10">
            <div className="w-1/2">
              <h1 className="text-4xl">{s.name}</h1>
              <h1 className="text-4xl">{s.position}</h1>
              <p >{s.about}</p>
            </div>
            <div className="w-1/2">
              <img src={s.img}  alt={s.name} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
