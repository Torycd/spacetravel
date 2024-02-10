import PropTypes from "prop-types";

const Carousel = ({ slides }) => {
  return (
    <div className="overflow-hidden">
      {slides.map((s) => (
        <div key={s.name} className="flex justify-center">
          <div className="flex w-full">
            <div className="w-1/2">
              <h1>{s.name}</h1>
              <h1>{s.position}</h1>
              <p>{s.about}</p>
            </div>
            <div>
              <img src={s.img} className="w-1/2" alt={s.name} />
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
