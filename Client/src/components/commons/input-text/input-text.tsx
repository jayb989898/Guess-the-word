import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { InputTextProps } from "./input-text-props";
import LinkMain from "../link-main/link-main";

export default function InputText(props: InputTextProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {props.labelText}
        </label>
        {props.linkRight === undefined ? null : (
          <div className="text-sm">
            <LinkMain {...props.linkRight}></LinkMain>
          </div>
        )}
      </div>
      <div className="mt-2 relative">
        <div className="absolute inset-y-0 right-2 flex items-center">
          {props.inputIsValid ? null : (
            <div className="group">
              <ExclamationCircleIcon
                fill="red"
                stroke="white"
                className={`${
                  props.tooltipTextError !== undefined ? "cursor-pointer" : null
                } size-5`}
              ></ExclamationCircleIcon>
              {props.tooltipTextError === undefined ? null : (
                <span className="absolute top-10 scale-0 transition-all rounded bg-fuchsia-600 p-2 text-sm text-white group-hover:scale-100 z-10 w-min min-w-24 text-center">
                  {props.tooltipTextError}
                </span>
              )}
            </div>
          )}
        </div>
        <input
          name={props.name}
          type={props.type}
          className={`${
            props.inputIsValid
              ? "ring-gray-300"
              : "ring-red-600 focus:ring-red-600"
          } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:border-fuchsia-600 focus:ring-inset focus:ring-fuchsia-600 focus:outline-none`}
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)}
        />
      </div>
    </>
  );
}
