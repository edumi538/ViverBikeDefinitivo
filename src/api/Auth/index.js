import axios from "axios";
import { baseUrlBeta } from "../../utils/environment";
import servicesBase from "../../services/servicesBase";

export async function LoginUser(data) {
  try {
    const response = await servicesBase.post(`${baseUrlBeta}api/auth/signin`, data);
    return response.data;
  } catch (err) {
    console.log("Erro:", err.status);
  }
}

export async function RegisterUser(data) {
  try {
    const response = await servicesBase.post(`${baseUrlBeta}api/auth/signup`, data);
    return response.data;
  } catch (err) {
    console.log("Erro:", err);
  }
}
