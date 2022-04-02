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

  return <CoachesCardUI coachesList={coachesList} moveToPage={moveToPage} />;
}
