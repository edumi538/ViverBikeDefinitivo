import axios from "axios";
import { baseUrlBeta } from "../utils/environment";

const interceptor = (store) => {
  const defaultOptions = {
    baseURL: baseUrlBeta,
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);
  const { token } = store.getState().AuthSlice.user;

  instance.interceptors.request.use(
    (conf) => {
      conf.headers.Authorization = token ? `Bearer ${token}` : "";
      console.bike.log("Token:", conf.headers.Authorization);
      return conf;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (next) => {
      return Promise.resolve(next);
    },
    (error) => {
      // You can handle error here and trigger warning message without get in the code inside
      return Promise.reject(error);
    }
  );
  return instance;
};
export default {
  interceptor,
};
