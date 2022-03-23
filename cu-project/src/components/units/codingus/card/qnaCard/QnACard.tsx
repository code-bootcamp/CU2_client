import * as S from "./QnACard.Style";
import Blank from "../../../../commons/Blank";
import Tag02 from "../../../../commons/Tag/Tag02";

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  image?: string;
  tags?: string[];
  title?: string;
  contents?: string;
  writer?: string;
}

export default function QnACard(props: ICodingUsCardProps) {
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "590px"}
      height={props.height ? `${props.height}px` : "304px"}
    >
      <S.TagWrapper>
        {props.tags &&
          props.tags.map((el, idx) => (
            <div key={idx} style={{display: "flex"}}>
              <Tag02 value={el} />
              <Blank width="12px" />
            </div>
          ))}
      </S.TagWrapper>

      <Blank height="15px" />
      <S.Title>{props.title}</S.Title>
      <Blank height="28px" />
      <S.Contents>{props.contents}</S.Contents>
      <Blank height="35px" />
      <S.Writer>{props.writer}</S.Writer>
    </S.Wrapper>
  );
}
