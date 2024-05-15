import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  setCursorVariant,
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        },
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          const wordClassName = cn(
            `text-foreground opacity-0 hidden`,
            word.className,
          );
          const isPrimary =
            word.className && word.className.includes("primary");
          const spanProps = {
            initial: {},
            className: wordClassName,
          };
          if (isPrimary) {
            spanProps.onMouseEnter = handleMouseEnter;
            spanProps.onMouseLeave = handleMouseLeave;
          }
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span {...spanProps} key={`char-${index}`}>
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  const handleMouseEnter = () => setCursorVariant("bigText");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <div className={cn("text-6xl text-center font-normal", className)}>
      {renderWords()}
    </div>
  );
};
