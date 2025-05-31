import { GET_PROFILE } from "@/services/apiEndpoints";
import { authApi } from "@/services/axiosInstance";

const fetchProfile = async (user_id: string) => {
  try {
    const response = await authApi.get(`${GET_PROFILE}/${user_id}`);
    return response.data;
  } catch (error: any) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.error || "unable to fetch profile";
    throw new Error(errorMessage);
  }
};

export default fetchProfile;
