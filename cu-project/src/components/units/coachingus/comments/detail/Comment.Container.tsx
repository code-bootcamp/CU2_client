import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthCoach } from "../../../../commons/hooks/useAuthCoach";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
// import { ICoachingUsCommentsProps } from "../../../../commons/types/types";
import CommentUI from "./Comment.Presenter";
import {
  FETCH_QUESTION,
  FETCH_ANSWER,
  FETCH_MY_USER,
  LIKE_TOGGLE,
  DISLIKE_TOGGLE,
} from "./Comment.Queries";

export default function CommentPage(props: ICoachingUsCommentsProps) {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const { isCoach } = useAuthCoach();
  const [answer, setAnswer] = useState([]);
  const { data } = useQuery(FETCH_QUESTION, {
    variables: { questionId: router.query.commentsId },
  });
  const [likeBtn] = useMutation(LIKE_TOGGLE);
  const [dislikeBtn] = useMutation(DISLIKE_TOGGLE);
  const { data: answerData } = useQuery(FETCH_ANSWER);
  const { data: myData } = useQuery(FETCH_MY_USER);

  const commentsList = data?.fetchQuestion;

  const totalAnswer = answerData?.coachAnsweredList;

  const onAnswerClick = () => {
    if (isCoach && myData?.fetchmyuser?.id === router.query.coachId) {
      router.push(
        `/coachingus/coaches/${commentsList?.toCoach.id}/${router.query.commentsId}/write`
      );
    }
  };

  const onClicklikeBtn = async () => {
    if (answer) {
      await likeBtn({
        variables: { answerId: answer[0]?.id },
        refetchQueries: [
          {
            query: FETCH_ANSWER,
          },
        ],
      });
    }
  };
  const onClickDislikeBtn = async () => {
    if (answer) {
      await dislikeBtn({
        variables: { answerId: answer[0]?.id },
        refetchQueries: [
          {
            query: FETCH_ANSWER,
          },
        ],
      });
    }
  };

  useEffect(() => {
    const result = totalAnswer?.filter(
      (answer) => answer.question.id === router.query.commentsId
    );
    setAnswer(result);
  }, [totalAnswer]);
  return (
    <CommentUI
      moveToPage={moveToPage}
      answerList={answer}
      commentsList={commentsList}
      onAnswerClick={onAnswerClick}
      isCoach={isCoach}
      router={router}
      myData={myData}
      onClicklikeBtn={onClicklikeBtn}
      onClickDislikeBtn={onClickDislikeBtn}
    />
  );
}
