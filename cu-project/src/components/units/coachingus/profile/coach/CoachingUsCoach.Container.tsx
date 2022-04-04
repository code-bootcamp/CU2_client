import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import CoachingUsCoachUI from "./CoachingUsCoach.Presenter";
import {
  FETCH_COACH_COLUMNS,
  FETCH_COACH_COMMENTS,
  FETCH_ANSWER,
  FETCH_COACH,
} from "./CoachingUsCoach.Queries";

export default function CoachingUsCoachPage(props) {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const [answer, setAnswer] = useState([]);
  // const { data } = useQuery(FETCH_COACH_COLUMNS);
  const { data: answerData } = useQuery(FETCH_ANSWER);
  const { data: coachData } = useQuery(FETCH_COACH, {
    variables: { userId: router.query.coachId },
  });

  const { data } = useQuery(FETCH_COACH_COMMENTS, {
    variables: {
      coachId: String(router.query.coachId),
    },
  });
  const answerList = answerData?.coachAnsweredList;
  // console.log(answerData);
  const comment = data?.fetchQuestionListPerCoach;
  // console.log(comment);

  const columnList = props.coachColumnsList?.slice(0, 2);

  useEffect(() => {
    const result = answerList?.filter(
      (answer) => answer?.question?.id === comment?.[0]?.id
    );
    console.log(result);
    setAnswer(result);
  }, [answerData]);

  return (
    <CoachingUsCoachUI
      moveToPage={moveToPage}
      columnList={columnList}
      comment={comment}
      setComponent={props.setComponent}
      router={router}
      answer={answer}
      coachData={coachData}
    />
  );
}
