import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;

// axios auth bearer interceptor

// const authApi = axios.create({
//   baseURL: process.env.EXPO_PUBLIC_APP_BASE_URL,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

// let isRefreshing = false;
// let refreshSubscribers: ((token: string) => void)[] = [];

// const subscribeTokenRefresh = (cb: (token: string) => void) => {
//   refreshSubscribers.push(cb);
// };

// const onRefreshed = (token: string) => {
//   refreshSubscribers.forEach(cb => cb(token));
//   refreshSubscribers = [];
// };

// async function getSession() {
//   const token = await SecureStore.getItemAsync("access_token");
//   const refreshToken = await SecureStore.getItemAsync("refresh_token");
//   const expiresAt = await SecureStore.getItemAsync("expires_at");
//   return { token, refreshToken, expiresAt: Number(expiresAt) };
// }

// async function refreshAccessToken(refresh_token: string) {
//   const res = await axios.post(`${process.env.EXPO_PUBLIC_APP_BASE_URL}/auth/token/refresh`, {
//     refresh_token,
//   });

//   const { access_token, refresh_token: new_refresh_token, expires_in } = res.data;
//   const expiresAt = Date.now() + expires_in * 1000;

//   await SecureStore.setItemAsync("access_token", access_token);
//   await SecureStore.setItemAsync("refresh_token", new_refresh_token);
//   await SecureStore.setItemAsync("expires_at", expiresAt.toString());

//   return access_token;
// }

// authApi.interceptors.request.use(
//   async (config) => {
//     const { token, refreshToken, expiresAt } = await getSession();
//     const willExpireSoon = expiresAt && Date.now() > expiresAt - 60 * 1000;

//     if (token && !willExpireSoon) {
//       config.headers.Authorization = `Bearer ${token}`;
//       return config;
//     }

//     if (!refreshToken) throw new Error("No refresh token available");

//     if (!isRefreshing) {
//       isRefreshing = true;
//       try {
//         const newToken = await refreshAccessToken(refreshToken);
//         onRefreshed(newToken);
//         config.headers.Authorization = `Bearer ${newToken}`;
//         return config;
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return new Promise((resolve) => {
//       subscribeTokenRefresh((newToken) => {
//         config.headers.Authorization = `Bearer ${newToken}`;
//         resolve(config);
//       });
//     });
//   },
//   (error) => Promise.reject(error)
// );

// export {authApi}
