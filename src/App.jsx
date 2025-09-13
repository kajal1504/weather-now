import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">🌤 Weather Now</h1>
      <WeatherForm setWeather={setWeather} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
