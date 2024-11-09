import { SelectItem, SelectModel } from "../../../models/select-model";
import { LinkMainProps } from "../link-main/link-main-props";

export class SelectProps {
  value: SelectItem | null;
  labelText: string;
  inputIsValid: boolean;
  options: SelectModel;
  name: string;
  onChange: (value: string) => void;
  tooltipTextError: string | undefined;
  linkRight: LinkMainProps | undefined;
  constructor(
    value: SelectItem | null,
    labelText: string,
    inputIsValid: boolean,
    options: SelectModel,
    name: string,
    onChange: (value: string) => void,
    tooltipTextError?: string,
    linkRight?: LinkMainProps
  ) {
    this.value = value;
    this.labelText = labelText;
    this.inputIsValid = inputIsValid;
    this.options = options;
    this.name = name;
    this.onChange = onChange;
    this.tooltipTextError = tooltipTextError;
    this.linkRight = linkRight;
  }
}
