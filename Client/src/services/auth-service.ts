import axios, { AxiosError, AxiosResponse } from "axios";
import { RegisterRequest } from "../models/requests/register-reguest";
import { ResponseGenericModel } from "../models/response-generic-model";

export class AuthService {
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

    return res;
  }
}
