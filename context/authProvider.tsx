import { LoginWithEmailPayload } from "@/features/auth/api/loginUser";
import resendOTP from "@/features/auth/api/resendOTP";
import { SignupWithEmailPayload } from "@/features/auth/api/signupUser";
import { VerifyOTPPayload } from "@/features/auth/api/verifyOTP";
import useAuthenticate from "@/features/auth/hooks/useAuthenticate";
import { EMAIL_NOT_VERIFIED_ERROR_MESSAGE } from "@/lib/constants/errorMessages";
import { SESSION_KEY } from "@/lib/constants/misc";
import { storage } from "@/services/mmkvConfig";
import { Session } from "@/types/auth";
import { SplashScreen, useRouter } from "expo-router";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

// Define the shape of the context
type AuthType = {
  session: Session | null;
  isReady: boolean;
  login: (payload: LoginWithEmailPayload) => Promise<void>;
  signup: (payload: SignupWithEmailPayload) => Promise<void>;
  logout: () => void;
  setSession: Dispatch<SetStateAction<Session | null>>;
  setIsReady: Dispatch<SetStateAction<boolean>>;
  verifyOTP: (payload: VerifyOTPPayload) => Promise<void>;
};

const AuthContext = createContext<AuthType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isReady, setIsReady] = useState(false);
  const { loginWithEmail, signupWithEmail, verifyotp, logoutUser } =
    useAuthenticate();
  const router = useRouter();

  const storeAuthState = (data: Session | null) => {
    const session_data = JSON.stringify(data);
    storage.set(SESSION_KEY, session_data);
  };

  const login = async (payload: LoginWithEmailPayload) => {
    try {
      const data = await loginWithEmail.mutateAsync(payload);
      Toast.show({
        type: "success",
        text1: "You have successfully logged in",
      });
      setSession(data);
      storeAuthState(data);
      router.replace("/");
    } catch (error: any) {
      if (
        error instanceof Error &&
        error.message === EMAIL_NOT_VERIFIED_ERROR_MESSAGE
      ) {
        await resendOTP({
          email: payload.email,
          type: "email",
        });
        Toast.show({
          type: "success",
          text1: ` ${error?.message} Please verify otp`,
        });
        router.push({
          pathname: "/(auth)/verify-otp",
          params: { email: payload.email },
        });
        return;
      }
      Toast.show({
        type: "error",
        text1: error?.message || "Error occurred while logging in",
      });
    }
  };

  const signup = async (payload: SignupWithEmailPayload) => {
    try {
      await signupWithEmail.mutateAsync(payload);
      Toast.show({
        type: "success",
        text1: "Signup Successful, Please verify otp",
      });
      router.push({
        pathname: "/(auth)/verify-otp",
        params: { email: payload.email },
      });
    } catch (error: any) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: error?.message || "Error occurred while Signing up",
      });
    }
  };

  const verifyOTP = async (payload: VerifyOTPPayload) => {
    try {
      const data = await verifyotp.mutateAsync(payload);
      Toast.show({
        type: "success",
        text1: "Successfully Verified Account",
      });
      setSession(data);
      storeAuthState(data);
      router.replace("/update-profile");
    } catch (error: any) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: error?.message || "Error Vetrify OTP",
      });
    }
  };
  const logout = async () => {
    try {
      // await logoutUser.mutateAsync();
      setSession(null);
      storeAuthState(null);
      router.replace("/login");
      Toast.show({
        type: "success",
        text1: "Logout Sucessful",
      });
    } catch (error: any) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: error?.message || "Error Logging out ",
      });
    }
  };

  const handleFetchSessionFromStorage = () => {
    const user = storage.getString(SESSION_KEY);
    if (user) {
      const userSession = JSON.parse(user);
      setSession(userSession);
    }
    setIsReady(true);
  };

  useEffect(() => {
    handleFetchSessionFromStorage();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  const value: AuthType = {
    session,
    isReady,
    login,
    logout,
    setSession,
    setIsReady,
    signup,
    verifyOTP,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to access AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
