import PropTypes from "prop-types";

const Carousel = ({ slides }) => {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        {slides.map((s) => (
          <div key={s.name} className="flex w-full">
            <div className="flex w-1/2">
              <h1>{s.name}</h1>
              <h1>{s.position}</h1>
              <p>{s.about}</p>
            </div>
            <img src={s.img} className="w-1/2" alt={s.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.node.isRequired,
};

export default Carousel;
