import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import Divider from "@/components/ui/layout/Divider";
import VStack from "@/components/ui/layout/VStack";
import spacing from "@/styles/spacing";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

const LoginForm = () => {
  const theme = UnistylesRuntime.getTheme();
  const router = useRouter();
  return (
    <View style={{ width: "100%" }}>
      <VStack spacing={spacing["2xl"]}>
        <VStack spacing={spacing.md}>
          <Input placeholder="Email" />
          <Input
            placeholder="Password"
            iconRight={{
              iconType: "Ionicons",
              name: "eye",
            }}
          />
        </VStack>

        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <Button
          onPress={() => router.push("/main/home")}
          title="Log in"
          style={{ marginTop: spacing.md }}
        />
        <Button
          iconLeft={{
            iconType: "Ionicons",
            name: "logo-facebook",
            size: "md",
            color: theme.colors.primary,
          }}
          title="Login with Facebook"
          variant="ghost"
        />

        <View style={{ width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Divider />
            <Text style={styles.or}>Or</Text>
            <Divider />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <Text style={styles.footerText}>Don't have an account?</Text>
            <TouchableOpacity style={{ marginLeft: spacing.sm }}>
              <Text style={styles.footerActionText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create(({ typography, colors }) => ({
  forgotPassword: {
    ...typography.body,
    color: colors.primary,
    textAlign: "right",
    fontWeight: "600",
  },
  footerText: {
    ...typography.body,
    fontWeight: "600",
    color: colors.swatches?.gray?.[500],
  },
  or: {
    ...typography.body,
    textAlign: "center",
    width: "auto",
    paddingHorizontal: spacing.lg,
    color: colors.swatches?.gray?.[500],
  },
  footerActionText: {
    ...typography.body,
    fontWeight: "600",
    color: colors.primary,
  },
}));

export default LoginForm;
