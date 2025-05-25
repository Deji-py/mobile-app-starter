import { useMutation } from "@tanstack/react-query";
import loginUser from "../api/loginUser";
import signupUser from "../api/signupUser";
import verifyOTP from "../api/verifyOTP";

const useAuthenticate = () => {
  const loginMutation = useMutation({ mutationFn: loginUser });
  const signupMutation = useMutation({ mutationFn: signupUser });
  const verifyOTPMutation = useMutation({ mutationFn: verifyOTP });

  return {
    loginWithEmail: loginMutation,
    signupWithEmail: signupMutation,
    verifyotp: verifyOTPMutation,
  };
};

export default useAuthenticate;
