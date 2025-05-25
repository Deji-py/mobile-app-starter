import spacing from "@/styles/spacing";
import { Header, HeaderOptions } from "@react-navigation/elements";
import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface CustomHeaderProps extends HeaderOptions {
  containerStyle?: ViewStyle;
  title?: string;
  renderLeft?: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
}

const AppHeader: React.FC<CustomHeaderProps> = ({
  containerStyle,
  title,
  renderLeft,
  renderRight,
  ...rest
}) => {
  return (
    <Header
      {...rest}
      title={title as string}
      headerLeft={renderLeft}
      headerRight={renderRight}
      headerLeftContainerStyle={{
        paddingLeft: spacing.md,
      }}
      headerStyle={{ backgroundColor: styles.headerStyle.backgroundColor }}
      headerBackgroundContainerStyle={styles.headerStyle}
      headerTitle={() => (
        <View style={[styles.titleContainer, containerStyle]}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create(({ spacing, typography, colors }) => ({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.md,
  },
  titleText: {
    ...typography.bodylg,
    color: colors.text,
  },
  headerStyle: {
    backgroundColor: colors.background,
  },
}));

export default AppHeader;
