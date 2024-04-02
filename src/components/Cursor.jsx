import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
    },
  };

  return (
    <motion.div
      className="cursor size-8 bg-primary fixed rounded-full z-50 pointer-events-none mix-blend-darken dark:mix-blend-difference top-0 left-0 flex justify-center items-center color-black"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorVariant === "text" ? (
        <p className="mix-blend-darken dark:mix-blend-difference -rotate-45">
          <FaArrowAltCircleRight size={50} />
        </p>
      ) : null}
    </motion.div>
  );
};

export default Cursor;
