import "./quiz.scss";
import { useEffect, useState } from "react";
import HeartsList from "../../components/hearts-list/hearts-list";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function Quiz() {
  const totalLifes: number = 5;
  const text: string = "abcd";
  const textArr: Array<string> = text.split("");
  const [focusInput, setFocusInput] = useState(0);
  const [inputs, setInputs] = useState(Array(text.length).join(".").split("."));
  const [testPassed, setTestPassed] = useState(false);
  const [remainingLifes, setLifesRemaining] = useState(totalLifes);
  const navigate = useNavigate();

  useEffect(() => {
    selectInput(focusInput);
    checkTestPassed();
  });

  function selectInput(index: number): void {
    const input = document.getElementById(index.toString());
    input?.focus();
  }

  function checkTestPassed(): void {
    if (textArr.toString() === inputs.toString()) {
      setTestPassed(true);
    }
  }

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
            onChange={(e) => {
              checkInputValue(index, e.target.value);
            }}
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
    } else {
      if (remainingLifes - 1 === 0) {
        navigate("/lost-quiz");
      }
      setLifesRemaining(remainingLifes - 1);
    }
  }

  function clickButton(): void {
    navigate("/win-quiz");
  }

  return (
    <div id="container-quiz">
      <div className="grid h-screen place-items-center">
        <div className="rounded overflow-hidden shadow-lg bg-black h-1/2 min-h-96 min-w-96 max-w-3xl">
          <div className="px-6 py-4 h-full">
            <div className="font-bold text-xl mb-8">
              <p className="flex text-fuchsia-700 content-center justify-center">
                Guess the word
              </p>
            </div>
            <div className="h-1/4 rounded bg-slate-600">
              <div className="size-full flex">
                <div className="m-auto">
                  <span className="size-full tracking-[.25em] text-center text-6xl align-middle text-slate-400">
                    {text}
                  </span>
                </div>
              </div>
              <HeartsList
                totalLifes={totalLifes}
                remainingLifes={remainingLifes}
              />
            </div>
            <form className="h-2/4 w-full pt-2">
              <div className="flex mx-3 content-center justify-between pt-14">
                {inputsComponent()}
              </div>
            </form>
            <div className="flex content-center justify-center">
              <button
                disabled={!testPassed}
                onClick={() => clickButton()}
                className={`${
                  testPassed
                    ? "hover:bg-fuchsia-500 bg-fuchsia-700 focus-visible:outline-fuchsia-600"
                    : "bg-fuchsia-500"
                } "flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
