import axios, { AxiosError, AxiosResponse } from "axios";
import { RegisterRequest } from "../models/requests/register-reguest";
import { ResponseGenericModel } from "../models/http-responses/response-generic-model";
import { popupService } from "./popup-service";
import { LoginRequest } from "../models/requests/login-reguest";

class AuthService {
  private apiAuth: string = "https://localhost:7068/api/auth/";

  public async register(
    registerRequest: RegisterRequest
  ): Promise<ResponseGenericModel> {
    const res = await axios
      .post(this.apiAuth + "Register", registerRequest)
      .then((response: AxiosResponse) => {
        return new ResponseGenericModel(response, null);
      })
      .catch((error: AxiosError) => {
        return new ResponseGenericModel(null, error);
      });

    popupService.showErrorHttp(res);
    return res;
  }

  public async login(
    loginRequest: LoginRequest
  ): Promise<ResponseGenericModel> {
    const res = await axios
      .post(this.apiAuth + "Login", loginRequest)
      .then((response: AxiosResponse) => {
        return new ResponseGenericModel(response, null);
      })
      .catch((error: AxiosError) => {
        return new ResponseGenericModel(null, error);
      });

    popupService.showErrorHttp(res);
    return res;
  }
}

export const authService = new AuthService();
