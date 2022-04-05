import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { ICoachingUsQuestionProps } from "../../../../../commons/types/types";
import CoachingUsQuestionUI from "./CoachingUsQuestion.Presenter";
import {
  CREATE_COACH_QUESTION,
  FETCH_MY_USER,
} from "./CoachingUsQuestion.Queries";

export default function CoachingUsQuestion(props: ICoachingUsQuestionProps) {
  const router = useRouter();
  const [isCategory, setIsCategory] = useState();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const { data } = useQuery(FETCH_MY_USER);
  const [createCoachQuestion] = useMutation(CREATE_COACH_QUESTION);

  const onClickCreateQuestion = async () => {
    try {
      const result = await createCoachQuestion({
        variables: {
          createQuestionInput: {
            title,
            contents,
          },
          coachId: String(router.query.coachId)!,
        },
      });

      router.push(
        `/coachingus/coaches/${router.query.coachId}/${result?.data?.createCoachQuestion?.id}`
      );
    } catch (err) {
      console.dir(err);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <CoachingUsQuestionUI
      setIsCategory={setIsCategory}
      isCategory={isCategory}
      data={data}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      title={title}
      contents={contents}
      onClickCreateQuestion={onClickCreateQuestion}
    />
  );
}
