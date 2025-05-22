import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UnistylesRuntime } from "react-native-unistyles";

export default function RootLayout() {
  const theme = UnistylesRuntime.getTheme();
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarStyle: "dark",
          navigationBarColor: theme.colors.background,
          animation: "fade",
        }}
      />
    </SafeAreaProvider>
  );
}
