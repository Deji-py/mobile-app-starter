import toastConfig from "@/components/ui/toast/toast_config";
import AuthProvider from "@/context/authProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { UnistylesRuntime } from "react-native-unistyles";

export const queryClient = new QueryClient();

const ProtectedScreens = () => {
  const theme = UnistylesRuntime.getTheme();
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
              screenOptions={{
                headerShown: false,
                animation: "none",
                statusBarStyle: "dark",
                navigationBarColor: theme.colors.background,
              }}
            />
            <Toast topOffset={-40} swipeable={false} config={toastConfig} />
          </GestureHandlerRootView>
        </AuthProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default ProtectedScreens;
