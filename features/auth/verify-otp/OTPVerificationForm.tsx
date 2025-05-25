import Button from "@/components/ui/button/button";
import Card from "@/components/ui/layout/Card";
import VStack from "@/components/ui/layout/VStack";
import OTPInput from "@/components/ui/otp-input/otp-input";
import { useAuth } from "@/context/authProvider";
import spacing from "@/styles/spacing";
import typography from "@/styles/typography";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NUMBER_OF_INPUTS = 6;

const OTPVerificationForm = () => {
  const [otp, setOTP] = useState("");
  const [verifying, setVerifying] = useState(false);
  const { verifyOTP } = useAuth();

  const params = useLocalSearchParams();
  const email = params.email as string | undefined;

  const handleVerifyOTP = async () => {
    if (!email) {
      console.error("Email param is missing");
      return;
    }
    if (otp.length === 0) {
      console.error("OTP is empty");
      return;
    }
    setVerifying(true);
    try {
      await verifyOTP({ email, otp, type: "email" });
    } finally {
      setVerifying(false);
    }
  };

  return (
    <View>
      <Card>
        <View style={{ marginBottom: spacing["2xl"], width: "100%" }}>
          <VStack justify="center" align="center">
            <Text style={styles.mainText}>Verify OTP</Text>
            <Text
              style={[
                typography.body,
                { opacity: 0.5, textAlign: "center", marginTop: 2 },
              ]}
            >
              We have sent an OTP to your email
            </Text>
          </VStack>
        </View>
        <VStack spacing={spacing.lg}>
          <OTPInput
            numberOfDigits={NUMBER_OF_INPUTS}
            onTextChange={(text) => setOTP(text)}
          />
          <Button
            disabled={otp.length < NUMBER_OF_INPUTS || verifying}
            loading={verifying}
            title={"Verify OTP"}
            onPress={handleVerifyOTP}
          />
          <Text
            style={[
              typography.body,
              { opacity: 0.5, textAlign: "center", paddingRight: spacing.sm },
            ]}
          >
            Didn't get an OTP?{" "}
            <TouchableOpacity
              style={{ paddingHorizontal: 5 }}
              onPress={() => {
                /* add resend logic */
              }}
            >
              <Text style={typography.body}>Resend</Text>
            </TouchableOpacity>
          </Text>
        </VStack>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    ...typography.h4,
    fontWeight: "800",
    textAlign: "center",
    marginTop: spacing.md,
  },
});

export default OTPVerificationForm;
