import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";
import { z } from "zod";

import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import Divider from "@/components/ui/layout/Divider";
import VStack from "@/components/ui/layout/VStack";
import { useAuth } from "@/context/authProvider";
import spacing from "@/styles/spacing";

// Schema
const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type IFormInput = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const theme = UnistylesRuntime.getTheme();
  const router = useRouter();
  const { signup } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: IFormInput) => {
    await signup({ email: data.email, password: data.password, metadata: {} });
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
          />
          <Input
            type="password"
            placeholder="Password"
            withValidation
            control={control}
            name="password"
            errors={errors}
            iconRight={{ iconType: "Ionicons", name: "eye" }}
            secureTextEntry
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            withValidation
            control={control}
            name="confirmPassword"
            errors={errors}
            iconRight={{ iconType: "Ionicons", name: "eye" }}
            secureTextEntry
          />
        </VStack>

        <Button
          onPress={handleSubmit(onSubmit)}
          loading={isSubmitting}
          disabled={isSubmitting}
          title="Create Account"
          style={{ marginTop: spacing.md }}
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
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => router.push("/(auth)/login")}
              style={{ marginLeft: spacing.sm }}
            >
              <Text style={styles.footerActionText}>Login</Text>
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

export default SignupForm;
