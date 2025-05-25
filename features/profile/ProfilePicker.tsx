import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, useMemo } from "react";
import { Text, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

const ProfilePicker = forwardRef((_, ref) => {
  const snapPoints = useMemo(() => ["20%"], []);
  const theme = UnistylesRuntime.getTheme();

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        {...props}
        appearsOnIndex={1}
      />
    ),
    []
  );

  return (
    <View>
      <BottomSheetModal
        ref={ref as any}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        index={1}
        enableOverDrag={false}
        style={{
          borderTopEndRadius: 10,
          borderTopLeftRadius: 10,
        }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.text }}
        handleStyle={{
          borderTopEndRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={{ color: theme.colors.text }}>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
});

const styles = StyleSheet.create(({ spacing, colors }) => ({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
}));

export default ProfilePicker;
