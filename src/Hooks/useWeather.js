import { useState } from "react";
import { getCoordinates, getWeather } from "../Api/weatherApi";

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(city) {
    try {
      setLoading(true);
      setError("");cd
      const { latitude, longitude } = await getCoordinates(city);
      const weatherData = await getWeather(latitude, longitude);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { weather, loading, error, fetchWeather };
}
