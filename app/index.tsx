import spacing from "@/styles/spacing";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/accounts");
    }, 500);
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="small" color={"#000"} />
    </View>
  );
};

const styles = StyleSheet.create(({ colors }) => ({
  screen: {
    flex: 1,
    paddingHorizontal: spacing["xl"],
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default Login;
