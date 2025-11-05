import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Display = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-200 to-gray-200">
        <div className="text-xl text-blue-700 font-semibold animate-pulse">Loading weather data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-200 to-gray-200">
        <div className="text-xl text-red-600 font-semibold">{error}</div>
      </div>
    );
  }

  if (!weather) return null;

  const { location, current } = weather;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-200 to-gray-200 px-4 py-8">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          <img src={current.condition.icon} alt={current.condition.text} className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-bold text-blue-700">{location.name}, {location.country}</h2>
            <p className="text-gray-500 text-sm">{location.region}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl font-extrabold text-blue-800">{current.temp_c}&deg;C</span>
          <span className="text-lg text-gray-500">({current.temp_f}&deg;F)</span>
        </div>
        <div className="mb-4 text-lg text-blue-600 font-medium flex items-center gap-2">
          <span>{current.condition.text}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full text-gray-700">
          <div className="flex flex-col items-center">
            <span className="font-semibold">Humidity</span>
            <span>{current.humidity}%</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Wind</span>
            <span>{current.wind_kph} kph ({current.wind_dir})</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Feels Like</span>
            <span>{current.feelslike_c}&deg;C</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">UV Index</span>
            <span>{current.uv}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Visibility</span>
            <span>{current.vis_km} km</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Pressure</span>
            <span>{current.pressure_mb} mb</span>
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-400">Last updated: {current.last_updated}</div>
      </div>
    </div>
  );
}

export default Display
