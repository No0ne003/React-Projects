import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col gap-3 justify-start items-center">
      <p className="text-xl">
        this page under{" "}
        <span className="font-bold text-primary">development</span>
      </p>
      <p className="text-neutral-500 text-xs">
        I&apos;ll start on it when add the first componenet (project)
      </p>
      {projects.map((item) => (
        <Link key={item.id} to={item.path}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Home;
