import React from "react";
import { View } from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";

const Divider = () => {
  const theme = UnistylesRuntime.getTheme();
  return (
    <View
      style={{
        height: 1,
        backgroundColor: theme.colors.swatches?.gray?.[200],
        width: "100%",
        flex: 1,
      }}
    ></View>
  );
};

export default Divider;
