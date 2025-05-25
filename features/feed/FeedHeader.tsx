import AppHeader from "@/components/ui/header/appheader";
import IconButton from "@/components/ui/icon_button/iconButton";
import HStack from "@/components/ui/layout/HStack";
import spacing from "@/styles/spacing";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

const FeedHeader = () => {
  const theme = UnistylesRuntime.themeName;
  return (
    <AppHeader
      headerShadowVisible={false}
      renderRight={() => (
        <HStack style={styles.iconsRight} spacing={spacing.md}>
          <IconButton iconType="Feather" size="md" name="heart" />
          <IconButton iconType="Feather" size="md" name="message-circle" />
        </HStack>
      )}
      renderLeft={() => (
        <View style={styles.logo}>
          {theme === "light" ? (
            <Image
              contentFit="contain"
              source={require("@/assets/images/brand/instagram_logo.png")}
              alt="instagram logo"
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <Image
              contentFit="contain"
              source={require("@/assets/images/brand/instagram_logo_light.png")}
              alt="instagram logo"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create(({ spacing }) => ({
  logo: {
    width: 120,
    height: 100,
  },

  iconsRight: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingRight: spacing.md,
  },
}));
export default FeedHeader;
