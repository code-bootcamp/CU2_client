import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AnswerWritePresenter from "./AnswerWrite.Presenter";
import { CREATE_ANSWER } from "./AnswerWrite.Queries";

export default function AnswerWriteComponent(props) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createAnswer] = useMutation(CREATE_ANSWER);

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
        router.push(
          `/coachingus/coaches/${router.query.coachId}/${router.query.commentsId}`
        );
      }
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <AnswerWritePresenter
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      title={title}
      contents={contents}
      onClickCreateAnswer={onClickCreateAnswer}
    />
  );
}