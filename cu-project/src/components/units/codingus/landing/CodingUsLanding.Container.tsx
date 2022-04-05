import { useState, MouseEvent } from "react";
import { ICoachingUsLandingProps } from "../../../../commons/types/types";
import CoachingUsLandingUI from "./CodingUsLanding.Presenter";

export default function CoachingUsLanding(props: ICoachingUsLandingProps) {
  const corList = [
    {
      name: "Python",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/Python-PNG-File.png",
    },
    // {
    //   name: "C",
    //   url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/C.png",
    // },
    {
      name: "Java",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/java.png",
    },
    {
      name: "C++",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/cpp.png",
    },
    {
      name: "C#",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/cs.png",
    },
    {
      name: "JavaScript",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/JavaScript.png",
    },
    {
      name: "SQL",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/SQL.png",
    },
    {
      name: "R",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/r.png",
    },
    // {
    //   name: "Go",
    //   url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/go.png",
    // },
    // {
    //   name: "Swift",
    //   url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/Swift.png",
    // },
    // {
    //   name: "Ruby",
    //   url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/ruby.png",
    // },
    {
      name: "Git",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/git.png",
    },
    {
      name: "React.js",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/React-icon.svg.png",
    },
    {
      name: "Vue.js",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/Vue.png",
    },
    {
      name: "Node.js",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/nodejs.png",
    },
    {
      name: "Express",
      url: "https://storage.googleapis.com/cucutoo-dev-bucket/stack/Expressjs.png",
    },
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
