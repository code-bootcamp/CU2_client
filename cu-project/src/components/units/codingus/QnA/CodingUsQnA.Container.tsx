import { useState } from "react";
import { ICodingUsQnAProps } from "../../../../commons/types/types";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsQnAUI from "./CodingUsQnA.Presenter";
export default function CodingUsQnA(props: ICodingUsQnAProps) {
  const [isMyQuestion, setIsMyQuestion] = useState(false);
  const toggleIsMyQuestion = () => {
    setIsMyQuestion((prev) => !prev);
  };
  return (
    <CodingUsLayout
      children={
        <CodingUsQnAUI
          isMyQuestion={isMyQuestion}
          toogleIsMyQuestion={toggleIsMyQuestion}
          waitingCnt={10}
          myWaitingCnt={10}
        />
      }
    ></CodingUsLayout>
  );
}
