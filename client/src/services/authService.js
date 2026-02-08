import axiosInstance from "./axiosInstance";

export const registerUserApi = (data) => {
  return axiosInstance.post("/auth/register", data);
};

// 🔐 LOGIN API
export const loginUserApi = (data) => {
  return axiosInstance.post("/auth/login", data, {
    withCredentials: true,
  });
};

export const logoutUserApi = (data) => {
  return axiosInstance.post(
    "/auth/logout",
    {},
    {
      withCredentials: true,
    },
  );
};
