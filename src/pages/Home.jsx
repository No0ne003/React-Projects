import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col gap-3 justify-start items-center">
      <p className="text-xl">this page under <span className="font-bold text-primary">development</span></p> 
      <p className="text-neutral-500 text-xs">I&apos;ll start on it when add the first componenet (project)</p>
      <Link to='accordion'>accordion</Link>
      <Link to='color-generator'>random Color Generator</Link>
      <Link to='star-rating'>star rating</Link>
      <Link to='image-slider'>image slider</Link>
      <Link to='load-more-data'>load more button</Link>
    </div>
  );
}

export default Home;
