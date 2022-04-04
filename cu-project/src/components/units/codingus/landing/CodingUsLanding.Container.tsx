import { useState, MouseEvent } from "react";
import { ICoachingUsLandingProps } from "../../../../commons/types/types";
import CoachingUsLandingUI from "./CodingUsLanding.Presenter";

export default function CoachingUsLanding(props: ICoachingUsLandingProps) {
  const corList = [
    "Python",
    "C",
    "Java",
    "C++",
    "C#",
    "JavaScript",
    "SQL",
    "R",
    "Go",
    "Swift",
    "Ruby",
    "Git",
    "Objective-C",
    "CSS",
    "HTML",
    "React.js",
    "Vue.js",
    "Node.js",
    "Express",
    "Spring",
  ];
  const [interestList, setInterestList] = useState<(string | undefined)[]>([]);

  const onChangeCheckBox = (e: MouseEvent<HTMLElement>) => {
    if (interestList.includes(e.currentTarget.id)) {
      let temp = [];
      temp = interestList.filter((stack) => stack !== e.currentTarget.id);
      setInterestList(temp);
    } else {
      setInterestList([...interestList, e.currentTarget.id]);
    }
  };

  const onClickStart = () => {
    if (!interestList.length) alert("관심 스택을 선택해주세요.");
    else {
      localStorage.setItem("interestList", String(interestList));
      props.setIsFavorites(true);
    }
  };

  return (
    <CoachingUsLandingUI
      corList={corList}
      interestList={interestList}
      onChangeCheckBox={onChangeCheckBox}
      setIsFavorites={props.setIsFavorites}
      onClickStart={onClickStart}
    />
  );
}
