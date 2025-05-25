import { Image } from "expo-image";
import React, { useState } from "react";
import {
  ColorValue,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import avatarStyles from "./variant";

type colorType = readonly [ColorValue, ColorValue, ...ColorValue[]];

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xs" | "xxs" | "xlg" | "xxlg";
  shape?: "circle" | "rounded" | "square";
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  withRing?: boolean;
  ringColor?: colorType;
}

import { LinearGradient } from "expo-linear-gradient";

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  size = "md",
  shape = "circle",
  style,
  imageStyle,
  textStyle,
  withRing = false,
  ringColor = ["#A60F93", "#D91A46", "#FBAA47", "#ff0000"],
}) => {
  const [imageError, setImageError] = useState(false);

  const initials = alt
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);

  avatarStyles.useVariants({ size, shape });

  const ringSizeMap = {
    xxs: 24,
    xs: 28,
    sm: 48,
    md: 64,
    lg: 72,
    xlg: 84,
    xxlg: 100,
  };

  const ringSize = ringSizeMap[size] || 64;
  const ringWidth = 2; // Adjust the ring width as needed

  const ringStyle: ViewStyle = {
    width: ringSize + ringWidth * 2,
    height: ringSize + ringWidth * 2,
    borderRadius:
      shape === "circle" ? (ringSize + ringWidth * 2) / 2 : undefined,
    justifyContent: "center",
    alignItems: "center",
  };

  const avatarContent = (
    <>
      {src && !imageError ? (
        <Image
          source={{ uri: src }}
          style={[avatarStyles.image, imageStyle]}
          onError={() => setImageError(true)}
        />
      ) : (
        <View style={[avatarStyles.image, avatarStyles.placeholder]}>
          <Text style={[avatarStyles.placeholderText, textStyle]}>
            {initials || "?"}
          </Text>
        </View>
      )}
    </>
  );

  return withRing ? (
    <LinearGradient
      colors={ringColor as colorType}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={[ringStyle, style]}
    >
      {avatarContent}
    </LinearGradient>
  ) : (
    <View style={[avatarStyles.container, style]}>{avatarContent}</View>
  );
};

export default Avatar;
