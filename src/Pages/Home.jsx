import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import WeatherCard from "../Components/WeatherCard";
import useWeather from "../Hooks/useWeather";

export default function Home() {
  const { weather, loading, error, fetchWeather } = useWeather();
  const [city, setCity] = useState("");

  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold m-4">🌤 Weather Now</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
