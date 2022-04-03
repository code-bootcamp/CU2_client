import { useQuery } from "@apollo/client";
import LikeQuestionsUI from "./LikeQuestions.Presenter";
import { FETCH_STACK_MY_LIKE } from "./LikeQuestions.Queries";

export default function LikeQuestions() {
  const { data } = useQuery(FETCH_STACK_MY_LIKE);

  return <LikeQuestionsUI data={data} />;
}
