import { useQuery } from "@apollo/client";
import CoachingUI from "./Comments.Presenter";
import { FETCH_COACH_QUESTION_LIST } from "./Comments.Queries";

export default function Comments() {
  const { data } = useQuery(FETCH_COACH_QUESTION_LIST);

  return <CoachingUI data={data} />;
}
