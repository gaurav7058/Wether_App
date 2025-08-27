const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search?";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast?";

export async function getCoordinates(city) {
  const res = await fetch(`${BASE_URL}name=${city}&count=1`);
  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }
  return {
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
  };
}

export async function getWeather(latitude, longitude) {
  const res = await fetch(
    `${WEATHER_URL}latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await res.json();
  return data.current_weather;
}
