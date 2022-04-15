import * as S from "./BlogShortCard.Style";
import Blank from "../../../../commons/Blank";
import Tag01 from "../../../../commons/Tag/Tag01";
import { useRouter } from "next/router";
import { IBlog } from "../../../../../commons/types/generated/types";
import { getImagesFromMD } from "../../../../../commons/libraries/mdUtils";

interface ICodingUsCardProps {
  data: IBlog;
}

export default function BlogShortCard(props: ICodingUsCardProps) {
  const router = useRouter();
  return (
    <S.Wrapper
      width={"285px"}
      height={"327px"}
      onClick={() =>{router.push("/codingus/blog/detail")}}
    >
      {/* <S.Item> */}
    <Tag01 isShort={true} value={props.data.blogcategorytag?.[0].tag || "기타"} />
      {/* </S.Item> */}
      <Blank height="18px" />
      <S.ImageWrapper>
      <S.Image src={getImagesFromMD(props.data.contents)[0] || "/CU2_LOGO.png"}/>
      </S.ImageWrapper>
      <Blank height="19px" />
      {/* <S.Item> */}
      <S.Contents>{props.data.title}</S.Contents>
      {/* </S.Item> */}
    </S.Wrapper>
  );
}
