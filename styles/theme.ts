import AppColors from "./colors";

import radius from "./radius";
import spacing from "./spacing";
import typography from "./typography";

interface ThemeType {
  colors: typeof AppColors;
  spacing: typeof spacing;
  gap: (v: number) => void;
  typography: typeof typography;
  radius: typeof radius;
}

// Extend unistyles breakpoint
const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

// Define the Theme Mode with Overrides
const lightTheme: ThemeType = {
  colors: {
    ...AppColors,
    background: "#fff",
    text: "#000",
  },
  gap: (v: number) => v * 8,
  spacing,
  typography,
  radius,
};

const darkTheme: ThemeType = {
  colors: {
    ...AppColors,
    background: "#000",
    text: "#fff",
    // override gray swatch for dark mode
    swatches: {
      gray: {
        50: "#131313",
        100: "#775653",
        500: "#f5f5f5",
        200: "#1e1e1e",
      },
    },
  },
  gap: (v: number) => v * 8,
  spacing,
  typography,
  radius,
};

// Extend unistyles themes
const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

export { AppBreakpoints, AppThemes, appThemes, breakpoints };
