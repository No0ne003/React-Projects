import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

function Home({ setCursorVariant }) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="landing relative mb-24 py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-end max-sm:h-[75vh]">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-5 text-4xl max-sm:text-start leading-snug text-foreground sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
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

      <div className="sm:px-none mx-auto max-w-screen-lg flex flex-1 flex-col px-4">
        <div className="flex flex-col md:w-[1000px]">
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
                <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold md:ml-[16%]">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
