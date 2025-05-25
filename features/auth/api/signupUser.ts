import { SIGNUP } from "@/services/apiEndpoints";
import api from "@/services/axiosInstance";

export interface SignupWithEmailPayload {
  email: string;
  password: string;
  metadata: {};
}

const signupUser = async (payload: SignupWithEmailPayload) => {
  try {
    const response = await api.post(SIGNUP, payload);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || "Signup failed";
    throw new Error(errorMessage);
  }
};

export default signupUser;
