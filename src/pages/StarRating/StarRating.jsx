import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Input } from "@/components/ui/input";

function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [starNums, setStarNums] = useState(numOfStars);

  function handleClick(getCurrentLIndex) {
    setRating(getCurrentLIndex);
  }
  function handleMouseEnter(getCurrentLIndex) {
    setHover(getCurrentLIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  const handleStarNumChange = (event) => {
    setStarNums(event.target.value);
    console.log(starNums);
  };

  return (
    <div
      className={`container flex flex-col flex-1 items-center justify-center gap-8 my-10 w-full h-screen`}
    >
      <Input
        type="number"
        placeholder="number of stars"
        className="w-72"
        value={starNums}
        onChange={handleStarNumChange}
      />

      <div className="flex justify-center items-center w-full gap-3">
        {Array.from({ length: starNums }).map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={
                index <= (hover || rating)
                  ? "active text-primary"
                  : "inactive text-secondary-foreground/20"
              }
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
}

StarRating.propTypes = {
  numOfStars: PropTypes.number,
};

export default StarRating;
