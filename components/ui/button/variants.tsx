import { StyleSheet } from "react-native-unistyles";

const buttonStyles = StyleSheet.create(
  ({ colors, spacing, radius, typography }) => ({
    wrapper: {
      variants: {
        btnWidth: {
          flex: {
            width: "100%",
          },
          fit: {
            width: "auto",
          },
        },
      },
    },
    container: {
      borderRadius: radius.md,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: spacing.xs,
      variants: {
        size: {
          small: {
            paddingVertical: spacing.xs,
            paddingHorizontal: spacing.lg,
          },
          medium: {
            paddingVertical: spacing.lg - 2.5,
            paddingHorizontal: spacing.xl,
          },
          large: {
            paddingVertical: spacing.lg,
            paddingHorizontal: spacing["2xl"],
          },
        },
        variant: {
          solid: {
            backgroundColor: colors.primary,
          },
          outline: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: colors.primary,
          },
          ghost: {
            backgroundColor: "transparent",
          },
        },
        disabled: {
          true: {
            opacity: 0.5,
          },
        },
      },
    },
    btnText: {
      ...typography.button,
      textAlign: "center",
      fontWeight: "600",
      variants: {
        size: {
          small: {
            fontSize: 14,
          },
          medium: {
            fontSize: 16,
          },
          large: {
            fontSize: 18,
          },
        },
        variant: {
          solid: {
            color: colors.primary_foreground,
          },
          outline: {
            color: colors.primary,
          },
          ghost: {
            color: colors.primary,
          },
        },
      },
    },
    iconWrapper: {
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: spacing.sm,
    },
  })
);

export default buttonStyles;
