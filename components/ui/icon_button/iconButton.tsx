import {
  ICON_COMPONENTS,
  IconNameMap,
  IconType,
} from "@/lib/constants/ICON_LIBRARY";
import iconsize from "@/styles/icons";
import React, { ReactNode } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

interface IconButtonProps<T extends IconType> {
  iconType: T;
  name: IconNameMap[T];
  onPress?: () => void;
  size?: keyof typeof iconsize;
  color?: string;
  style?: StyleProp<ViewStyle>;
  icon?: ReactNode;
}

function IconButton<T extends IconType>({
  iconType,
  name,
  onPress,
  size = "base",
  color,
  style,
  icon,
}: IconButtonProps<T>) {
  const IconComponent = ICON_COMPONENTS[iconType] as any;
  const IconSize = iconsize[size];
  const iconColor = UnistylesRuntime.getTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={onPress}
    >
      {!icon ? (
        <IconComponent
          name={name}
          size={IconSize}
          style={[{ color: color || iconColor.colors.text }]}
        />
      ) : (
        icon
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create(({ colors, spacing }) => ({
  container: {
    padding: spacing.xs,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: colors.text,
  },
}));

export default IconButton;
