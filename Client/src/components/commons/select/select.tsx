import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import LinkMain from "../link-main/link-main";
import { SelectProps } from "./select-props";
import Spinner from "../spinner/spinner";
import { SpinnerProps } from "../spinner/spinner-props";
import { SelectItem } from "../../../models/select-model";
import { useState } from "react";

export default function Select(props: SelectProps) {
  const [clicked, setClicked] = useState<boolean>(false);

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
        <select
          name={props.name}
          className={`${
            props.inputIsValid
              ? "ring-gray-300"
              : "ring-red-600 focus:ring-red-600"
          } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:border-fuchsia-600 focus:ring-inset focus:ring-fuchsia-600 focus:outline-none`}
          value={props.value?.name || ""}
          onClick={() => setClicked(true)}
          onChange={(event) => props.onChange(event.target.value)}
        >
          <option value="" disabled hidden></option>
          {props.options.isLoading ? (
            <option disabled>Please wait...</option>
          ) : (
            props.options.items.map((item: SelectItem, index: number) => (
              <option key={index}>{item.name}</option>
            ))
          )}
        </select>
        {clicked && props.options.isLoading ? (
          <div className="absolute inset-y-0 inset-x-0 m-auto flex items-center w-5 h-5">
            <Spinner {...new SpinnerProps(5)}></Spinner>
          </div>
        ) : null}
      </div>
    </>
  );
}
