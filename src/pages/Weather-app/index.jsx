import Search from "@/components/Search";
import Loading from "@/components/ui/Loading";
import { useEffect, useState } from "react";
import { FaCloud } from "react-icons/fa";
import { FaMapPin, FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";

const WeatherApp = () => {
  const [search, setSearch] = useState("marrakech");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=4910fb3e9fe1947b8ae9b22b46fc8d37`,
      );

      const data = await response.json();

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleSearch() {
    setSearch(input);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData(search);
  }, [search]);

  console.log(weatherData);

  return (
    <div className="container w-[90vw] sm:w-fit flex flex-col justify-start items-center gap-5 py-10 bg-secondary/40 aspect-[3/2]">
      <Search search={input} setSearch={setInput} handleSearch={handleSearch} />
      {loading ? (
        <LoadingMsg />
      ) : weatherData?.cod === "404" && weatherData?.message ? (
        <ErrorMsg />
      ) : (
        <div className="flex flex-col justify-center items-center gap-7 w-full">
          <div className="flex justify-between flex-col sm:flex-row w-full">
            <div className="flex flex-col gap-6 px-2">
              <div>
                <h2 className="flex gap-2 justify-center items-center">
                  <FaMapPin className="text-sm" />
                  {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
                </h2>
                <span className="text-xs text-foreground/80 flex items-center justify-center">
                  {getCurrentDate()}
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-semibold">
                  {(weatherData?.main?.temp - 273).toFixed(2)} °C 
                </div>
                <p className="justify-start items-center text-xs text-foreground/80 hidden xm:flex">
                  <span>
                    <img
                      className="w-7 grayscale"
                      src={
                        weatherData &&
                          weatherData.weather &&
                          weatherData.weather[0]
                          ? `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
                          : null
                      }
                      alt={
                        weatherData &&
                          weatherData.weather &&
                          weatherData.weather[0]
                          ? weatherData.weather[0].description
                          : null
                      }
                    />
                  </span>
                  {weatherData && weatherData.weather && weatherData.weather[0]
                    ? weatherData.weather[0].description
                    : null}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p>
                {weatherData && weatherData.weather && weatherData.weather[0]
                  ? weatherData.weather[0].description
                  : null}
              </p>
              <div>
                <img
                  className="w-32"
                  src={
                    weatherData && weatherData.weather && weatherData.weather[0]
                      ? `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
                      : null
                  }
                  alt={
                    weatherData && weatherData.weather && weatherData.weather[0]
                      ? weatherData.weather[0].description
                      : null
                  }
                />
              </div>
            </div>
          </div>

          <div className="w-full flex max-sm:gap-1 justify-center sm:justify-evenly items-center">
            <div className="flex justify-center items-cetner gap-3 py-1 px-2 bg-secondary rounded-lg">
              <FaWind size={20} />
              <p>{weatherData?.wind?.speed} km/h</p>
            </div>
            <div className="flex justify-center items-cetner gap-3 py-1 px-2 bg-secondary rounded-lg">
              <WiHumidity size={25} />
              <p>{weatherData?.main?.humidity}%</p>
            </div>
            <div className="flex justify-center items-cetner gap-3 py-1 px-2 bg-secondary rounded-lg">
              <FaCloud size={20} />
              <p>{weatherData?.clouds?.all}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ErrorMsg = () => {
  return (
    <div className="text-4xl flex justify-center items-center w-full h-full">
      <p>
        City Not <span className="text-destructive font-bold">Found</span>
      </p>
    </div>
  );
};

const LoadingMsg = () => {
  return (
    <div className="w-full inset-0 m-auto flex justify-center items-center">
      <Loading />
    </div>
  );
};

export default WeatherApp;
