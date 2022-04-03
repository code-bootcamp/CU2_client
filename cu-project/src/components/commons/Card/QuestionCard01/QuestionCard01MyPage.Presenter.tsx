import { AiOutlineLike } from "react-icons/ai";
import { getShortDateString } from "../../../../commons/libraries/dateUtils";
import { IWatingItemProps } from "../../../../commons/types/types";
import Blank from "../../Blank";
import Icon01 from "../../Icon/Icon01/Icon01";
import Label01 from "../../Label/Label01";
import Tag01 from "../../Tag/Tag01";
import Tag02 from "../../Tag/Tag02";
import * as S from "./QuestionCard01MyPage.Style";

export default function QuestionCard01MyPageUI(props: IWatingItemProps) {
  return (
    <S.Wrapper>
      <S.RowWrapper>
        <Tag01 value={props.data?.stacktag[0].tag} isShort={true} />
        <Blank width="20px" />
        {props.data?.contents.split("![contents]")[0].split(",") &&
          props.data?.contents
            .split("![contents]")[0]
            .split(",")
            .map((el, idx) => (
              <S.TagWrapper key={idx}>
                <Tag02 value={el} />
                <Blank width="10px" />
              </S.TagWrapper>
            ))}
      </S.RowWrapper>
      <Blank height="17px" />
      <S.RowWrapper style={{ justifyContent: "space-between" }}>
        <S.Title>{props.data?.title}</S.Title>
        <Label01
          value={getShortDateString(
            props.data?.createAt ?? "2022-02-07T14:42:53.532Z"
          )}
          size="24px"
          weight="200"
        />
        {props.isAnswered && (
          <S.AnswerBtn onClick={props.onClickAnswer}>답변하기</S.AnswerBtn>
        )}
      </S.RowWrapper>
      <Blank height="17px" />
      <S.RowWrapper>
        <Icon01 src="/Icon_Unfill_Comment.png" value={0} />
      </S.RowWrapper>
      <S.RowWrapper>
        <AiOutlineLike /> {props.data.like}
      </S.RowWrapper>
    </S.Wrapper>
  );
}
