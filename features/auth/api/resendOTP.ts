import { RESEND_OTP } from "@/services/apiEndpoints";
import api from "@/services/axiosInstance";

export interface resendOTPPayload {
  email: string;
  phone?: string;
  type: "email" | "phone";
}

const resendOTP = async (payload: resendOTPPayload) => {
  try {
    const response = await api.post(RESEND_OTP, payload);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || "Verification failed";
    throw new Error(errorMessage);
  }
};

export default resendOTP;
