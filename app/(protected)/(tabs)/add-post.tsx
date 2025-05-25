import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const AddPost = () => {
  return (
    <View style={styles.screen}>
      <Text>AddPost</Text>
    </View>
  );
};

const styles = StyleSheet.create(({ colors, spacing }) => ({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
}));

export default AddPost;
