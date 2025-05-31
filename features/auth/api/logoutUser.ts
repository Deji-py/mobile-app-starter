import { LOGOUT } from "@/services/apiEndpoints";
import api from "@/services/axiosInstance";

const logoutUser = async () => {
  try {
    const response = await api.post(`${LOGOUT}`);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || "Signout failed";
    throw new Error(errorMessage);
  }
};

export default logoutUser;
