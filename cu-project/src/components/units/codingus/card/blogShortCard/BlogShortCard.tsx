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
      {/* <S.Item> */}
    <Tag01 isShort={true} value={props.stacks ? props.stacks[0] : ""} />
      {/* </S.Item> */}
      <Blank height="18px" />
      <S.ImageWrapper>
      <S.Image src={props.image || "/CU2_LOGO.png"}  imageUrl={props.image}/>
      </S.ImageWrapper>
      <Blank height="19px" />
      {/* <S.Item> */}
      <S.Contents>{props.title}</S.Contents>
      {/* </S.Item> */}
    </S.Wrapper>
  );
}
