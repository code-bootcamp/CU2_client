import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { ICodingUsQnAProps } from "../../../../commons/types/types";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsQnAUI from "./CodingUsQnA.Presenter";
import {
  FETCH_MY_STACK,
  FETCH_OTHER_STACK_OREDRBY_LIKE,
  FETCH_STACK_ALL,
} from "./CodingUsQnA.Queries";
export default function CodingUsQnA(props: ICodingUsQnAProps) {
  const [isMyQuestion, setIsMyQuestion] = useState(false);
  const { data: stackListOrderByLike } = useQuery<
    Pick<IQuery, "fetchotherStackorderbylike">
  >(FETCH_OTHER_STACK_OREDRBY_LIKE);
  const { data: stackListAll } =
    useQuery<Pick<IQuery, "fetchStackAll">>(FETCH_STACK_ALL);
  const { data: myStackList } =
    useQuery<Pick<IQuery, "fetchmyStack">>(FETCH_MY_STACK);
  const toggleIsMyQuestion = () => {
    setIsMyQuestion((prev) => !prev);
  };
  useEffect(() => {
  }, []);
  return (
    <CodingUsLayout
      children={
        <CodingUsQnAUI
          stackListOrderByLike={
            stackListOrderByLike?.fetchotherStackorderbylike!
          }
          stackListAll={stackListAll?.fetchStackAll!}
          myStackList={myStackList?.fetchmyStack!}
          isMyQuestion={isMyQuestion}
          toogleIsMyQuestion={toggleIsMyQuestion}
          waitingCnt={10}
          myWaitingCnt={10}
        />
      }
    ></CodingUsLayout>
  );
}
