import { SelectItem } from "../models/select-model";

class FilterService {
  public findIdInSelect(
    name: string,
    options: Array<SelectItem>
  ): SelectItem | null {
    const selectModel = options.find((item: SelectItem) => {
      return item.name === name;
    });

    return selectModel === undefined ? null : selectModel;
  }
}

export const filterService = new FilterService();
