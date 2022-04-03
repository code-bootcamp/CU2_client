import { useQuery } from "@apollo/client";
import UserQuestionsUI from "./MyQuestions.Presenter";
import { FETCH_MY_STACK } from "./MyQuestions.Queries";

export default function UserQuestions() {
  const { data } = useQuery(FETCH_MY_STACK);

  return <UserQuestionsUI data={data} />;
}
