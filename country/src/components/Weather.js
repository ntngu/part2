import { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState(0);
  const kelvinToCelsius = (kel) => kel - 273.15;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((result) => {
        setData(result.data);
        setTemp(kelvinToCelsius(result.data.main.temp).toFixed(2));
        setIcon(result.data.weather[0].icon);
        setWind(result.data.wind.speed.toFixed(2));
      });
  });

  return (
    <div className="weather">
      <h2>Weather in {country.name.common}</h2>
      <div>
        temperature {temp} Celsius <br />
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} /> <br />
        wind {wind} m/s
      </div>
    </div>
  );
};

export default Weather;
