import "./quiz.scss";
import { useEffect, useState } from "react";

export default function Quiz() {
  const text: string = "abcadadeqwdfe";
  const textArr: Array<string> = text.split("");
  const [focusInput, setFocusInput] = useState(0);
  const [inputs, setInputs] = useState(Array(text.length).join(".").split("."));

  useEffect(() => {
    selectInput(focusInput);
  });

  let inputsComponent = () => {
    return textArr?.map((char: string, index: number) => {
      return (
        <>
          <input
            key={index}
            id={index.toString()}
            className="custom-input appearance-none w-11 border-solid border-2 rounded leading-tight focus:outline-none text-center align-middle text-xl py-1 border-slate-600 bg-black text-slate-100 focus:border-fuchsia-900"
            type="text"
            maxLength={1}
            value={inputs[index]}
            onChange={(e) => checkInputValue(index, e.target.value)}
            disabled={inputs[index] !== ""}
          />
        </>
      );
    });
  };

  function checkInputValue(index: number, inputChar: string): void {
    if (inputChar === "" || inputChar === textArr[index]) {
      const input = inputs.map((currElement, i) =>
        i === index ? inputChar : currElement
      );
      setFocusInput(index + 1);
      setInputs(input);
    }
  }

  function selectInput(index: number) {
    const input = document.getElementById(index.toString());
    input?.focus();
  }

  return (
    <div id="container-quiz">
      <div className="grid h-screen place-items-center">
        <div className="rounded overflow-hidden shadow-lg bg-black h-1/2 min-w-96 max-w-3xl">
          <div className="px-6 py-4 h-4/5">
            <div className="font-bold text-xl mb-2">Guess the word</div>
            <div className="h-1/4 rounded bg-slate-600">
              <div className="size-full flex">
                <div className="m-auto">
                  <span className="size-full tracking-[.25em] text-center text-6xl align-middle text-slate-400">
                    {text}
                  </span>
                </div>
              </div>
            </div>
            <form className="h-3/4 w-full pt-2">
              <div className="flex mx-3 content-center justify-between">
                {inputsComponent()}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
