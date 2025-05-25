import { StyleSheet } from "react-native-unistyles";

const avatarStyles = StyleSheet.create(({ colors, radius }) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: colors.swatches?.gray?.[100],

    variants: {
      size: {
        sm: {
          width: 48,
          height: 48,
        },
        md: {
          width: 64,
          height: 64,
        },
        lg: {
          width: 72,
          height: 72,
        },
        xlg: {
          width: 84,
          height: 84,
        },
        xxlg: {
          width: 100,
          height: 100,
        },
        xs: {
          width: 28,
          height: 28,
        },
        xxs: {
          width: 24,
          height: 24,
        },
      },
      shape: {
        circle: {
          borderRadius: 9999,
        },
        rounded: {
          borderRadius: radius.md,
        },
        square: {
          borderRadius: 0,
        },
      },
    },
  },
  placeholder: {
    backgroundColor: colors.swatches?.gray?.[200],
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: colors.swatches?.gray?.[700],
    fontWeight: "600",
    textAlign: "center",
    variants: {
      size: {
        sm: {
          fontSize: 12,
        },
        md: {
          fontSize: 16,
        },
        lg: {
          fontSize: 20,
        },
      },
    },
  },
}));

export default avatarStyles;
