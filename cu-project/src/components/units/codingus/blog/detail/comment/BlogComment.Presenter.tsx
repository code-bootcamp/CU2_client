import { RefObject } from "react";
import { IBlogComment } from "../../../../../../commons/types/generated/types";
import Blank from "../../../../../commons/Blank";
import * as S from "./BlogComment.Style";
import CommentList from "./commentList/CommentList";
import NewComment from "./newComment/NewComment";

interface ICodingUsBlogCommentProps {
  newCommentProps: {
    commentCnt: number;
    commentRef: RefObject<HTMLTextAreaElement>;
    onClickSubmit: () => void;
  };
  commentListProps: {
    commentList: IBlogComment[];
    onClickDeleteComment: (id: string) => () => void;
    onClickEditComment: (idx: number) => () => void;
    onClickSubmit: (id: string) => () => void;
    onLoadMore: () => void;
    isEdits: boolean[];
  };
}

export default function CodingUsBlogCommentUI(
  props: ICodingUsBlogCommentProps
) {
  return (
    <S.Wrapper>
      <Blank height="50px" />
      <NewComment {...props.newCommentProps} />
      <Blank height="50px" />
      <CommentList {...props.commentListProps} />
    </S.Wrapper>
  );
}
