const weatherDescriptions = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime Fog",
  51: "Light Drizzle",
  61: "Rain",
  71: "Snow",
  95: "Thunderstorm",
};

export default function WeatherCard({ weather }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2">
        {weather.city}, {weather.country}
      </h2>
      <p className="text-gray-700 mb-4">
        {weatherDescriptions[weather.condition] || "Unknown Weather"}
      </p>
      <div className="flex justify-around items-center">
        <div>
          <p className="text-4xl font-bold">{weather.temp}°C</p>
          <p className="text-gray-500">Temperature</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">{weather.wind} km/h</p>
          <p className="text-gray-500">Wind Speed</p>
        </div>
      </div>
    </div>
  );
}
