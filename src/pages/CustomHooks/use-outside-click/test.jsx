import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useOutsideClick } from "./useOutsideClick";

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="container flex justify-center items-center h-screen">
      {showContent ? (
        <div
          ref={ref}
          className="w-[400px] bg-gr py-4 px-5 border-border border-2"
        >
          <h1 className="text-xl font-bold mb-1">This is a random content</h1>
          <p>
            Please Click outside of this to close this. It won&apos;t close if
            you click inside of this content
          </p>
        </div>
      ) : (
        <Button onClick={() => setShowContent(true)}>Show Content</Button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
