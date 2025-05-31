import { SESSION_KEY } from "@/lib/constants/misc";
import { Session } from "@/types/auth";
import axios from "axios";
import moment from "moment";
import { storage } from "./mmkvConfig";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// axios auth bearer interceptor
const authApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

async function getSession() {
  const user = storage.getString(SESSION_KEY);
  const parsedUser = user ? (JSON.parse(user) as Session) : null;
  const access_token = parsedUser?.access_token;
  const refresh_token = parsedUser?.refresh_token;
  const expires_at = parsedUser?.expires_at;
  return { access_token, refresh_token, expires_at: Number(expires_at) };
}

async function refreshAccessToken(refresh_token: string) {
  const res = await axios.post(
    `${process.env.EXPO_PUBLIC_APP_BASE_URL}/auth/refresh`,
    {
      refresh_token,
    }
  );

  if (!res.data) {
    return null;
  }

  storage.set(SESSION_KEY, JSON.stringify(res.data));
  return res.data.access_token;
}

authApi.interceptors.request.use(
  async (config) => {
    const { access_token, refresh_token, expires_at } = await getSession();
    const willExpireSoon =
      expires_at && moment().isAfter(moment(expires_at).subtract(1, "minute"));

    try {
      //Valid token and not expiring soon
      if (access_token && !willExpireSoon) {
        config.headers.Authorization = `Bearer ${access_token}`;
        return config;
      }

      //  Token is expiring or expired, but refresh is available
      if (refresh_token && willExpireSoon) {
        const newAccessToken = await refreshAccessToken(refresh_token);
        if (newAccessToken) {
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          return config;
        } else {
          console.warn("Token refresh failed — logging out user.");
          storage.clearAll();
          return Promise.reject(new Error("Token refresh failed. Logged out."));
        }
      }

      //No access token, or expired and no refresh token
      if (!access_token && !refresh_token) {
        console.warn("No tokens available — logging out.");
        storage.clearAll();
        return Promise.reject(new Error("No tokens available. Logged out."));
      }

      // Final fallback (shouldn't be reached)
      return config;
    } catch (err) {
      console.error("Error during auth interception:", err);
      storage.clearAll();
      return Promise.reject(err);
    }
  },
  (error) => Promise.reject(error)
);

export { authApi };
export default api;
