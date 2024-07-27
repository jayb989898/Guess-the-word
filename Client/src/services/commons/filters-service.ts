import { SelectModel } from "../../components/commons/select/select-model";

export function FindIdInSelect(
  value: string,
  options: Array<SelectModel>
): SelectModel | null {
  const selectModel = options.find((item: SelectModel) => {
    return item.value === value;
  });

  return selectModel === undefined ? null : selectModel;
}
