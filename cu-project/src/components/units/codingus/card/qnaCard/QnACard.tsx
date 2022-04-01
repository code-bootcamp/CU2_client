import * as S from "./QnACard.Style";
import Blank from "../../../../commons/Blank";
import Tag02 from "../../../../commons/Tag/Tag02";
import { AiOutlineLike } from "react-icons/ai";
import Label01 from "../../../../commons/Label/Label01";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
interface ICodingUsCardProps {
  width?: number;
  height?: number;
  image?: string;
  tags?: string[];
  title?: string;
  contents?: string;
  writer?: string;
  likeCnt: number;
}

export default function QnACard(props: ICodingUsCardProps) {
  const {moveToPage} = useMoveToPage();
  return (
    <S.Wrapper width={props.width ? `${props.width}px` : "590px"} onClick = {moveToPage("/codingus/question/detail")}>
      <S.Title>
        <img src="/Icon_Fill_Question.png" />
        <Blank width="10px" />
        {props.title}
      </S.Title>
      <Blank height="13px" />
      <S.Contents>{props.contents}</S.Contents>
      <Blank height="8px" />
      <S.TagWrapper>
        {props.tags &&
          props.tags.map((el, idx) => (
            <div key={idx} style={{ display: "flex" }}>
              <Tag02 value={el} />
              <Blank width="30px" />
            </div>
          ))}
      </S.TagWrapper>
      <Blank height="30px" />
      <S.RowWrapper style={{ justifyContent: "space-between" }}>
        <S.Like>
          <AiOutlineLike style={{ width: "25px", height: "25px" }} />
          <Blank width="8px" />
          <Label01 value={String(props.likeCnt)} size="18px" />
        </S.Like>
        <S.Writer>{props.writer}</S.Writer>
      </S.RowWrapper>
    </S.Wrapper>
  );
}
