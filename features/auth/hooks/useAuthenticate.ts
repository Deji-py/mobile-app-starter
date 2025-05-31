import { useMutation } from "@tanstack/react-query";
import loginUser from "../api/loginUser";
import logoutUser from "../api/logoutUser";
import signupUser from "../api/signupUser";
import verifyOTP from "../api/verifyOTP";

const useAuthenticate = () => {
  const loginMutation = useMutation({ mutationFn: loginUser });
  const signupMutation = useMutation({ mutationFn: signupUser });
  const verifyOTPMutation = useMutation({ mutationFn: verifyOTP });
  const logoutMutation = useMutation({ mutationFn: logoutUser });

  return {
    loginWithEmail: loginMutation,
    signupWithEmail: signupMutation,
    verifyotp: verifyOTPMutation,
    logoutUser: logoutMutation,
  };
};

export default useAuthenticate;
