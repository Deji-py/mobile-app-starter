// Define the structure for gray shades
interface GrayShades {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

// Define the structure for swatches, making it optional
interface Swatches {
  gray?: GrayShades;
}

// Define the AppColors interface with an optional swatches property
interface AppColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  primary_foreground: string;
  swatches?: Swatches;
}

// Define the actual swatches object
const swatches: Swatches = {
  gray: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
};

// Define the AppColors object, including swatches
const appColors: AppColors = {
  primary: "#1877F2",
  secondary: "#602350",
  background: "#FFFFFF",
  text: "#000000",
  primary_foreground: "#FFFFFF",
  swatches,
};

export default appColors;
