export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="p-4 m-4 border rounded shadow-md bg-gray-50">
      <h2 className="text-xl font-bold">Current Weather</h2>
      <p>🌡 Temperature: {weather.temperature}°C</p>
      <p>💨 Windspeed: {weather.windspeed} km/h</p>
      <p>⏱ Time: {weather.time}</p>
    </div>
  );
}
