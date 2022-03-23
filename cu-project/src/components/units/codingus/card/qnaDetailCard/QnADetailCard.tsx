import * as S from "./QnADetailCard.Style";
import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
import { getYYYYMMDD } from "../../../../../commons/libraries/dateUtils";
import { BiLike, BiDislike } from "react-icons/bi";
interface ICodingUsCardProps {
  width?: number;
  height?: number;
  image?: string;
  title?: string;
  contents?: string;
  writer: string;
  isQuestion?: boolean;
  createdAt: string;
  goodCnt?: number;
  badCnt?: number;
  isGood?: boolean;
}

export default function QnADetailCard(props: ICodingUsCardProps) {
  return (
    <S.Wrapper
      width={"100%"}
      height={props.height ? `${props.height}px` : "350px"}
      isQuestion={props.isQuestion ?? false}
    >
      <Blank height="15px" />
      <S.RowWrapper>
        <S.Title>
          <p>{props.isQuestion ? "Q." : "A."}</p> {props.title}
        </S.Title>
        <Label01 value={props.writer} size="24px" weight="700" />
      </S.RowWrapper>
      <Blank height="18px" />
      <HorizontalLine margin={6} />
      <S.Date>{getYYYYMMDD(props.createdAt)}</S.Date>
      <Blank height="28px" />
      <S.Contents>{props.contents}</S.Contents>
      <Blank height="77px" />
      <S.ButtonWrapper>
        <S.Button
          isGood={props.isGood ?? false}
          isQuestion={props.isQuestion ?? false}
        >
          <BiLike />
          <Blank width="16px" />
          Good
          <Blank width="16px" />
          <p>{props.goodCnt ?? 0}</p>
        </S.Button>
        <Blank width="47px" />
        <S.Button isGood={false} isQuestion={props.isQuestion ?? false}>
          <BiDislike />
          <Blank width="16px" />
          Bad
          <Blank width="16px" />
          <p>{props.badCnt ?? 0}</p>
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
