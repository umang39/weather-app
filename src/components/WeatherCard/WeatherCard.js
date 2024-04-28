import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Locations } from "../../assets/icons/locations.svg";
import { ReactComponent as Calender } from "../../assets/icons/calendar.svg";
import windSpeed from "../../assets/images/speed-wind.png";
import humidity from "../../assets/images/humidity.png";
import { getWeatherImage, dateBuilder } from "../../utils/weatherUtils";

import { Skeleton } from "../Skeleton";

import "./styles.css";

const WeatherCard = ({ weather = {}, isLoading = false }) => {
  return (
    <div className="weather-card">
      <div className={`card-root ${isLoading ? "flex-1" : ""}`}>
        {!isLoading ? (
          <React.Fragment>
            <div className="justify-space-between">
              <div className="flex-1">
                <p className="card-title">Now</p>
                <div className="temperature">
                  <h1 className="card-heading">
                    {Math.round(weather.main.temp)}°
                    <span className="celsius-text">C</span>
                  </h1>
                  <div>
                    <img
                      src={getWeatherImage(weather.weather[0].main)}
                      alt="weather type"
                    />
                  </div>
                </div>
                <p className="card-footer-text">{weather.weather[0].main}</p>
              </div>
            </div>
            <div className="border-top-1">
              <div className="footer">
                <Calender className="calendar-location-icon" />
                <p className="location-text">{dateBuilder()}</p>
              </div>
              <div className="location">
                <Locations className="calendar-location-icon" />
                <p className="location-text">
                  {weather.name}, {weather.sys.country}
                </p>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className="skeleton-wrapper current-weather-skeleton">
            <Skeleton />
          </div>
        )}
      </div>
      <div className="card-root flex-1">
        <h2 className="highlight-text">Today's HighLight</h2>
        <div className="today-highlight-card">
          {!isLoading ? (
            <div className="text-white highlight-inner-card">
              <h3 className="forecast-text">Humidity</h3>
              <div className="justify-space-between flex-1 highlight-inner-card-content">
                <img
                  src={humidity}
                  className="forecast-icon"
                  alt="Icon representing the humidity"
                />
                <p className="highlights-inner-card-heading">
                  {Math.round(weather?.main?.humidity)}%
                </p>
              </div>
            </div>
          ) : (
            <div className="skeleton-wrapper">
              <Skeleton />
            </div>
          )}
          {!isLoading ? (
            <div className="text-white highlight-inner-card">
              <h3 className="forecast-text">Wind Speed</h3>
              <div className="justify-space-between flex-1 highlight-inner-card-content">
                <img
                  src={windSpeed}
                  className="forecast-icon"
                  alt="icon representing the speed of the wind"
                />
                <p className="highlights-inner-card-heading">
                  {Math.round(weather?.wind?.speed)} Km/h
                </p>
              </div>
            </div>
          ) : (
            <div className="skeleton-wrapper">
              <Skeleton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default WeatherCard;
