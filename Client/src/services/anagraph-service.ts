import axios, { AxiosError, AxiosResponse } from "axios";
import { ResponseGenericModel } from "../models/http-responses/response-generic-model";
import { popupService } from "./popup-service";
import { SelectModel } from "../models/http-responses/select-model";

class AnagraphService {
  private apiAuth: string = "https://localhost:7068/api/anagraph/";

  public async getLanguages(): Promise<Array<SelectModel>> {
    const res = await axios
      .get(this.apiAuth + "QuizLanguages")
      .then((response: AxiosResponse) => {
        return new ResponseGenericModel(response, null);
      })
      .catch((error: AxiosError) => {
        return new ResponseGenericModel(null, error);
      });

    popupService.showErrorHttp(res);
    return res.isOk ? res.data : [];
  }
}

export const anagraphService = new AnagraphService();
