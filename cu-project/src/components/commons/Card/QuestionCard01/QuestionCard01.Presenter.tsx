import { getShortDateString } from "../../../../commons/libraries/dateUtils";
import { IWatingItemProps } from "../../../../commons/types/types";
import Blank from "../../Blank";
import Label01 from "../../Label/Label01";
import Tag01 from "../../Tag/Tag01";
import Tag02 from "../../Tag/Tag02";
import * as S from "./QuestionCard01.Style";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineLike } from "react-icons/ai";
import { useRouter } from "next/router";

export default function QuestionCard01UI(props: IWatingItemProps) {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.RowWrapper>
        <Tag01 value={String(props.data?.stacktag?.[0].tag)} isShort={true} />
        <Blank width="20px" />
        {props.data?.stacktag
          ?.filter((_, idx) => idx > 0)
          .map((el) => (
            <S.TagWrapper key={uuidv4()}>
              <Tag02 value={el.tag} />
              <Blank width="10px" />
            </S.TagWrapper>
          ))}
      </S.RowWrapper>
      <Blank height="17px" />
      <S.RowWrapper style={{ justifyContent: "space-between" }}>
        <S.Title>{props.data.title}</S.Title>
        <Label01
          value={getShortDateString(
            props.data.createAt ?? "2022-04-03T14:42:53.532Z"
          )}
          size="24px"
          weight="200"
        />
        {props.isAnswered && (
          <S.AnswerBtn onClick={() => {router.push(`/codingus/question/${props.data.id}`)}}>답변하기</S.AnswerBtn>
        )}
      </S.RowWrapper>
      <Blank height="17px" />
      <S.RowWrapper>
        <AiOutlineLike style={{ width: "30px", height: "30px" }} />
        <Blank width="10px" />
        <Label01 value={String(props.data.like)} />
      </S.RowWrapper>
    </S.Wrapper>
  );
}
