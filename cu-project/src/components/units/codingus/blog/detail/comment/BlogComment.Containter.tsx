import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import CodingUsBlogCommentUI from "./BlogComment.Presenter";
interface IBlogCommentProps {}

const commentList = new Array(1).fill(0).map((el) => {
  return {
    id: "asd",
    user: { name: "작성자", image: "https://source.unsplash.com/random" },
    cretedAt: "2022-02-07T14:42:53.532Z",
    isLiked: true,
    likeCnt: 22,
    contents:
      "댓글 내용입니다댓글 내용입니다댓글 내용입니다댓글 내용입니다댓글 내용입니다댓글 내용입니다댓글 내용입니다댓글 내용입니다댓글 내용입니다댓글 내용입니다",
  };
});

const dummyComments =  [{
  id: "김재민",
  user: { name: "김재민", image: "" },
  cretedAt: "2022-04-05T10:42:53.532Z",
  isLiked: false,
  likeCnt: 0,
  contents:
  "좋은 정보 감사합니다",
},
{
  id: "asd",
  user: { name: "김태훈", image: "" },
  cretedAt: "2022-04-05T11:42:53.532Z",
  isLiked: false,
  likeCnt: 3,
  contents:
  "하하하하하하하하하하",
},
{
  id: "asd",
  user: { name: "최건", image: "" },
  cretedAt: "2022-04-03T11:42:53.532Z",
  isLiked: false,
  likeCnt: 1,
  contents:
  "너무 좋아요",
},
{
  id: "최건",
  user: { name: "최건", image: "" },
  cretedAt: "2022-04-02T14:42:53.532Z",
  isLiked: false,
  likeCnt: 0,
  contents:
  "저도 zustand 공부할래요",
}]

export default function CodingUsBlogComment(props: IBlogCommentProps) {

  const [commentValue, setCommentValue] = useState("");
  const onChangeNewComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const onClickWriteSubmit = (_: MouseEvent<HTMLButtonElement>) => {
  };
  const onClickDeleteComment = (id: string) => () => {};
  const onClickEditComment = (idx: number) => () => {
    setIsEdits(isEdits.map((el, index) => idx === index));
  };
  const onClickEditSubmit = (id: string) => () => {};
  const onLoadMore = () => {};
  const commentCnt = 10;
  const [isEdits, setIsEdits] = useState<boolean[]>([]);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    setIsEdits([...new Array(commentList.length).fill(false)]);
  }, []);

  return (
    <CodingUsBlogCommentUI
      newCommentProps={{
        onChangeNewComment: onChangeNewComment,
        onClickSubmit: onClickWriteSubmit,
        value: commentValue,
        commentCnt: commentCnt,
      }}
      commentListProps={{
        commentList: dummyComments,
        onClickDeleteComment: onClickDeleteComment,
        onClickEditComment: onClickEditComment,
        onLoadMore: onLoadMore,
        onClickSubmit: onClickEditSubmit,
        isEdits: isEdits,
      }}
    />
  );
}
