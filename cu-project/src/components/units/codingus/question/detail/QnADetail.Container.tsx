import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreateStackCommentArgs,
  IMutationDeleteStackArgs,
  IMutationUpdateStackArgs,
  IQuery,
  IQueryFetchStackCommentorderbycreateArgs,
  IQueryFetchStackCommentorderbylikeArgs,
  IQueryFetchStackOnebystackidArgs,
} from "../../../../../commons/types/generated/types";
import CodingUsLayout from "../../layout/CodingUsLayout";
import CodingUsQnADetailUI from "./QnADetail.Presenter";
import {
  CREATE_STACK_COMMENT,
  DELETE_STACK,
  FETCH_STACK_COMMENT_ORDERBY_CREATE,
  FETCH_STACK_COMMENT_ORDERBY_LIKE,
  FETCH_STACK_ONE_BY_STACK_ID,
  UPDATE_STACK,
} from "./QnADetail.Queries";

export default function CodingUsQnADetail() {
  const router = useRouter();

  const { data: questionData } = useQuery<
    Pick<IQuery, "fetchStackOnebystackid">,
    IQueryFetchStackOnebystackidArgs
  >(FETCH_STACK_ONE_BY_STACK_ID, {
    variables: { stackid: String(router.query.questionId) },
  });
  const [crateStackComment] = useMutation<
    Pick<IMutation, "createStackComment">,
    IMutationCreateStackCommentArgs
  >(CREATE_STACK_COMMENT);
  const [updateStack] = useMutation<
    Pick<IMutation, "updateStack">,
    IMutationUpdateStackArgs
  >(UPDATE_STACK);
  const [deleteStack] = useMutation<
    Pick<IMutation, "deleteStack">,
    IMutationDeleteStackArgs
  >(DELETE_STACK);
  const { data: answerListDate } = useQuery<
    Pick<IQuery, "fetchStackCommentorderbycreate">,
    IQueryFetchStackCommentorderbycreateArgs
  >(FETCH_STACK_COMMENT_ORDERBY_CREATE, {
    variables: { stackid: String(router.query.questionId) },
  });
  const { data: answerListLike } = useQuery<
    Pick<IQuery, "fetchStackCommentorderbylike">,
    IQueryFetchStackCommentorderbylikeArgs
  >(FETCH_STACK_COMMENT_ORDERBY_LIKE, {
    variables: { stackid: String(router.query.questionId) },
  });

  const [isSortLike, setIsSortLike] = useState(false);
  const toggleSortGubun = () => {
    setIsSortLike((prev) => !prev);
  };
  const [editValue, setEditValue] = useState("");
  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {};

  useEffect(() => {
    if (questionData?.fetchStackOnebystackid)
      setEditValue(questionData?.fetchStackOnebystackid.contents);
  }, [questionData]);

  const onClickDelete =
    (gubun: "question" | "answer", id: string) => async () => {
      // 삭제 확인
      try {
        if (gubun === "question") {
          const result = await deleteStack({
            variables: { stackid: String(router.query.questionId) },
          });

          if (!result.data?.deleteStack) {
            alert("삭제 실패");
            return;
          }
          alert("삭제 성공");
          router.push("/codingus/question");
        }
      } catch (err: any) {
        // 실패(err.message);
      }
    };

  const onClickEditSubmit = (id: string) => async () => {
    try {
      if (!questionData?.fetchStackOnebystackid || !editValue) {
        alert("수정할 내용을 입력하세요.");
        return;
      }
      const result = await updateStack({
        variables: {
          title: String(questionData?.fetchStackOnebystackid.title),
          stackid: String(router.query.stackId),
          contents: editValue,
        },
      });
      if (result.data?.updateStack.id) {
        alert("수정 실패");
        return;
      }
      location.reload();
    } catch (err: any) {
      alert(err.message);
    }
  };
  const onClickSubmitAnswer = (contents: string) => async () => {
    try {
      const result = await crateStackComment({
        variables: { contents, stackid: String(router.query.questionId) },
      });
      if (!result.data?.createStackComment.id) return;
      alert("등록 성공");
    } catch (err: any) {
      alert(err.message);
      location.reload();
    }
  };
  return (
    <CodingUsLayout
      children={
        <CodingUsQnADetailUI
          question={questionData?.fetchStackOnebystackid}
          answers={
            isSortLike
              ? answerListLike?.fetchStackCommentorderbylike
              : answerListDate?.fetchStackCommentorderbycreate
          }
          isSortLike={isSortLike}
          toggleSortGubun={toggleSortGubun}
          onClickButton={onClickButton}
          onClickDelete={onClickDelete}
          onClickEditSubmit={onClickEditSubmit}
          editValue={editValue}
          setEditValue={setEditValue}
          onClickSubmitAnswer={onClickSubmitAnswer}
        />
      }
    ></CodingUsLayout>
  );
}
