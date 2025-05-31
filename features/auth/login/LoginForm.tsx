import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { z } from "zod";

import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import Divider from "@/components/ui/layout/Divider";
import VStack from "@/components/ui/layout/VStack";
import { useAuth } from "@/context/authProvider";
import spacing from "@/styles/spacing";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

// Define zod schema
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Infer TypeScript type from schema
type IFormInput = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const theme = UnistylesRuntime.getTheme();
  const router = useRouter();
  const { login } = useAuth();

  // Setup React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    resolver: zodResolver(loginSchema),
  });

  // Submit handler
  const onSubmit = async (data: IFormInput) => {
    await login({ email: data.email, password: data.password });
  };

  return (
    <View style={{ width: "100%" }}>
      <VStack spacing={spacing["2xl"]}>
        <VStack spacing={spacing.md}>
          <Input
            placeholder="Email"
            withValidation
            control={control}
            name="email"
            errors={errors}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            type="password"
            placeholder="Password"
            withValidation
            control={control}
            name="password"
            errors={errors}
            secureTextEntry
            iconRight={{
              iconType: "Ionicons",
              name: "eye",
            }}
          />
        </VStack>

        <Text style={styles.forgotPassword}>Forgot Password</Text>

        <Button
          onPress={handleSubmit(onSubmit)}
          loading={isSubmitting}
          disabled={isSubmitting}
          title={"Log in"}
          style={{ marginTop: spacing.md }}
        />

        <Button
          iconLeft={{
            iconType: "Ionicons",
            name: "logo-facebook",
            size: "md",
            color: "#1877F2",
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
            <TouchableOpacity
              onPress={() => router.push("/(auth)/signup")}
              style={{ marginLeft: spacing.sm }}
            >
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
