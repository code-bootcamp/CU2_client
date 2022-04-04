import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import CodingUsBlogCommentUI from "./BlogComment.Presenter";
interface IBlogCommentProps {}

const commentList = new Array(10).fill(0).map((el) => {
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
        commentList: commentList,
        onClickDeleteComment: onClickDeleteComment,
        onClickEditComment: onClickEditComment,
        onLoadMore: onLoadMore,
        onClickSubmit: onClickEditSubmit,
        isEdits: isEdits,
      }}
    />
  );
}
