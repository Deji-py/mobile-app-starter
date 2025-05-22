import { Image } from "expo-image";
import React, { useState } from "react";
import {
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import avatarStyles from "./variant";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xs" | "xxs";
  shape?: "circle" | "rounded" | "square";
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  size = "md",
  shape = "circle",
  style,
  imageStyle,
  textStyle,
}) => {
  const [imageError, setImageError] = useState(false);

  const initials = alt
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);

  avatarStyles.useVariants({ size, shape });

  return (
    <View style={[avatarStyles.container, , style]}>
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
    </View>
  );
};

export default Avatar;
