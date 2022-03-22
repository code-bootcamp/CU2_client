import Label01 from "../../../../commons/Label/Label01";
import * as S from "./BlogCard.Style";
import Blank from "../../../../commons/Blank";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { getShortDateString } from "../../../../../commons/libraries/dateUtils";

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  image?: string;
  stacks?: string[];
  title?: string;
  content?: string;
  writer?: string;
  goodCnt?: number;
  badCnt?: number;
  createdAt?: string;
  isGood?: boolean;
  isBad?: boolean;
}

export default function BlogCard(props: ICodingUsCardProps) {
  const { moveToPage } = useMoveToPage();
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "387px"}
      height={props.height ? `${props.height}px` : "521px"}
    >
      <S.Image src={props.image} />
      <S.Body>
        <Blank height="16px" />
        <S.StackWrapper>
          {/* {props.stacks &&
            props.stacks.map((el, idx) => (
              <div style={{ display: "flex" }} key={idx}>
              <S.Stack>{el}</S.Stack>
              <Blank width="10px" />
              </div>
            ))} */}
          {props.stacks && <S.Stack>{props.stacks[0]}</S.Stack>}
        </S.StackWrapper>
        <Blank height="38px" />
        <S.Title>{props.title}</S.Title>
        <Blank height="30px" />
        <S.Contents>{props.content}</S.Contents>
        <Blank height="11px" />
        <S.Writer>{props.writer}</S.Writer>
      </S.Body>
      <Blank height="20px" />
      <S.FooterWrapper>
        <S.GoodBad>
          <img
            src={
              props.isGood ? "/Icon_Fill_Good.png" : "/Icon_Unfilled_Good.png"
            }
          />
          <Blank width="10px" />
          <Label01 value={String(props.badCnt).padStart(4, "0")} size="18px" />
          <Blank width="26px" />
          <img
            src={props.isBad ? "/Icon_Fill_Bad.png" : "/Icon_Unfilled_Bad.png"}
          />
          <Blank width="10px" />
          <Label01 value={String(props.badCnt).padStart(4, "0")} size="18px" />
        </S.GoodBad>
        <Label01
          value={getShortDateString(props.createdAt)}
          size="18px"
          color="#C4C4C4"
        />
      </S.FooterWrapper>
    </S.Wrapper>
  );
}
