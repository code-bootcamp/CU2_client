import * as S from "./BlogShortCard.Style";
import Blank from "../../../../commons/Blank";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import Tag01 from "../../../../commons/Tag/Tag01";

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  image?: string;
  stacks?: string[];
  title?: string;
}

export default function BlogShortCard(props: ICodingUsCardProps) {
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "285px"}
      height={props.height ? `${props.height}px` : "327px"}
    >
      <Tag01 value={props.stacks ? props.stacks[0] : ""} />
      <Blank height="18px" />
      <S.Image src={props.image ?? "https://source.unsplash.com/random"} />
      <Blank height="19px" />
      <S.Contents>{props.title}</S.Contents>
    </S.Wrapper>
  );
}
