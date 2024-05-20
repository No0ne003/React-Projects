import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Loading from "@/components/ui/Loading";

function ImageSlider({
  url = "https://meme-api.com/gimme",
  limit = 1,
  subReddit = "programmerHumor",
}) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}/${subReddit}/${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data.memes);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div className="absolute inset-0 m-auto flex justify-center items-center"><Loading /></div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div
      className={`container flex flex-col flex-1 items-center justify-center gap-8 my-10 w-full max-h-screen relative overflow-x-hidden`}
    >
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute size-8 text-accent hover:text-accent/80 drop-shadow-xl left-4"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
          <img
            key={index}
            alt={imageItem.title}
            src={imageItem.url}
            className={currentSlide === index ? "max-h-[60%]" : "hidden"}
          />
        ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute size-8 text-accent hover:text-accent/80 drop-shadow-xl right-4"
      />
      <span className="flex absolute bottom-4">
        {images && images.length
          ? images.map((_, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                  ? "bg-accent size-4 outline-none border-none mx-1 cursor-pointer rounded-full"
                  : "bg-accent-foreground size-4 outline-none border-none mx-1 cursor-pointer rounded-full"
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))
          : null}
      </span>
    </div>
  );
}

ImageSlider.propTypes = {
  url: PropTypes.string,
  limit: PropTypes.number,
  subReddit: PropTypes.string,
};

export default ImageSlider;
