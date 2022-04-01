import { ChangeEvent, useRef, useState } from "react";
import { ICoachingUsQuestionProps } from "../../../../../commons/types/types";
import CoachingUsQuestionUI from "./CoachingUsQuestion.Presenter";
import {} from "./CoachingUsQuestion.Queries";
export default function CoachingUsQuestion(props: ICoachingUsQuestionProps) {
  const [isCategory, setIsCategory] = useState(false);
  const [fileName, setFileName] = useState([]);
  const fileRef = useRef();

  const onClickRef = () => {
    fileRef.current?.click();
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0].name;
    setFileName([file]);
    console.log(file);
  };
  return (
    <CoachingUsQuestionUI
      setIsCategory={setIsCategory}
      isCategory={isCategory}
      fileRef={fileRef}
      onClickRef={onClickRef}
      onChangeFile={onChangeFile}
      fileName={fileName}
    />
  );
}
