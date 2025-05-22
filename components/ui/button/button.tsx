import { ICON_COMPONENTS, IconProps } from "@/lib/constants/ICON_LIBRARY";
import iconsize from "@/styles/icons";
import React, { ReactNode } from "react";
import {
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
}) => {
  buttonStyles.useVariants({ size, variant, btnWidth });

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
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[buttonStyles.wrapper, style]}
    >
      <View style={buttonStyles.container}>
        {/* Left Icon */}
        {renderIconLeft ? (
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
        <Text style={[buttonStyles.btnText, textStyle]}>{title}</Text>
        {/* Right Icon */}
        {renderIconRight ? (
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
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
