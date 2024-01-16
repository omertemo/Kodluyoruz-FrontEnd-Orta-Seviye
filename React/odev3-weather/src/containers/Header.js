import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useSelectCity } from "../context/CitiesContext";
import cities from "../data/cities.json";

export default function Header() {
  console.log("Header");
  const { city, setCity } = useSelectCity();
  console.log("Header 2");

  const handleCityChange = (event) => setCity(event.target.value);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel variant="standard" htmlFor="select-city">
          Select City
        </InputLabel>
        <NativeSelect
          value={city}
          // defaultValue={"Adana"}
          onChange={handleCityChange}
          inputProps={{
            name: "city",
            id: "select-city",
          }}
        >
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
          {/* Add more options based on your city list */}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
