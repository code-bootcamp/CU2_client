import React, { ChangeEvent, MouseEvent } from "react";
import { ICodingUsCommentsProps } from "../../../../../../commons/types/types";
import Blank from "../../../../../commons/Blank";
import * as S from "./BlogComment.Style";
import CommentList from "./commentList/CommentList";
import NewComment from "./newComment/NewComment";

interface ICodingUsBlogCommentProps {
  newCommentProps: {
    commentCnt: number;
    onChangeNewComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  };
  commentListProps: {
    commentList: ICodingUsCommentsProps[];
    onClickDeleteComment: (id: string) => () => void;
    onClickEditComment: (id: string) => () => void;
    onLoadMore: () => void;
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
