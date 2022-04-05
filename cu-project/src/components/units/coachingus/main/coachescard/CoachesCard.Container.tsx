import { ICoachingUsCoachesCardProps } from "../../../../../commons/types/types";
import CoachesCardUI from "./CoachesCard.Presenter";
import {} from "../CoachingUsMain.Queries";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { FETCH_COACH_USER_LIST } from "./CoachesCard.Queries";
import { useQuery } from "@apollo/client";

export default function CoachesCardPage(props: ICoachingUsCoachesCardProps) {
  const { data } = useQuery(FETCH_COACH_USER_LIST);

  const { moveToPage } = useMoveToPage();

  const coachesList = data?.fetchCoachUserList.slice(0, 3);
  const imgUrl = [
    "https://storage.googleapis.com/cucutoo-dev-bucket/geon.JPG",
    "https://storage.googleapis.com/cucutoo-dev-bucket/nam.jpeg",
    "https://storage.googleapis.com/cucutoo-dev-bucket/jin.png",
  ];

  return (
    <CoachesCardUI
      main={props.main}
      coachesList={coachesList}
      moveToPage={moveToPage}
      imgUrl={imgUrl}
    />
  );
}
