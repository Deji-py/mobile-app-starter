import IconButton from "@/components/ui/icon_button/iconButton";
import spacing from "@/styles/spacing";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";
import AccountSwitcher from "./components/AccountSwitcher";
import LoginForm from "./components/LoginForm";

const LoginView = () => {
  const [existingAccount, setExistingAccount] = useState(true);
  const theme = UnistylesRuntime.themeName;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        {!existingAccount ? (
          <IconButton
            iconType="Ionicons"
            name="arrow-back"
            onPress={() => setExistingAccount(true)}
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
        {existingAccount ? (
          <AccountSwitcher
            handleSwichAccount={() => setExistingAccount(false)}
          />
        ) : (
          <LoginForm />
        )}
      </View>

      <View style={styles.footer}>
        {existingAccount ? (
          <>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <TouchableOpacity style={{ marginLeft: spacing.sm }}>
              <Text style={styles.footerActionText}>Signup</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.footerText}> terms and privacy </Text>
        )}
      </View>
    </SafeAreaView>
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

export default LoginView;
