import useWindowResize from "./useWindowResize";

const UseWindowResizeTest = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <h1 className="text-3xl">
        <span className="font-bold text-primary">useWindow</span> resize Hook
      </h1>
      <div>
        <p>
          Width is <span className="font-bold">{width}</span>
        </p>
        <p>
          Height is <span className="font-bold">{height}</span>
        </p>
      </div>
    </div>
  );
};

export default UseWindowResizeTest
