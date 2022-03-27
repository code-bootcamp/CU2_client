import Label01 from "../../../../../commons/Label/Label01";
import * as S from "./BlogCard01.Style";
import Blank from "../../../../../commons/Blank";
import { getShortDateString } from "../../../../../../commons/libraries/dateUtils";
import Tag01 from "../../../../../commons/Tag/Tag01";
import { ICodingUsBlogCardProps } from "../../../../../../commons/types/types";

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  blogData: ICodingUsBlogCardProps;
}

export default function BlogCard(props: ICodingUsCardProps) {
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "285px"}
      height={props.height ? `${props.height}px` : "440px"}
    >
      {/* {console.log(props.blogData.images[0])} */}
      <S.Image src={props.blogData?.images?.[0]} />
      <S.Body>
        <Blank height="18px" />
        <S.StackWrapper>
          {props.blogData.stacks && <Tag01 value={props.blogData.stacks[0]} />}
        </S.StackWrapper>
        <Blank height="20px" />
        <S.Title>{props.blogData.title}</S.Title>
        <Blank height="20px" />
        <S.Contents>{props.blogData.content}</S.Contents>
        <Blank height="30px" />
      </S.Body>
      <Blank height="20px" />
      <S.RowWrapper>
        <S.GoodBad>
          <img
            src={
              props.blogData.isLike
                ? "/Icon_Unfill_Good.png"
                : "/Icon_Unfill_Good.png"
            }
          />
          <Blank width="10px" />
          <Label01
            value={String(props.blogData.likeCnt)}
            size="18px"
            padding="0px"
          />
          <Blank width="26px" />
          <img src={"/Icon_Unfill_Comment.png"} />
          <Blank width="10px" />
          <Label01
            value={String(props.blogData.commentCnt)}
            size="18px"
            padding="0px"
          />
        </S.GoodBad>
      </S.RowWrapper>
      <Blank height="15px"/>
      <S.RowWrapper>
        <S.Writer>{props.blogData.writer}</S.Writer>
        <Blank width="23px" />
        <Label01
          value={getShortDateString(String(props.blogData.createdAt))}
          size="18px"
          color="#C4C4C4"
          padding="0px"
        />
      </S.RowWrapper>
    </S.Wrapper>
  );
}
