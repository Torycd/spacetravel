import PropTypes from "prop-types";

const Carousel = ({ slides }) => {
  return (
    <div className="overflow-hidden z-50 text-white">
      <div className="flex">
        {slides.map((s) => (
          <div key={s.name} className="flex o justify-center m-2">
           
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
