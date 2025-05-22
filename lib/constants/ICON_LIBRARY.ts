import iconsize from "@/styles/icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleProp, ViewStyle } from "react-native";

export const ICON_COMPONENTS = {
  Ionicons,
  MaterialIcons,
  FontAwesome,
} as const;

// Icon Type map
export type IconNameMap = {
  Ionicons: keyof typeof Ionicons.glyphMap;
  MaterialIcons: keyof typeof MaterialIcons.glyphMap;
  FontAwesome: keyof typeof FontAwesome.glyphMap;
};

export type IconType = keyof typeof ICON_COMPONENTS;

// For Buttons and Inputs

//  Properly discriminated union for icon props
export type IconProps =
  | {
      iconType: "Ionicons";
      name: IconNameMap["Ionicons"];
      size?: keyof typeof iconsize;
      color?: string;
      style?: StyleProp<ViewStyle>;
    }
  | {
      iconType: "FontAwesome";
      name: IconNameMap["FontAwesome"];
      size?: keyof typeof iconsize;
      color?: string;
      style?: StyleProp<ViewStyle>;
    }
  | {
      iconType: "MaterialIcons";
      name: IconNameMap["MaterialIcons"];
      size?: keyof typeof iconsize;
      color?: string;
      style?: StyleProp<ViewStyle>;
    };

// -------------------------We can extend the libraray
