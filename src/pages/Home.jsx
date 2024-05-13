import { projects } from "@/data/projects";
import { FaReact, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home({ setCursorVariant }) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="landing relative mb-24 py-12 sm:py-16 lg:pt-20 xl:pb-0">
      <div className="bg-gradient absolute -top-72 bottom-0 w-full opacity-5 h-[800px] scale-x-150 inset-x-0 lg:-top-36 lg:-bottom-14 overflow-hidden bg-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto hidden max-w-screen-lg bg-red-300 lg:block">
            <FaReact className="absolute right-0 text-[9rem] fill-primary -rotate-45 -translate-x-0 translate-y-[-19.5px]" />
            <FaRegStar className="absolute left-0 text-[7rem] fill-primary translate-x-[200px] translate-y-[-19.5]" />
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-5 text-3xl font-light leading-snug text-white sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
              Discover Awesome React.js{" "}
              <span
                onMouseEnter={() => setCursorVariant("bigText")}
                onMouseLeave={() => setCursorVariant("default")}
                className="relative inline-flex justify-center whitespace-nowrap font-bold text-primary"
              >
                Projects
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-foreground/80">
              Explore a curated collection of open-source projects, components,
              React hooks, and more, all in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:px-none mx-auto mt-20 flex max-w-screen-lg flex-1 flex-col px-4">
        <div className="flex flex-col w-[1000px]">
          {projects.map((item) => (
            <div
              key={item.id}
              className="py-4 px-6 border-border border-b-[0.5px] w-full first:border-t-[0.5px]"
            >
              <Link
                to={item.path}
                onMouseEnter={() => setCursorVariant("link")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold ml-[16%]">
                  {item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
