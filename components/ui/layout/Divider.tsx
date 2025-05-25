import React from "react";
import { View } from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";

const Divider = ({ flex = 1 }: { flex?: number }) => {
  const theme = UnistylesRuntime.getTheme();
  return (
    <View
      style={{
        height: 1,
        backgroundColor: theme.colors.swatches?.gray?.[200],
        width: "100%",
        flex: flex,
      }}
    ></View>
  );
};

export default Divider;
