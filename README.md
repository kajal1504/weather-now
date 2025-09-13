🌤 Weather Now

A simple and responsive React + TailwindCSS application that allows users to check the current weather conditions in any city using the Open-Meteo API.

🚀 Features

🌎 Search weather by city name

📍 Uses Open-Meteo Geocoding API to find city coordinates

🌡 Displays temperature, wind speed, and weather conditions

📱 Fully responsive (mobile, tablet, desktop)

⚡ Built with Vite + React + TailwindCSS and Open-Meteo API


📂 Folder Structure
weather-now/
│── public/
│   └── favicon.ico
│
│── src/
│   ├── components/
│   │   ├── WeatherForm.jsx     # Search form for city input
│   │   ├── WeatherCard.jsx     # Displays weather data
│   │
│   ├── App.jsx                 # Main app container
│   ├── index.css               # Tailwind CSS setup
│   └── main.jsx                # Entry point
│
│── package.json
│── tailwind.config.js
│── vite.config.js

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/weather-now.git
cd weather-now

2. Install Dependencies
npm install

3. Run Development Server
npm run dev


🌐 API Used

Geocoding API → https://geocoding-api.open-meteo.com/v1/search?name={city}

Weather API → https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true

Deploy →


