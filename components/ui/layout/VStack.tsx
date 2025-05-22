// components/VStack.tsx
import React from "react";
import { View, ViewStyle } from "react-native";

interface VStackProps {
  spacing?: number;
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  children: React.ReactNode;
  style?: ViewStyle;
}

const VStack: React.FC<VStackProps> = ({
  spacing = 0,
  align = "flex-start",
  justify = "flex-start",
  children,
  style,
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <View
      style={[
        {
          flexDirection: "column",
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
            marginBottom: index !== childrenArray.length - 1 ? spacing : 0,
            width: "100%",
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};

export default VStack;
