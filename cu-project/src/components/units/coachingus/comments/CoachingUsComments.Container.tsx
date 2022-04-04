import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ICoachingUsCommentsProps } from "../../../../commons/types/types";
import { useAuthCoach } from "../../../commons/hooks/useAuthCoach";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachingUsCommentsUI from "./CoachingUsComments.Presenter";
import { FETCH_COMMENTS, FETCH_ANSWER } from "./CoachingUsComments.Queries";
import { FETCH_MY_USER } from "./detail/Comment.Queries";

export default function CoachingUsCommentsPage(
  props: ICoachingUsCommentsProps
) {
  const router = useRouter();

  const { data } = useQuery(FETCH_COMMENTS);

  const { moveToPage } = useMoveToPage();

  const [totalComments, setTotalComments] = useState([]);
  const [nextPage, setNextPage] = useState(10);
  const [isActive, setIsActive] = useState(true);
  const [IsMyCoach, setIsMyCoach] = useState(false);

  const commentsList = data?.fetchQuestionList;
  const totalAnswer = answerList?.coachAnsweredList;

  console.log(totalAnswer);
  console.log(commentsList);
  const onLoadMore = () => {
    if (commentsList && isActive) {
      setTotalComments([...commentsList?.slice(0, nextPage + 10)]);
      setNextPage((prev) => prev + 10);
    }
    if (commentsList?.length < nextPage) setIsActive(false);
    else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    if (commentsList) {
      setTotalComments([...commentsList?.slice(0, 10)]);
    }
  }, [commentsList]);

  return (
    <CoachingUsCommentsUI
      commentsList={totalComments}
      moveToPage={moveToPage}
      onLoadMore={onLoadMore}
      totalAnswer={totalAnswer}
      isActive={isActive}
      IsMyCoach={IsMyCoach}
    />
  );
}
