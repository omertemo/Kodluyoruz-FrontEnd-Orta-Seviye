import React from "react";
import { useSelect } from "../../contexts/SelectContext";
import cities from "../../data/cities.json";

function Header() {
  const { setSelect } = useSelect();

  const handleChange = (event) => setSelect(event.target.value);

  return (
    <div className="Header">
      <label htmlFor="select">Cities:</label>

      <select id="select" onChange={handleChange}>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Header;
