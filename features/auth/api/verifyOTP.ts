import { VERIFY_OTP } from "@/services/apiEndpoints";
import api from "@/services/axiosInstance";

export interface VerifyOTPPayload {
  email: string;
  phone?: string;
  otp: string;
  type: "email" | "phone";
}

const verifyOTP = async (payload: VerifyOTPPayload) => {
  try {
    const response = await api.post(VERIFY_OTP, payload);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || "Signup failed";
    throw new Error(errorMessage);
  }
};

export default verifyOTP;
