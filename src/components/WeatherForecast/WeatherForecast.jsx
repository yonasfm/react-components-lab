// src/components/WeatherForecast/WeatherForecast.jsx
import './WeatherForecast.css';

export default function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src={img} alt={imgAlt} />
      <p>
        <span>{conditions}</span> - {time}
      </p>
    </div>
  );
}
