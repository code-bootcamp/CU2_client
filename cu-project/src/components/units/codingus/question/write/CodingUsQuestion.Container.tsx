import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
import { useAuth } from "../../../../commons/hooks/useAuth";
import {
  IMutation,
  IMutationCreateStackArgs,
  IUser,
} from "../../../../../commons/types/generated/types";
import CodingUsLayout from "../../layout/CodingUsLayout";
import CoachingUsQuestionUI from "./CodingUsQuestion.Presenter";
import { CREATE_STACK } from "./CodingUsQuestion.Queries";
import { getLoggenInUser } from "../../../../../commons/libraries/getLoggedInUser";
import useStore from "../../../../../commons/store/store";
export default function CodingUsQuestion() {
  useAuth();
  const accessToken = useStore((state) => state.accessToken);
  const [userInfo, setUserInfo] = useState<IUser>();
  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await getLoggenInUser(accessToken);
      setUserInfo(userInfo);
    };
    getUserInfo()
  }, []);
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
      return setTags(tags.filter((_, i) => i + 1 !== tags.length));
    } else {
      if (tags.length > 2) {
        e.currentTarget.value = "";
        return alert("최대 3 개까지 입력 가능합니다.");
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
          nickname={userInfo?.nickname}
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
