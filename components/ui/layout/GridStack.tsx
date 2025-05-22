// components/GridStack.tsx
import React from "react";
import { View, ViewStyle } from "react-native";

interface GridStackProps {
  columns: number;
  spacing?: number;
  children: React.ReactNode;
  style?: ViewStyle;
}

const GridStack: React.FC<GridStackProps> = ({
  columns,
  spacing = 0,
  children,
  style,
}) => {
  const childrenArray = React.Children.toArray(children);
  const rows = [];

  for (let i = 0; i < childrenArray.length; i += columns) {
    rows.push(childrenArray.slice(i, i + columns));
  }

  return (
    <View style={[{ flexDirection: "column" }, style]}>
      {rows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            flexDirection: "row",
            marginBottom: rowIndex !== rows.length - 1 ? spacing : 0,
          }}
        >
          {row.map((child, colIndex) => (
            <View
              key={colIndex}
              style={{
                flex: 1,
                marginRight: colIndex !== row.length - 1 ? spacing : 0,
              }}
            >
              {child}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default GridStack;
