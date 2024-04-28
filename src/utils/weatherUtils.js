import clearDay from "../assets/images/clear-day.png";
import rain from "../assets/images/rain.png";
import cloudy from "../assets/images/cloudy.png";
import wind from "../assets/images/wind.png";
import fog from "../assets/images/fog.png";
import drizzle from "../assets/images/drizzle.png";

export const getWeatherImage = (weatherType) => {
  switch (weatherType) {
    case "Haze":
      return clearDay;
    case "Clouds":
      return cloudy;
    case "Rain":
      return rain;
    case "Snow":
      return fog;
    case "Dust":
      return wind;
    case "Drizzle":
      return drizzle;
    case "Fog":
      return fog;
    case "Smoke":
      return fog;
    case "Tornado":
      return wind;
    default:
      return clearDay;
  }
};

export const dateBuilder = () => {
  const currentDate = new Date();

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[currentDate.getDay()];
  let date = currentDate.getDate();
  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};
