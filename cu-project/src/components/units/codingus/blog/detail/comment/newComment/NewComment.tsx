import { ChangeEvent, MouseEvent } from "react";
import Blank from "../../../../../../commons/Blank";
import Button02 from "../../../../../../commons/Button/Button02";
import Label01 from "../../../../../../commons/Label/Label01";
import * as S from "./style";

interface INewCommentProps {
  commentCnt: number;
  onChangeNewComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function NewComment(props: INewCommentProps) {
  return (
    <S.Wrapper>
      <Label01
        value={`${props.commentCnt}개의 댓글`}
        weight="700"
        size="24px"
      />
      <Blank height="20px" />
      <S.CommentInput
        placeholder="댓글을 작성하세요"
        value={props.value}
        onChange={props.onChangeNewComment}
      />
      <Blank height="30px" />
      <S.Footer>
        <Button02
          value={"댓글 작성"}
          padding="10px 20px 10px 20px"
          onClick={props.onClickSubmit}
        />
      </S.Footer>
    </S.Wrapper>
  );
}
