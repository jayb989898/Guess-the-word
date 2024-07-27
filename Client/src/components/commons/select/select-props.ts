import { SelectModel } from "./select-model";

export class SelectProps {
  value: SelectModel | null;
  labelText: string;
  inputIsValid: boolean;
  options: Array<SelectModel>;
  name: string;
  onChange: (value: string) => void;
  tooltipTextError: string | undefined;
  linkRight: string | undefined;
  constructor(
    value: SelectModel | null,
    labelText: string,
    inputIsValid: boolean,
    options: Array<SelectModel>,
    name: string,
    onChange: (value: string) => void,
    tooltipTextError?: string,
    linkRight?: string
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
