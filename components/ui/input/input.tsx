import { ICON_COMPONENTS, IconProps } from "@/lib/constants/ICON_LIBRARY";
import iconsize from "@/styles/icons";
import React, { ReactNode } from "react";
import { TextInput, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

interface TextInputProps {
  iconLeft?: IconProps;
  iconRight?: IconProps;
  renderIconLeft?: ReactNode;
  renderIconRight?: ReactNode;
  placeholder?: string;
}

const Input = ({
  iconLeft,
  renderIconLeft,
  iconRight,
  renderIconRight,
  placeholder,
}: TextInputProps) => {
  const theme = UnistylesRuntime.getTheme();

  // Left Icon
  const LeftIcon = iconLeft?.iconType
    ? ICON_COMPONENTS[iconLeft.iconType]
    : null;
  const LeftSize = iconsize[(iconLeft?.size as keyof typeof iconsize) || "sm"];
  const LeftColor = iconLeft?.color || theme.colors.swatches?.gray?.[500];

  // Right Icon
  const RightIcon = iconRight?.iconType
    ? ICON_COMPONENTS[iconRight.iconType]
    : null;
  const RightSize =
    iconsize[(iconRight?.size as keyof typeof iconsize) || "sm"];
  const RightColor = iconRight?.color || theme.colors.swatches?.gray?.[500];

  return (
    <View style={styles.container}>
      {/* Left Icon */}
      {renderIconLeft ? (
        renderIconLeft
      ) : iconLeft && LeftIcon ? (
        <View style={styles.iconWrapper}>
          <LeftIcon
            size={LeftSize}
            name={iconLeft.name as any}
            color={LeftColor}
            style={iconLeft.style as any}
          />
        </View>
      ) : null}

      {/* Text Input */}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={theme.colors.swatches?.gray?.[400]}
        placeholder={placeholder}
      />

      {/* Right Icon */}
      {renderIconRight ? (
        renderIconRight
      ) : iconRight && RightIcon ? (
        <View style={styles.iconWrapper}>
          <RightIcon
            size={RightSize}
            name={iconRight.name as any}
            color={RightColor}
            style={iconRight.style as any}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create(({ spacing, radius, colors, typography }) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderRadius: radius.md,
    borderColor: colors.swatches?.gray?.[200],
    backgroundColor: colors.swatches?.gray?.[50],
    paddingHorizontal: spacing.xs,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.sm,
  },
  textInput: {
    ...typography.bodylg,
    flex: 1,
    paddingVertical: spacing.md + 1,
    paddingHorizontal: spacing.sm,
    color: colors.text,
    backgroundColor: "transparent",
  },
}));

export default Input;
