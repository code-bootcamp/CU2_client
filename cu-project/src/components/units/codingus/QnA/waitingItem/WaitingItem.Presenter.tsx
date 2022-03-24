import { getShortDateString } from "../../../../../commons/libraries/dateUtils";
import { IWatingItemProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import Icon01 from "../../../../commons/Icon/Icon01/Icon01";
import Label01 from "../../../../commons/Label/Label01";
import Tag01 from "../../../../commons/Tag/Tag01";
import Tag02 from "../../../../commons/Tag/Tag02";
import * as S from "./WaitingItem.Style";

export default function WaitingItemUI(props: IWatingItemProps) {
  return (
    <S.Wrapper>
      <S.RowWrapper>
        <Tag01 value={props.data.stack} isShort={true} />
        <Blank width="20px" />
        {props.data.tags &&
          props.data.tags.map((el, idx) => (
            <S.TagWrapper key={idx}>
              <Tag02 value={el} />
              <Blank width="10px" />
            </S.TagWrapper>
          ))}
      </S.RowWrapper>
      <Blank height="17px" />
      <S.RowWrapper style={{ justifyContent: "space-between" }}>
        <S.Title>
          {props.data.title}
          {props.data.images?.[0] && (
            <img src="/Icon_photo.png" style={{ margin: "0px 0px 0px 10px" }} />
          )}
        </S.Title>
        <Label01 value={getShortDateString(props.data.createdAt)} size="24px" weight="200"/>
        <S.AnswerBtn onClick={props.onClickAnswer}>답변하기</S.AnswerBtn>
      </S.RowWrapper>
      <Blank height="17px" />
      <S.RowWrapper>
        <Icon01 src="/Icon_Unfill_Comment.png" value={props.data.commentCnt} />
      </S.RowWrapper>
    </S.Wrapper>
  );
}
