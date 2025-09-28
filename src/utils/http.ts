import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

type ApiError = {
  status: number;
  message: string;
};

class AxiosHttp {
  private _send = async (
    method: string,
    path: string,
    data?: object,
    config?: AxiosRequestConfig
  ) => {
    try {
      const response = await axiosInstance.request({
        method,
        url: path,
        data,
        ...config,
      });

      return response.data;
    } catch (error: any) {
      const err: ApiError = {
        status: error.response?.status || 500,
        message:
          error.response?.data?.message || error.message || "Server Error",
      };
      throw err;
    }
  };

  get = (path: string, config?: AxiosRequestConfig) => {
    return this._send("get", path, undefined, config);
  };

  post = (path: string, data: object, config?: AxiosRequestConfig) => {
    return this._send("post", path, data, config);
  };

  put = (path: string, data: object, config?: AxiosRequestConfig) => {
    return this._send("put", path, data, config);
  };

  patch = (path: string, data: object, config?: AxiosRequestConfig) => {
    return this._send("patch", path, data, config);
  };

  del = (path: string, config?: AxiosRequestConfig) => {
    return this._send("delete", path, undefined, config);
  };
}

export default new AxiosHttp();
