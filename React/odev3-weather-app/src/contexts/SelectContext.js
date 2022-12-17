import { createContext, useContext, useState } from "react";

// context oluşturma
const SelectContext = createContext();

export const SelectContextProvider = ({ children }) => {
  const [select, setSelect] = useState("Trabzon");

  const values = { select, setSelect };

  return (
    <SelectContext.Provider value={values}>
      {children}
    </SelectContext.Provider>
  )
};

export const useSelect = () => {
  const context  = useContext(SelectContext);

  return context;
}