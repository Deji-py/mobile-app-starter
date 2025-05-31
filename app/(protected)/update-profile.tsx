import AppHeader from "@/components/ui/header/appheader";
import UpdateProfileForm from "@/features/profile/UpdateProfileForm";
import typography from "@/styles/typography";
import React from "react";
import { Text, View } from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";

const UpdateProfile = () => {
  const theme = UnistylesRuntime.getTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppHeader />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text style={typography.h4}>Whats Your Name</Text>
        <UpdateProfileForm />
      </View>
    </View>
  );
};

export default UpdateProfile;
