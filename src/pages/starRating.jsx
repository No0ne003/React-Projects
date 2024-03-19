import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar } from "react-icons/fa"; // Correct import for FaStar

function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentLIndex) {
    setRating(getCurrentLIndex)
  }
  function handleMouseEnter(getCurrentLIndex) {
    setHover(getCurrentLIndex)
  }
  function handleMouseLeave() {
    setHover(rating)
  }

  return (
    <div
      className={`container flex flex-1 items-center justify-center gap-8 my-10 w-full h-screen`}
    >
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active text-primary' : 'inactive text-white'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

StarRating.propTypes = {
  numOfStars: PropTypes.number,
};

export default StarRating
