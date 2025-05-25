import React from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { OtpInput } from "react-native-otp-entry";

interface OTPInputProps {
  numberOfDigits?: number;
  focusColor?: string;
  blurColor?: string;
  borderRadius?: number;
  onTextChange?: (text: string) => void;
  onFilled?: (text: string) => void;
  containerStyle?: ViewStyle;
  inputsContainerStyle?: ViewStyle;
  pinCodeContainerStyle?: ViewStyle;
  pinCodeTextStyle?: TextStyle;
  focusStickStyle?: ViewStyle;
  focusedPinCodeContainerStyle?: ViewStyle;
  textInputProps?: object;
}

const OTPInput: React.FC<OTPInputProps> = ({
  numberOfDigits = 6,
  focusColor = "#000",
  borderRadius = 8,
  onTextChange,
  onFilled,
  containerStyle,
  inputsContainerStyle,
  pinCodeContainerStyle,
  pinCodeTextStyle,
  focusStickStyle,
  focusedPinCodeContainerStyle,
  textInputProps,
}) => {
  return (
    <OtpInput
      numberOfDigits={numberOfDigits}
      focusColor={focusColor}
      onTextChange={onTextChange}
      onFilled={onFilled}
      theme={{
        containerStyle: { ...styles.container, ...containerStyle },
        inputsContainerStyle: {
          ...styles.inputsContainer,
          ...inputsContainerStyle,
        },
        pinCodeContainerStyle: {
          ...styles.pinCodeContainer,
          borderRadius,
          ...pinCodeContainerStyle,
        },
        pinCodeTextStyle: { ...styles.pinCodeText, ...pinCodeTextStyle },
        focusStickStyle: { ...styles.focusStick, ...focusStickStyle },
        focusedPinCodeContainerStyle: {
          ...styles.focusedPinCodeContainer,
          borderColor: focusColor,
          ...focusedPinCodeContainerStyle,
        },
      }}
      textInputProps={textInputProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pinCodeContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
  },
  pinCodeText: {
    fontSize: 18,
    color: "#000",
  },
  focusStick: {
    height: 2,
    backgroundColor: "#000",
    marginTop: 5,
  },
  focusedPinCodeContainer: {
    borderWidth: 1,
  },
});

export default OTPInput;
