import { projects } from "@/data/projects";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home({ setCursorVariant }) {
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
    <main className="flex flex-col mb-32">
      <div className="landing relative mb-24 py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-end max-sm:h-[75vh]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center gap-2 sm:hidden">
              <div className="flex flex-col items-center gap-[1px]">
                <div className="w-36 h-[1px] bg-primary" />
                <div className="w-36 h-[1px] bg-primary" />
                <div className="w-36 h-[1px] bg-primary" />
              </div>
              <FaStar className="text-primary relative -left-3" />
              <p className="text-primary text-sm">Hello there</p>
            </div>
            <h1 className="mt-5 text-6xl max-sm:text-start text-foreground leading-[1.1] sm:leading-sung">
              Discover Awesome React.js{" "}
              <span
                onMouseEnter={() => setCursorVariant("bigText")}
                onMouseLeave={() => setCursorVariant("default")}
                className="relative inline-flex justify-center whitespace-nowrap font-bold text-primary"
              >
                Projects
              </span>
            </h1>
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
