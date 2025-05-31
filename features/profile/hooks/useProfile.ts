import { queryClient } from "@/app/_layout";
import { useAuth } from "@/context/authProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import fetchProfile from "../api/fetch-profile";
import updateProfile from "../api/update-profile";

function useProfile() {
  const { session } = useAuth();
  const {
    data: profile,
    isLoading: isProfileLoading,
    error: profileError,
    refetch: refetchProfile,
  } = useQuery({
    queryKey: ["get-profile", session?.user.id as string],
    queryFn: ({ queryKey }) => fetchProfile(queryKey[1]),
    enabled: !!session?.user.id,
  });

  const {
    mutate: updateProfileMutate,
    isPending: isUpdatingProfile,
    error: updateProfileError,
  } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-profile"] });
    },
  });

  return {
    profile,
    isProfileLoading,
    profileError,
    refetchProfile,
    updateProfile: updateProfileMutate,
    isUpdatingProfile,
    updateProfileError,
  };
}

export default useProfile;
