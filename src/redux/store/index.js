import AuthSlice from "../slice/AuthSlice";
import ComponentSlice from "../slice/ComponentSlice";
import bike from "../../config/reactotron";
import { configureStore } from "@reduxjs/toolkit";
import multi from "redux-multi";
import promiseMiddleware from "../middleware/apiCalls";
import thunk from "redux-thunk";

let middleware = [thunk, multi, promiseMiddleware];

export default configureStore({
  reducer: {
    AuthSlice,
    ComponentSlice
  },
  enhancers: [bike.createEnhancer()],
  middleware: [...middleware],
});
