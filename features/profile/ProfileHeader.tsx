import AppHeader from "@/components/ui/header/appheader";
import IconButton from "@/components/ui/icon_button/iconButton";
import HStack from "@/components/ui/layout/HStack";
import { useAuth } from "@/context/authProvider";
import iconsize from "@/styles/icons";
import spacing from "@/styles/spacing";
import typography from "@/styles/typography";
import Feather from "@expo/vector-icons/Feather";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";
import ProfilePicker from "./ProfilePicker";

const ProfileHeader = () => {
  const { logout } = useAuth();
  const theme = UnistylesRuntime.getTheme();
  const profilePickerRef = useRef<BottomSheetModal>(null);

  return (
    <React.Fragment>
      <AppHeader
        headerShadowVisible={false}
        renderLeft={() => (
          <TouchableOpacity
            onPress={() => {
              profilePickerRef.current?.present();
            }}
            style={{ paddingLeft: spacing.sm }}
          >
            <HStack spacing={spacing.sm}>
              <Text style={[typography.h4, { fontWeight: "700" }, styles.text]}>
                De.ji
              </Text>
              <Feather
                size={iconsize.sm}
                color={theme.colors.text}
                name="chevron-down"
              />
            </HStack>
          </TouchableOpacity>
        )}
        renderRight={() => (
          <HStack style={{ paddingRight: spacing.md }} spacing={spacing.md}>
            <IconButton iconType="Feather" name="log-out" onPress={logout} />
            <IconButton iconType="Feather" name="plus-square" />
            <IconButton iconType="Feather" name="menu" />
          </HStack>
        )}
      />

      <ProfilePicker ref={profilePickerRef} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create(({ colors }) => ({
  text: {
    color: colors.text,
  },
}));

export default ProfileHeader;
