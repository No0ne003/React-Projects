import { Button } from "@/components/ui/button";
import { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: "dark:bg-[#f38ba8] bg-[#d20f39]",
    },
    {
      label: "Second Card",
      style: "dark:bg-[#89b4fa] bg-[#1e66f5]",
    },
    {
      label: "Third Card",
      style: "dark:bg-[#a6e3a1] bg-[#40a02b]",
    },
    {
      label: "Fourth Card",
      style: "dark:bg-[#cba6f7] bg-[#8839ef]",
    },
    {
      label: "Fifth Card",
      style: "dark:bg-[#94e2d5] bg-[#179299]",
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.scrollIntoView();

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div className="container flex flex-col justify-center items-center gap-4 my-10">
      <h1 className="text-3xl text-center">
        <span className="font-bold text-primary">Scroll</span> to a particular
        section
      </h1>
      <Button onClick={handleScrollToSection}>Click to Scroll</Button>
      <div className="w-full flex flex-col px-8 py-2 gap-6">
        {data.map((dataItem, index) => (
          <div
            ref={index === 3 ? ref : null}
            key={index}
            className={`rounded-md flex justify-center items-center w-full h-[350px] md:h-[600px] ${dataItem.style}`}
          >
            {" "}
            <h3 className="text-xl font-bold mix-blend-difference">
              {dataItem.label}
            </h3>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollToSection;
