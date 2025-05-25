import { useAuth } from "@/context/authProvider";
import ProfileDetails from "@/features/profile/ProfileDetails";
import ProfileHeader from "@/features/profile/ProfileHeader";
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const Profile = () => {
  const { logout } = useAuth();
  return (
    <View style={styles.screen}>
      <ProfileHeader />
      <ProfileDetails />
    </View>
  );
};

const styles = StyleSheet.create(({ colors, spacing }) => ({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
}));

export default Profile;
