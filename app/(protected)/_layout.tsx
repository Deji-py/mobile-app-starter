import { useAuth } from "@/context/authProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Redirect, Stack } from "expo-router";
import React from "react";

const ProtectedLayout = () => {
  const { session, isReady } = useAuth();

  if (!isReady) {
    return null;
  }

  if (!session) return <Redirect href={"/(auth)/login"} />;

  return (
    <BottomSheetModalProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </BottomSheetModalProvider>
  );
};

export default ProtectedLayout;
