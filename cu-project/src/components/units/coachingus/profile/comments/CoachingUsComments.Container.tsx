import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CoachingUsCommentsUI from "./CoachingUsComments.Presenter";
import {
  FETCH_ANSWER,
  FETCH_COACH_COMMENTS,
} from "./CoachingUsComments.Queries";

export default function CoachingUsCommentsPage() {
  const router = useRouter();
  const [answer, setAnswer] = useState([]);
  const { data: answerData } = useQuery(FETCH_ANSWER);
  const { data } = useQuery(FETCH_COACH_COMMENTS, {
    variables: {
      coachId: String(router.query.coachId),
    },
  });

  const answerList = answerData?.coachAnsweredList;
  const comment = data?.fetchQuestionListPerCoach;
  console.log("comment", comment);

  useEffect(() => {
    const commentListMap = comment?.map((el) => el.id);
    const result = answerList?.filter((answer) =>
      commentListMap.includes(answer?.question?.id)
    );
    console.log(result);
    setAnswer(result);
  }, [answerData]);

  return (
    <CoachingUsCommentsUI
      coachComments={comment}
      answer={answer}
      router={router}
    />
  );
}
