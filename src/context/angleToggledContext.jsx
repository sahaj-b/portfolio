import { useState, createContext } from "react";

export const AngleToggledContext = createContext({});

export const AngleToggledProvider = ({ children }) => {
  const [angleToggled, setAngleToggled] = useState(false);
  return (
    <AngleToggledContext.Provider value={{ angleToggled, setAngleToggled }}>
      {children}
    </AngleToggledContext.Provider>
  );
};
