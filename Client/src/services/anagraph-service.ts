import axios, { AxiosError, AxiosResponse } from "axios";
import { RegisterRequest } from "../models/requests/register-reguest";
import { ResponseGenericModel } from "../models/http-responses/response-generic-model";
import { popupService } from "./popup-service";
import { SelectModel } from "../models/http-responses/select-model";

class AnagraphService {
  private apiAuth: string = "https://localhost:7068/api/anagraph/";

  public getLanguages(): Promise<Array<SelectModel>> {
    const res = axios
      .get(this.apiAuth + "QuizLanguages")
      .then((response: AxiosResponse) => {
        // console.log(response.data);
        return response.data;
        return new ResponseGenericModel(response, null);
      })
      .catch((error: AxiosError) => {
        // return new SelectModel();
        return [];
        // return new ResponseGenericModel(null, error);
      });

    // popupService.showErrorHttp(res);
    return res;
  }
}

export const anagraphService = new AnagraphService();
