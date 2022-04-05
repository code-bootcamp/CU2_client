import { ICoachingUsColumnsCardProps } from "../../../../../commons/types/types";
import ColumnsCardUI from "./ColumnsCard.Presenter";
import {} from "../CoachingUsMain.Queries";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { FETCH_COLUMN_LIST } from "./ColumnsCard.Queries";
import { useQuery } from "@apollo/client";

export default function ColumnsCardPage(props: ICoachingUsColumnsCardProps) {
  const { data } = useQuery(FETCH_COLUMN_LIST);
  const { moveToPage } = useMoveToPage();

  // const columnList = data?.fetchRecommendColumnList;

  const imgUrl = [
    "https://storage.googleapis.com/cucutoo-dev-bucket/gql.png",
    "https://storage.googleapis.com/cucutoo-dev-bucket/program1.jpeg",
    "https://storage.googleapis.com/cucutoo-dev-bucket/react.jpeg",
  ];

  const columnList = [
    {
      id: 0,
      title: "Zustand - 상태 관리 라이브러리",
      contents:
        "요즘 새롭게 떠오르고 있는 상태 관리 라이브러리인 Zustand를 사용해 봤다. 왜...",
      name: "최건",
      createdAt: "9시간 전",
    },
    {
      id: 1,
      title:
        "[React] ContextAPI를 사용한 Router 설정 + 타입에러(type error) 해결#2",
      contents:
        "바로 전 글에서 NextJS에서 ContextAPI를 사용해보는 시간을 가졌습니다. NextJS에서는 알겠는데, React에서는?",
      name: "김재민",
      createdAt: "2일전",
    },
    {
      id: 2,
      title: "[React] 디바운싱을 이용한 API 요청 #1",
      contents:
        "디바운싱은 언제 사용하면 좋을까요? 디바운싱은 사용자가 보내는 여러 요청들 중 마지막 요청만 보낼 수 있도록 기능을 구현할",
      name: "김태훈",
      createdAt: "5일전",
    },
  ];

  return (
    <ColumnsCardUI
      main={props.main}
      columnList={columnList}
      moveToPage={moveToPage}
      imgUrl={imgUrl}
    />
  );
}
