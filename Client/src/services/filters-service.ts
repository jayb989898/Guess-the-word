import { SelectModel } from "../models/http-responses/select-model";

class FilterService {
  public findIdInSelect(
    name: string,
    options: Array<SelectModel>
  ): SelectModel | null {
    const selectModel = options.find((item: SelectModel) => {
      return item.name === name;
    });

    return selectModel === undefined ? null : selectModel;
  }
}

export const filterService = new FilterService();
