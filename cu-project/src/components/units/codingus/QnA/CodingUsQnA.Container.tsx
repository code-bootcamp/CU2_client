import { useState } from "react";
import { ICodingUsQnAProps } from "../../../../commons/types/types";
import CodingUsQnAUI from "./CodingUsQnA.Presenter";
import {} from "./CodingUsQnA.Queries";
export default function CodingUsQnA(props: ICodingUsQnAProps) {
  const [isMyQuestion, setIsMyQuestion] = useState(false);
  const toggleIsMyQuestion = () => {
    setIsMyQuestion((prev) => !prev);
  };
  return (
    <CodingUsQnAUI
      isMyQuestion={isMyQuestion}
      toogleIsMyQuestion={toggleIsMyQuestion}
      waitingCnt={10}
      myWaitingCnt={10}
    />
  );
}
