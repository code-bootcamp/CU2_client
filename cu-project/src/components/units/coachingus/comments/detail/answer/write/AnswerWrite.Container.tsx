import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AnswerWritePresenter from "./AnswerWrite.Presenter";
import { CREATE_ANSWER, FETCH_QUESTION } from "./AnswerWrite.Queries";

export default function AnswerWriteComponent(props) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createAnswer] = useMutation(CREATE_ANSWER);
  const { data } = useQuery(FETCH_QUESTION, {
    variables: { questionId: String(router.query.commentsId) },
  });

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClickCreateAnswer = async () => {
    try {
      const result = await createAnswer({
        variables: {
          createAnswerInput: {
            title,
            contents,
          },
          questionId: String(router.query.commentsId)!,
        },
      });

      if (result) {
        router.push(`/coachingus/coaches/${router.query.coachId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AnswerWritePresenter
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      title={title}
      contents={contents}
      data={data}
      onClickCreateAnswer={onClickCreateAnswer}
    />
  );
}
