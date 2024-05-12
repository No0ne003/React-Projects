import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

function Home({ setCursorVariant }) {
  return (
    <div className="container flex flex-col gap-3 justify-start items-center py-10">
      <div className="landing w-full flex justify-center ml-20 flex-col">
        <div>
          <h1 className="text-9xl font-bold uppercase flex flex-col w-fit font-mono">
            React{" "}
            <span
              onMouseEnter={() => setCursorVariant("bigText")}
              onMouseLeave={() => setCursorVariant("default")}
              className="text-primary"
            >
              Projects.
            </span>
          </h1>
          <p className="pl-2 font-bold text-foreground/65">
            this page under development
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full">
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
              <span className="text-5xl uppercase font-bold ml-[16%]">
                {item.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
