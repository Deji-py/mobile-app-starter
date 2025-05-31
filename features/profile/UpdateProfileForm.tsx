import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import Card from "@/components/ui/layout/Card";
import VStack from "@/components/ui/layout/VStack";
import { useAuth } from "@/context/authProvider";
import spacing from "@/styles/spacing";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { z } from "zod";
import useProfile from "./hooks/useProfile";

const userSchema = z.object({
  firstname: z.string().min(1, "Firstname is required"),
  lastname: z.string().min(1, "Lastname is required"),
});

type IFormInput = z.infer<typeof userSchema>;

const UpdateProfileForm = () => {
  const router = useRouter();
  const { session } = useAuth();
  const { updateProfile } = useProfile();

  // Setup React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    resolver: zodResolver(userSchema),
  });

  // Submit handler
  const onSubmit = async (data: IFormInput) => {
    try {
      await updateProfile({
        payload: {
          firstname: data.firstname,
          lastname: data.lastname,
        },
        user_id: session?.user.id as string,
      });

      Toast.show({
        type: "success",
        text1: "Profile Updated Sucessfully",
      });
      router.replace("/");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: error?.message || "Error occurred while logging in",
      });
    }
  };

  return (
    <View
      style={{ paddingHorizontal: spacing.md, width: "100%", marginTop: 20 }}
    >
      <Card>
        <VStack spacing={spacing.md}>
          <Input
            control={control}
            withValidation
            name="firstname"
            errors={errors}
            placeholder="Firstname"
          />
          <Input
            control={control}
            withValidation
            name="lastname"
            errors={errors}
            placeholder="Lastname"
          />
          <Button
            loading={isSubmitting}
            onPress={handleSubmit(onSubmit)}
            title="Dive In"
          />
        </VStack>
      </Card>
    </View>
  );
};

export default UpdateProfileForm;
