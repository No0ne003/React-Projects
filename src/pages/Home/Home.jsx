import { TypewriterEffect } from "@/components/typewriter-effect";
import { projects } from "@/data/projects";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home({ setCursorVariant }) {
  const words = [
    {
      text: "Discover",
    },
    {
      text: "Awesome",
    },
    {
      text: "React",
    },
    {
      text: "js",
    },
    {
      text: "Projects",
      className: "primary text-primary dark:text-primary font-bold",
      cursorVariant: 'bigText'
    },
  ];

  const renderProjectLinks = () => {
    return projects.map((item) => (
      <div
        key={item.id}
        className={`py-4 px-6 border-border border-b-[0.5px] w-full first:border-t-[0.5px]`}
      >
        <Link
          onMouseEnter={() => setCursorVariant("link")}
          onMouseLeave={() => setCursorVariant("default")}
          className="block"
          to={item.path}
        >
          <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold md:ml-[16%]">
            {item.name}
          </span>
        </Link>
      </div>
    ));
  };

  return (
    <main className="flex flex-col">
      <div className="landing relative mb-24 py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end max-sm:h-[75vh]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center gap-2 sm:hidden">
              <div className="flex flex-col items-center gap-[1px]">
                {["1", "2", "3"].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ width: 0 }}
                    animate={{ width: 150 }}
                    transition={{
                      duration: 2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.3,
                    }}
                    className="h-[1px] bg-primary"
                  />
                ))}
              </div>
              <FaStar className="text-primary relative -left-3" />
              <p className="text-primary text-sm">Hello world</p>
            </div>
            <TypewriterEffect
              words={words}
              className={
                "text-start leading-[1.1] sm:leading-sm mt-5 sm:text-center h-[282px] md:h-[150px]"
              }
              setCursorVariant={setCursorVariant}
            />
            <p className="max-sm:text-start sm:mx-auto mt-5 max-w-md text-base leading-7 text-foreground/80">
              Explore a curated collection of open-source projects, components,
              React hooks, and more, all in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:px-none mx-auto max-w-screen-lg flex flex-1 flex-col px-4 ">
        <div className="flex flex-col md:w-[1000px]">
          {renderProjectLinks()}
        </div>
      </div>
    </main>
  );
}

export default Home;
