import FeedHeader from "@/features/feed/FeedHeader";
import Stories from "@/features/story/Stories";
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const Homepage = () => {
  return (
    <View style={styles.screen}>
      <FeedHeader />
      <Stories />
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
