import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import useStore from "../../../../../commons/store/store";
import {
  IMutation,
  IMutationCreateStackArgs,
} from "../../../../../commons/types/generated/types";
import CodingUsLayout from "../../layout/CodingUsLayout";
import CoachingUsQuestionUI from "./CodingUsQuestion.Presenter";
import { CREATE_STACK } from "./CodingUsQuestion.Queries";
export default function CodingUsQuestion() {
  const [createQuestion] = useMutation<
    Pick<IMutation, "createStack">,
    IMutationCreateStackArgs
  >(CREATE_STACK);
  const [inputs, setInputs] = useState<{
    title: string;
    contents: string;
  }>({ title: "", contents: "" });
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();
  // const userInfo = useStore((state) => state.userInfo);
  const onClickSubmit = async () => {
    try {
      if (!(inputs.title && inputs.contents && tags.length)) {
        alert("입력 항목 누락");
        return;
      }
      const result = await createQuestion({
        variables: { ...inputs, stacktag: tags },
      });
      if (!result.data?.createStack.id) {
        alert("등록 실패");
        return;
      }

      router.push(`/codingus/question/${result.data.createStack.id}`);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const onChangeInput =
    (gubun: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const temp = { ...inputs };
      setInputs({ ...temp, [gubun]: event.target.value });
    };

  const onClickDeleteTags = (e) => {
    setTags(tags.filter((_, i) => Number(e.target.id) !== i));
  };

  const onChangeTags = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (e.key === "Backspace" && e.currentTarget.value === "") {
      console.log(e.currentTarget.id);
      return setTags(tags.filter((_, i) => i + 1 !== tags.length));
    } else {
      if (tags.length > 1) {
        e.currentTarget.value = "";
        return alert("최대 두 개까지 입력 가능합니다.");
      } else {
        if (e.key === "Enter") {
          if (e.currentTarget.value === "") {
            setTags([...tags]);
            e.currentTarget.value = "";
          } else {
            setTags([...tags, e.currentTarget.value]);
            e.currentTarget.value = "";
          }
        }
      }
    }
  };
  return (
    <CodingUsLayout
      children={
        <CoachingUsQuestionUI
          // nickname={userInfo.nickname || ""}
          nickname={""}
          inputs={inputs}
          tags={tags}
          onChangeInput={onChangeInput}
          onClickSubmit={onClickSubmit}
          onClickDeleteTags={onClickDeleteTags}
          onChangeTags={onChangeTags}
        />
      }
    ></CodingUsLayout>
  );
}
