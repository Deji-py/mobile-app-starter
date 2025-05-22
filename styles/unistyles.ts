import { StyleSheet } from "react-native-unistyles";
import { AppBreakpoints, appThemes, AppThemes, breakpoints } from "./theme";

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    initialTheme: "light",
  },
  breakpoints: breakpoints,
  themes: appThemes,
});
