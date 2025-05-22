import React, { createContext, ReactNode, useState } from "react";

type ThemeType = "light" | "dar";

const themeContext = createContext({
  theme: "light",
  setTheme: (val: ThemeType) => {},
});

const themeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default themeProvider;
