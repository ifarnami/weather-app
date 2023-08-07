import clearIcon from "../../assets/clear.png";
import rainIcon from "../../assets/rain.png";
import cloudsIcon from "../../assets/clouds.png";
import snowIcon from "../../assets/snow.png";
import drizzleIcon from "../../assets/drizzle.png";
import mistIcon from "../../assets/mist.png";
import hazeIcon from "../../assets/haze.png";

function WeatherIcon({ condition }) {
  let weatherImage = null;

  switch (condition) {
    case "Clear":
      weatherImage = clearIcon;
      break;

    case "Rain":
      weatherImage = rainIcon;
      break;

    case "Snow":
      weatherImage = snowIcon;
      break;

    case "Drizzle":
      weatherImage = drizzleIcon;
      break;

    case "Mist":
      weatherImage = mistIcon;
      break;

    case "Clouds":
      weatherImage = cloudsIcon;
      break;

    case "Haze":
      weatherImage = hazeIcon;
      break;

    default:
      weatherImage = null;
  }

  return <img src={weatherImage} alt="weather condition icon" />;
}

export default WeatherIcon;
