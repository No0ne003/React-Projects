import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

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
      scale: 1,
    },
    text: {
      scale: 2.5,
    },
    link: {
      scale: 3,
    }
  };

  return (
    <motion.div
      className="cursor max-lg:hidden size-8 bg-primary fixed rounded-full z-50 pointer-events-none mix-blend-darken dark:mix-blend-difference top-0 left-0 flex justify-center items-center color-black opacity-90"
      style={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      variants={variants}
      animate={cursorVariant}
    >
      {cursorVariant === "link" ? (
        <p className="mix-blend-darken dark:mix-blend-difference -rotate-45">
          <FaArrowRight size={20} />
        </p>
      ) : null}
    </motion.div>
  );
};

export default Cursor;
