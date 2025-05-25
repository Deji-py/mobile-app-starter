import { ICON_COMPONENTS, IconProps } from "@/lib/constants/ICON_LIBRARY";
import iconsize from "@/styles/icons";
import React, { ReactNode } from "react";
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";
import buttonStyles from "./variants";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  size?: "small" | "medium" | "large";
  variant?: "solid" | "outline" | "ghost";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  btnWidth?: "flex" | "fit";
  iconLeft?: IconProps;
  iconRight?: IconProps;
  renderIconLeft?: ReactNode;
  renderIconRight?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  size = "medium",
  variant = "solid",
  style,
  textStyle,
  btnWidth = "fit",
  iconLeft,
  iconRight,
  renderIconLeft,
  renderIconRight,
  disabled,
  loading = false,
  loadingText,
}) => {
  buttonStyles.useVariants({
    size,
    variant,
    btnWidth,
    disabled: disabled || loading,
  });

  const theme = UnistylesRuntime.getTheme();

  // Determine spinner color based on variant
  const getSpinnerColor = () => {
    switch (variant) {
      case "solid":
        return theme.colors.primary_foreground || "#ffffff";
      case "outline":
      case "ghost":
        return theme.colors.primary || "#3b82f6";
      default:
        return theme.colors.primary_foreground || "#ffffff";
    }
  };

  // Determine spinner size based on button size
  const getSpinnerSize = (): "small" | "large" => {
    switch (size) {
      case "small":
        return "small";
      case "medium":
      case "large":
      default:
        return "small";
    }
  };

  // Left Icon (hidden when loading)
  const LeftIcon = iconLeft?.iconType
    ? ICON_COMPONENTS[iconLeft.iconType]
    : null;
  const LeftSize = iconsize[(iconLeft?.size as keyof typeof iconsize) || "sm"];
  const LeftColor = iconLeft?.color || theme.colors.swatches?.gray?.[500];

  // Right Icon (hidden when loading)
  const RightIcon = iconRight?.iconType
    ? ICON_COMPONENTS[iconRight.iconType]
    : null;
  const RightSize =
    iconsize[(iconRight?.size as keyof typeof iconsize) || "sm"];
  const RightColor = iconRight?.color || theme.colors.swatches?.gray?.[500];

  // Display text - use loadingText if provided and loading, otherwise use title
  const displayText = loading && loadingText ? loadingText : title;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={disabled || loading ? 1 : 0.8}
      disabled={disabled || loading}
      style={[buttonStyles.wrapper, style]}
    >
      <View style={buttonStyles.container}>
        {/* Loading Spinner (replaces left icon when loading) */}
        {loading ? (
          <View style={buttonStyles.iconWrapper}>
            <ActivityIndicator
              style={{ position: "absolute" }}
              size={getSpinnerSize()}
              color={getSpinnerColor()}
            />
          </View>
        ) : /* Left Icon (only show when not loading) */
        renderIconLeft ? (
          renderIconLeft
        ) : iconLeft && LeftIcon ? (
          <View style={buttonStyles.iconWrapper}>
            <LeftIcon
              size={LeftSize}
              name={iconLeft.name as any}
              color={LeftColor}
              style={iconLeft.style as any}
            />
          </View>
        ) : null}

        <Text style={[buttonStyles.btnText, textStyle]}>{displayText}</Text>

        {/* Right Icon (hidden when loading) */}
        {!loading &&
          (renderIconRight ? (
            renderIconRight
          ) : iconRight && RightIcon ? (
            <View style={buttonStyles.iconWrapper}>
              <RightIcon
                size={RightSize}
                name={iconRight.name as any}
                color={RightColor}
                style={iconRight.style as any}
              />
            </View>
          ) : null)}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
