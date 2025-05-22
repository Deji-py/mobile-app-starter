import Avatar from "@/components/ui/avatar/avatar";
import Button from "@/components/ui/button/button";
import VStack from "@/components/ui/layout/VStack";
import spacing from "@/styles/spacing";
import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const AccountSwitcher = ({
  handleSwichAccount,
}: {
  handleSwichAccount: () => void;
}) => {
  return (
    <VStack
      spacing={spacing.md}
      style={{ width: "100%", paddingHorizontal: spacing["2xl"] }}
    >
      <VStack justify="center" spacing={spacing.md} align="center">
        <Avatar
          alt="Avatar"
          src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-woman-with-curly-hair-looking-camera_1098-20801.jpg?uid=R31019825&ga=GA1.1.63791249.1729798000&semt=ais_hybrid&w=740"
          size="lg"
        />
        <Text style={styles.avatarText}>jacob_w</Text>
      </VStack>
      <Button title="Log in" btnWidth="flex" size="medium" />
      <Button
        onPress={handleSwichAccount}
        title="Switch Accounts"
        btnWidth="flex"
        variant="ghost"
      />
    </VStack>
  );
};

const styles = StyleSheet.create(({ typography, spacing, colors }) => ({
  avatarText: {
    ...typography.body,
    fontWeight: "600",
    textAlign: "center",
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
  },
  footer: {
    paddingVertical: spacing["3xl"],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default AccountSwitcher;
