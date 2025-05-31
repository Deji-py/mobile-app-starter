import { UPDATE_PROFILE } from "@/services/apiEndpoints";
import { authApi } from "@/services/axiosInstance";

export interface updateProfilePayload {
  firstname: string;
  lastname: string;
}

const updateProfile = async ({
  payload,
  user_id,
}: {
  payload: updateProfilePayload;
  user_id: string;
}) => {
  try {
    const response = await authApi.put(`${UPDATE_PROFILE}/${user_id}`, payload);
    return response.data;
  } catch (error: any) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.error || "Unable to update profile";
    throw new Error(errorMessage);
  }
};

export default updateProfile;
