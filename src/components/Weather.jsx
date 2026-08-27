import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getWeather = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
        );

        if (!response.ok) throw new Error("Weather request failed");

        const data = await response.json();

        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          code: data.current.weather_code,
        });
      } catch {
        setError(true);
      }
    };

    if (!navigator.geolocation) {
      setError(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        getWeather(coords.latitude, coords.longitude);
      },
      () => {
        setError(true);
      }
    );
  }, []);

  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if (code <= 3) return "⛅";
    if (code <= 48) return "🌫️";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "❄️";
    if (code <= 82) return "🌦️";
    return "⛈️";
  };

  if (error) {
    return (
      <div className="weather-widget">
        <span>🌤️</span>
        <span>Weather unavailable</span>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="weather-widget">
        <span>🌤️</span>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="weather-widget" title="Current weather">
      <span>{getWeatherIcon(weather.code)}</span>
      <span>{weather.temperature}°C</span>
    </div>
  );
};

export default Weather;