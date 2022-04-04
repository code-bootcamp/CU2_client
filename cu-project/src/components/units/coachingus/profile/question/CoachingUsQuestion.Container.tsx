import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { IQuestion_Field_Enum } from "../../../../../commons/types/generated/types";
import { ICoachingUsQuestionProps } from "../../../../../commons/types/types";
import CoachingUsQuestionUI from "./CoachingUsQuestion.Presenter";
import {
  FETCH_MY_USER,
  CREATE_COACH_QUESTION,
} from "./CoachingUsQuestion.Queries";

enum IQuestion_Field_Enum {
  Norm = "NORM",
  Portforlio = "PORTFORLIO",
  Resume = "RESUME",
}

export default function CoachingUsQuestion(props: ICoachingUsQuestionProps) {
  const router = useRouter();
  const [isCategory, setIsCategory] = useState<IQuestion_Field_Enum>(
    IQuestion_Field_Enum.Norm
  );

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const { data } = useQuery(FETCH_MY_USER);
  const [createCoachQuestion] = useMutation(CREATE_COACH_QUESTION);
  console.log(router.query.coachId);
  const onClickCreateQuestion = async () => {
    try {
      const result = await createCoachQuestion({
        variables: {
          createQuestionInput: {
            title,
            contents,
            QType: IQuestion_Field_Enum.Portforlio,
          },
          coachId: router.query.coachId,
        },
      });

      if (result) console.log(result);
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
  console.log(isCategory);

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
