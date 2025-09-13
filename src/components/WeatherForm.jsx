import { useState } from "react";

export default function WeatherForm({ setWeather }) {
  const [city, setCity] = useState("");

  const getCoordinates = async (cityName) => {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
    );
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      return {
        lat: data.results[0].latitude,
        lon: data.results[0].longitude,
        name: data.results[0].name,
        country: data.results[0].country,
      };
    } else {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;

    const coords = await getCoordinates(city);
    if (!coords) {
      alert("City not found!");
      return;
    }

    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`
    );
    const data = await res.json();

    setWeather({
      city: coords.name,
      country: coords.country,
      temp: data.current_weather.temperature,
      wind: data.current_weather.windspeed,
      condition: data.current_weather.weathercode,
    });

    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-6 w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
      >
        Search
      </button>
    </form>
  );
}
