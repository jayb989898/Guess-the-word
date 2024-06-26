import "./quiz.scss";
import { useEffect, useState } from "react";
import HeartsList from "../../components/hearts-list/hearts-list";
import { useNavigate } from "react-router-dom";
import { HeartsListProps } from "../../components/hearts-list/hearts-list-props";
import ButtonMain from "../../components/commons/button-main/button-main";
import { ButtonMainProps } from "../../components/commons/button-main/button-main-props";
import Title from "../../components/commons/title/title";
import { TitleProps } from "../../components/commons/title/title-props";

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
    const input = document.getElementById(`quiz-input-box-${index}`);
    input?.focus();
  }

  function checkTestPassed(): void {
    if (textArr.toString() === inputs.toString()) {
      setTestPassed(true);
    }
  }

  let inputsComponent = () => {
    const arr = [];
    //input box
    for (let i = 0; i < textArr.length; i++) {
      arr.push(
        <input
          key={`quiz-input-box-${i}`}
          id={`quiz-input-box-${i}`}
          className="custom-input appearance-none w-11 border-solid border-2 rounded leading-tight focus:outline-none text-center align-middle text-xl py-1 border-fuchsia-300 focus:border-fuchsia-500"
          type="text"
          maxLength={1}
          value={inputs[i]}
          onChange={(e) => {
            checkInputValue(i, e.target.value);
          }}
          disabled={inputs[i] !== ""}
        />
      );
    }
    return (
      <div className="flex mx-3 content-center justify-between pt-14">
        {arr}
      </div>
    );
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
        <div className="rounded overflow-hidden shadow-lg bg-white h-1/2 min-h-96 min-w-96 max-w-3xl">
          <div className="px-6 py-4 h-full">
            <div className="font-bold text-xl mb-8">
              <Title {...new TitleProps("Guess the word")}></Title>
            </div>
            <div className="h-1/5 rounded bg-slate-600">
              <div className="size-full flex">
                <div className="m-auto">
                  <span className="size-full tracking-[.25em] text-center text-6xl align-middle text-slate-400">
                    {text}
                  </span>
                </div>
              </div>
              <HeartsList
                {...new HeartsListProps(totalLifes, remainingLifes)}
              />
            </div>
            <div className="h-2/5 w-full pt-2">{inputsComponent()}</div>
            <div className="h-1/5 content-center justify-center">
              <ButtonMain
                {...new ButtonMainProps(
                  "Continue",
                  !testPassed,
                  false,
                  clickButton
                )}
              ></ButtonMain>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
