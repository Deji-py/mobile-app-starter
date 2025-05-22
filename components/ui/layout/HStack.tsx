// components/HStack.tsx
import React from "react";
import { View, ViewStyle } from "react-native";

interface HStackProps {
  spacing?: number;
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  children: React.ReactNode;
  style?: ViewStyle;
}

const HStack: React.FC<HStackProps> = ({
  spacing = 0,
  align = "center",
  justify = "flex-start",
  children,
  style,
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: align,
          justifyContent: justify,
        },
        style,
      ]}
    >
      {childrenArray.map((child, index) => (
        <View
          key={index}
          style={{
            marginRight: index !== childrenArray.length - 1 ? spacing : 0,
            flex: 1,
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};

export default HStack;
