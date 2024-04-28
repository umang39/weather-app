import React, { useState } from "react";

import { SearchBar } from "../components/SearchBar";
import { WeatherCard } from "../components/WeatherCard";
import { InfoCard } from "../components/InfoCard";
import clouds from "../assets/images/cloudy.png";
import searchIcon from "../assets/images/search.png";

import "./styles.css";

const Dashboard = () => {
  /** States */
  const [error, setError] = useState("");
  const [isLoading, seIsLoading] = useState(false);
  const [weather, setWeather] = useState({});

  /**
   * Fetches weather information for a given city.
   * @param {string} city - The name of the city for which weather information is to be fetched.
   */
  const handleCitySearch = (city) => {
    seIsLoading(true);
    fetch(
      `${process.env.REACT_APP_API_URL}weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        seIsLoading(false);
        if (response.cod === 200) {
          setWeather(response);
          setError("");
        } else if (response.cod === "404") {
          setWeather({});
          setError("Not Found");
        }
      })
      .catch(function () {
        setWeather("");
        seIsLoading(false);
        setError("Not Found");
      });
  };

  return (
    <div className="wrapper">
      <div className="dashboard">
        <SearchBar handleSearchValue={handleCitySearch} />
        <div className="weather">
          {!Object.keys(weather).length && !isLoading ? (
            <InfoCard
              image={error ? searchIcon : clouds}
              title={error ? error : "Check Weather"}
              description={
                error
                  ? "Oopsiee! Please enter correct city name"
                  : "Start typing the name of a city to retrieve the latest weather updates and forecasts for that location."
              }
            />
          ) : (
            <WeatherCard weather={weather} isLoading={isLoading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
