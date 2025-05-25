import React from "react";
import { View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create(({ colors, radius, spacing }) => ({
  card: {
    borderRadius: radius.md,
    backgroundColor: colors.background,
    padding: spacing.md,
    elevation: 2,
    shadowColor: colors.swatches?.gray?.[100],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderWidth: 1,
    borderColor: colors.swatches?.gray?.[100],
  },
}));

export default Card;
