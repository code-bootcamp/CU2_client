import * as S from "./BlogShortCard.Style";
import Blank from "../../../../commons/Blank";
import Tag01 from "../../../../commons/Tag/Tag01";
import { useRouter } from "next/router";

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  image?: string;
  stacks?: string[];
  title?: string;
}

export default function BlogShortCard(props: ICodingUsCardProps) {
  const router = useRouter();
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "285px"}
      height={props.height ? `${props.height}px` : "327px"}
      onClick={() =>{router.push("/codingus/blog/detail")}}
    >
    <Tag01 isShort={true} value={props.stacks ? props.stacks[0] : ""} />
      <Blank height="18px" />
      <S.Image src={props.image ?? "https://source.unsplash.com/random"} />
      <Blank height="19px" />
      <S.Contents>{props.title}</S.Contents>
    </S.Wrapper>
  );
}
