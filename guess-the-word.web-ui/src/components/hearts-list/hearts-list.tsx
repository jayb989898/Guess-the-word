import { HeartsListProps } from "./hearts-list-props";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function HeartsList(props: HeartsListProps) {
  const arr = [];
  //red hearts
  for (let i = 0; i < props.remainingLifes; i++) {
    arr.push(
      <HeartIcon
        key={`heart-red-${i}`}
        fill="red"
        stroke="red"
        viewBox="0 0 24 24"
        className="size-6"
      ></HeartIcon>
    );
  }
  //black hearts
  for (let i = 0; i < props.totalLifes - props.remainingLifes; i++) {
    arr.push(
      <HeartIcon
        key={`heart-black-${i}`}
        fill="none"
        stroke="grey"
        viewBox="0 0 24 24"
        className="size-6"
      ></HeartIcon>
    );
  }
  return <div className="flex mt-4">{arr}</div>;
}
