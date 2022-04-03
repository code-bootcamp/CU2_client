import { useQuery } from "@apollo/client";
import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { ICodingUsQnAProps } from "../../../../commons/types/types";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsQnAUI from "./CodingUsQnA.Presenter";
import { FETCH_OTHER_STACK_OREDRBY_LIKE } from "./CodingUsQnA.Queries";
export default function CodingUsQnA(props: ICodingUsQnAProps) {
  const [isMyQuestion, setIsMyQuestion] = useState(false);
  const { data } = useQuery<Pick<IQuery, "fetchotherStackorderbylike">>(FETCH_OTHER_STACK_OREDRBY_LIKE);
  const toggleIsMyQuestion = () => {
    setIsMyQuestion((prev) => !prev);
  };
  return (
    <CodingUsLayout
      children={
        <CodingUsQnAUI
          data={data}
          isMyQuestion={isMyQuestion}
          toogleIsMyQuestion={toggleIsMyQuestion}
          waitingCnt={10}
          myWaitingCnt={10}
        />
      }
    ></CodingUsLayout>
  );
}
