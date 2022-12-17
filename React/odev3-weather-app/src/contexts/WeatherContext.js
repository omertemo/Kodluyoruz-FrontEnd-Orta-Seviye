import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useSelect } from "./SelectContext";
// context oluşturma
const WeatherContext = createContext();
// const API_key = "acae8032fefb59c7222415f88e5dae84";


export const WeatherContextProvider = ({ children }) => {
  const { select } = useSelect();

  const initialValue = [
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
  ];
  const [wheathers, setWheathers] = useState(initialValue);

  useEffect(() => {
    let array = []
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${select}&appid=acae8032fefb59c7222415f88e5dae84&cnt=40`
    ).then((res => {
      let todayHour = res.data.list[0].dt_txt;
      todayHour = todayHour.substring(11, 19);
      res.data.list.map((item) => {
        if (item.dt_txt.substring(11, 19) === todayHour) {
          array.push(item);
        }
        setWheathers(array);
        return "";
      });

    }))
  }, [select]);

  let daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hour = wheathers[0].dt_txt.substring(11, 16);
  let days = [];
  let icons = [];
  let temps = [];

  for (let item of wheathers) {
    let date = new Date(item.dt_txt);
    date = date.getDay();
    days.push(daysInWeek[date]);
    icons.push(item.weather[0].icon);
    temps.push({
      temp_max: (item.main.temp_max - 273).toFixed(),
      temp_min: (item.main.temp_min - 273).toFixed(),
    });
  }

  const values = {
    hour,
    days,
    icons,
    temps,
  };
  console.log(values);

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWheather = () => {
  const context = useContext(WeatherContext);

  return context;
};
