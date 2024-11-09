import axios, { AxiosError, AxiosResponse } from "axios";
import { ResponseGenericModel } from "../models/http-responses/response-generic-model";
import { popupService } from "./popup-service";
import { SelectItem, SelectModel } from "../models/select-model";

class AnagraphService {
  private apiAuth: string = "https://localhost:7068/api/anagraph/";

  public async getLanguages(): Promise<SelectModel> {
    let selectModel = new SelectModel();
    const res = await axios
      .get(this.apiAuth + "QuizLanguages")
      .then((response: AxiosResponse) => {
        selectModel.setItems(response.data);
        return new ResponseGenericModel(response, null);
      })
      .catch((error: AxiosError) => {
        selectModel.setError();
        return new ResponseGenericModel(null, error);
      });

    popupService.showErrorHttp(res);
    return selectModel;
  }
}

export const anagraphService = new AnagraphService();
