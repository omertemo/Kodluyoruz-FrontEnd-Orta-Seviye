// In CitiesContext.js or wherever you define your context
import { createContext, useContext, useEffect, useState } from "react";
import cities from "../data/cities.json";
import axios from "axios";

const CitiesContext = createContext();

export const CitiesContextProvider = ({ children }) => {
  const [city, setCity] = useState("Adana"); // Set your initial city value here
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const selectCities = cities.filter((item) => item.name === city)[0];
    const key = "7f5eb46eb1dd452aa80175532241401";
    console.log(selectCities);

    // http://api.weatherapi.com/v1/forecast.json?key=7f5eb46eb1dd452aa80175532241401%20&q=37.0000,35.3213&days=8&aqi=no&alerts=no`
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}%20&q=${selectCities.latitude},${selectCities.longitude}&days=7&aqi=no`
      )
      .then((res) => res.data)
      .then((res) => res.forecast)
      .then((res) => {
        setWeather(res.forecastday);
      })
      .catch((e) => console.log("hata"));
  }, [city]);

  if (weather.length === 0) {
    console.log(weather);
  } else {
    return (
      <CitiesContext.Provider value={{ city, setCity, weather, setWeather }}>
        {children}
      </CitiesContext.Provider>
    );
  }
};

export const useSelectCity = () => {
  const context = useContext(CitiesContext);
  if (!context) {
    throw new Error(
      "useSelectCity must be used within a CitiesContextProvider"
    );
  }
  return context;
};
