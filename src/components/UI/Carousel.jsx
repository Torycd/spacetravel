import PropTypes from "prop-types";

const Carousel = ({ slides }) => {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        {slides.map((s) => (
          <div key={s.name} className="flex w-[1440px]">
            <div className="flex">
              <h1>{s.name}</h1>
              <h1>{s.postion}</h1>
              <p>{s.about}</p>
            </div>
            <img src={s.img} />
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
