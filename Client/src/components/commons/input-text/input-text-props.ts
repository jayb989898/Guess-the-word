import { LinkMainProps } from "../link-main/link-main-props";

export class InputTextProps {
  value: string;
  labelText: string;
  inputIsValid: boolean;
  name: string;
  type: "email" | "number" | "password" | "text";
  onChange: (value: string) => void;
  tooltipTextError: string | undefined;
  linkRight: LinkMainProps | undefined;
  constructor(
    value: string,
    labelText: string,
    inputIsValid: boolean,
    name: string,
    type: "email" | "number" | "password" | "text",
    onChange: (value: string) => void,
    tooltipTextError?: string,
    linkRight?: LinkMainProps
  ) {
    this.value = value;
    this.labelText = labelText;
    this.inputIsValid = inputIsValid;
    this.name = name;
    this.type = type;
    this.onChange = onChange;
    this.tooltipTextError = tooltipTextError;
    this.linkRight = linkRight;
  }
}
