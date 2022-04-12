import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  getImagesFromMD,
  getTextFromMD,
} from "../../../../../commons/libraries/mdUtils";
import useCoachRate from "../../../../../commons/store/coachRate";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import Loading from "../../../../commons/Loading/Loading";
import CoachingUsCoachUI from "./CoachingUsCoach.Presenter";
import {
  FETCH_COACH_COLUMNS,
  FETCH_COACH_COMMENTS,
  FETCH_ANSWER,
  FETCH_COACH,
} from "./CoachingUsCoach.Queries";

export default function CoachingUsCoachPage(props) {
  const { moveToPage } = useMoveToPage();

  const setAnswerRate = useCoachRate((state) => state.setAnswerRate);
  const router = useRouter();
  const [answer, setAnswer] = useState([]);
  const [columnProps, setColumnProps] = useState([]);
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
  const comment = data?.fetchQuestionListPerCoach;

  const columnList = props.coachColumnsList?.slice(0, 2);
  console.log(columnList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const columnListEdit = columnList?.map((el) => {
      return {
        plainText: getTextFromMD(el.contents),
        firstImg: getImagesFromMD(el.contents)[0],
      };
    });
    setColumnProps(columnListEdit);

    const result = answerList?.filter(
      (answer) => answer?.question?.id === comment?.[0]?.id
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    setAnswer(result);

    const commentListMap = comment?.map((el) => el.id);
    const newResult = answerList?.filter((answer) =>
      commentListMap?.includes(answer?.question?.id)
    );

    setAnswerRate(Math.ceil((newResult?.length / comment?.length) * 100));
  }, [answerData, coachData]);

  if (isLoading) {
    return <></>;
  }

  return (
    <CoachingUsCoachUI
      moveToPage={moveToPage}
      columnList={columnList}
      comment={comment}
      setComponent={props.setComponent}
      router={router}
      answer={answer}
      coachData={coachData}
      columns={columnList}
      columnProps={columnProps}
    />
  );
}
