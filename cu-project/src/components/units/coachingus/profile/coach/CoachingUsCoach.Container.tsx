import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  const imgUrl = [
    "https://storage.googleapis.com/cucutoo-dev-bucket/gksk.png",
    "https://storage.googleapis.com/cucutoo-dev-bucket/enf.png",
    "https://storage.googleapis.com/cucutoo-dev-bucket/tpt.png",
  ];

  useEffect(() => {
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

  const colImg = [
    "https://storage.googleapis.com/cucutoo-dev-bucket/native.png",
    "https://storage.googleapis.com/cucutoo-dev-bucket/react-query.png",
  ];

  const columns = [
    {
      id: 0,
      title: "스타트업을 위한 앱개발 강좌 4(리액트 네이티브)",
      contents:
        "리액트 네이티브는 리액트 기반으로 앱을 만드는 기술입니다. 리액트는 백엔드 개발자라도 쉽게 정복하기 힘든 방대한 생태계를 갖추고 ",
      name: "최건",
      createdAt: "9시간 전",
    },
    {
      id: 1,
      title: "nextjs toolkit react-query rtk-query react-hook-form yup",
      contents:
        "정리해보면 nextjs + react-query + redux-toolkit + rtk-query + react-hook-form + yup의 구성이 좋다. SSR 이 아니라면 CRA (create-react-app) 로. SSR 이면 CNA (create-next-app) 로. 물론 모두 typescript 를 적용.",
      name: "김재민",
      createdAt: "2일전",
    },
  ];

  if (isLoading) {
    return <></>;
  }

  return (
    <CoachingUsCoachUI
      moveToPage={moveToPage}
      columnList={columns}
      comment={comment}
      setComponent={props.setComponent}
      router={router}
      answer={answer}
      coachData={coachData}
      imgUrl={imgUrl}
      colImg={colImg}
      columns={columns}
    />
  );
}
