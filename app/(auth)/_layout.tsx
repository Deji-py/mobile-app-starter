import IconButton from "@/components/ui/icon_button/iconButton";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

import { Slot, usePathname, useRouter } from "expo-router";

const LoginLayout = () => {
  const theme = UnistylesRuntime.themeName;

  const pathname = usePathname();
  const isLoginScreen = pathname === "/login";
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          {isLoginScreen ? (
            <IconButton
              iconType="Ionicons"
              name="arrow-back"
              onPress={() =>
                router.canGoBack()
                  ? router.back()
                  : router.navigate("/accounts")
              }
            />
          ) : null}
        </View>
        <View style={styles.container}>
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
          <Slot />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> terms and privacy </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create(({ typography, spacing, colors }) => ({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 100,
    marginBottom: 20,
  },
  screen: {
    flex: 1,
    paddingHorizontal: spacing["xl"],
    backgroundColor: colors.background,
  },
  icon: {
    color: colors.text,
  },

  footerText: {
    ...typography.body,
    fontWeight: "600",
    color: colors.swatches?.gray?.[500],
  },
  footerActionText: {
    ...typography.body,
    fontWeight: "600",
    color: colors.primary,
  },
  footer: {
    paddingVertical: spacing["3xl"],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingVertical: spacing["sm"],
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

export default LoginLayout;
