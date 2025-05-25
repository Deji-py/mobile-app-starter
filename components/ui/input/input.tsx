import { ICON_COMPONENTS, IconProps } from "@/lib/constants/ICON_LIBRARY";
import iconsize from "@/styles/icons";
import React, { ReactNode, useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import {
  Pressable,
  TextInputProps as RNTextInputProps,
  Text,
  TextInput,
  View,
} from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

interface InputProps extends Partial<RNTextInputProps> {
  iconLeft?: IconProps;
  iconRight?: IconProps;
  renderIconLeft?: ReactNode;
  renderIconRight?: ReactNode;
  placeholder?: string;

  // New prop for input type
  type?: "text" | "password";

  // React Hook Form props for validation integration
  withValidation?: boolean;
  control?: Control<any>;
  name?: string;
  rules?: any;
  errors?: FieldErrors;

  // Controlled input props (when not using validation)
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
}

const Input = ({
  iconLeft,
  renderIconLeft,
  iconRight,
  renderIconRight,
  placeholder,
  value,
  onChangeText,
  onBlur,
  withValidation = false,
  control,
  name,
  rules,
  errors,
  type = "text",
  ...rest
}: InputProps) => {
  const theme = UnistylesRuntime.getTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = type === "password";

  // Left Icon
  const LeftIcon = iconLeft?.iconType
    ? ICON_COMPONENTS[iconLeft.iconType]
    : null;
  const LeftSize = iconsize[(iconLeft?.size as keyof typeof iconsize) || "sm"];
  const LeftColor = iconLeft?.color || theme.colors.swatches?.gray?.[500];

  // Right Icon (custom toggle for password)
  const RightIcon = iconRight?.iconType
    ? ICON_COMPONENTS[iconRight.iconType]
    : null;
  const RightSize =
    iconsize[(iconRight?.size as keyof typeof iconsize) || "sm"];
  const RightColor = iconRight?.color || theme.colors.swatches?.gray?.[500];

  const EyeIcon = ICON_COMPONENTS.Feather;
  const eyeIconName = isPasswordVisible ? "eye-off" : "eye";

  const renderEyeIcon = () => (
    <Pressable onPress={() => setIsPasswordVisible((prev) => !prev)}>
      <View style={styles.iconWrapper}>
        <EyeIcon name={eyeIconName} size={RightSize} color={RightColor} />
      </View>
    </Pressable>
  );

  const renderRightIcon = () => {
    if (isPassword) return renderEyeIcon();
    if (renderIconRight) return renderIconRight;
    if (iconRight && RightIcon) {
      return (
        <View style={styles.iconWrapper}>
          <RightIcon
            size={RightSize}
            name={iconRight.name as any}
            color={RightColor}
            style={iconRight.style as any}
          />
        </View>
      );
    }
    return null;
  };

  if (withValidation && control && name) {
    return (
      <>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
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

              <TextInput
                {...rest}
                style={styles.textInput}
                placeholderTextColor={theme.colors.swatches?.gray?.[400]}
                placeholder={placeholder}
                secureTextEntry={isPassword && !isPasswordVisible}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />

              {/* Right Icon */}
              {renderRightIcon()}
            </View>
          )}
        />
        {errors && errors[name] && (
          <Text style={{ color: "red", marginTop: 4 }}>
            {errors[name]?.message?.toString() || "This field is required"}
          </Text>
        )}
      </>
    );
  }

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

      <TextInput
        {...rest}
        style={styles.textInput}
        placeholderTextColor={theme.colors.swatches?.gray?.[400]}
        placeholder={placeholder}
        secureTextEntry={isPassword && !isPasswordVisible}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />

      {/* Right Icon */}
      {renderRightIcon()}
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
