import "./Card.scss";
import humidityIcon from "../../assets/humidity.png";
import windIcon from "../../assets/wind.png";
import { useState } from "react";
import axios from "axios";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

function Card() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=a4ebc60e40e8cac8de97b2a2fd433093&units=metric`;

  const handleKeyPress = (e) => {
    setInputText(e.target.value);
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setData(err.response.data.cod);
        });
      setInputText("");
    }
  };

  return (
    <div className="card">
      <div className="searchBox">
        <input
          onKeyUp={handleKeyPress}
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter City Name"
          spellCheck="false"
        />
      </div>
      {data === "404" ? (
        <h1>Location Not Found!</h1>
      ) : (
        <div className="weather">
          {data.weather ? (
            <WeatherIcon condition={data.weather[0].main} />
          ) : null}
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          {data.main ? <h1 className="temp">{data.main.temp}&deg; C</h1> : null}
          <h2 className="city">{data.name}</h2>

          <div className="details">
            <div className="col">
              <img src={humidityIcon} alt="humidity icon" />
              <div>
                {data.main ? (
                  <p className="humidity">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={windIcon} alt="wind icon" />
              <div>
                {data.wind ? (
                  <p className="wind">{data.wind.speed} km/h</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
