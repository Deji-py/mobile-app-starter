import { LOGIN } from "@/services/apiEndpoints";
import api from "@/services/axiosInstance";

export interface LoginWithEmailPayload {
  email: string;
  password: string;
}

const loginUser = async (payload: LoginWithEmailPayload) => {
  try {
    const response = await api.post(LOGIN, payload);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || "Login failed";
    throw new Error(errorMessage);
  }
};

export default loginUser;
