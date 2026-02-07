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
