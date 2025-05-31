import Button from "@/components/ui/button/button";
import FeedHeader from "@/features/feed/FeedHeader";
import Stories from "@/features/story/Stories";
import spacing from "@/styles/spacing";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const Homepage = () => {
  const router = useRouter();
  return (
    <View style={styles.screen}>
      <FeedHeader />
      <Stories />
      <View style={{ paddingHorizontal: spacing.md, marginTop: 20 }}>
        <Button
          title="Update Profile"
          onPress={() => router.push("/update-profile")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create(({ colors, spacing }) => ({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
}));

export default Homepage;
