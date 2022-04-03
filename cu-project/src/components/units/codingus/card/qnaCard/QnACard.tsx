import * as S from "./QnACard.Style";
import Blank from "../../../../commons/Blank";
import Tag02 from "../../../../commons/Tag/Tag02";
import { AiOutlineLike } from "react-icons/ai";
import Label01 from "../../../../commons/Label/Label01";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { IStack } from "../../../../../commons/types/generated/types";
import {BsQuestionCircleFill} from "react-icons/bs";
import { useRouter } from "next/router";
interface ICodingUsCardProps {
  width?: number;
  height?: number;
  data: IStack;
}

export default function QnACard(props: ICodingUsCardProps) {
  const router = useRouter();
  return (
    <S.Wrapper width={props.width ? `${props.width}px` : "590px"}>
      <S.Title onClick={() => {router.push(`/codingus/question/${props.data.id}`)}}>
      <BsQuestionCircleFill
              style={{
                color: "#EA345A",
                height: "25px",
                width: "25px",
                marginBottom: "4px",
              }}
            />
        <Blank width="10px" />
        {props.data?.title}
      </S.Title>
      <Blank height="13px" />
      <S.Contents onClick={() => {router.push(`/codingus/question/${props.data.id}`)}}>{props.data?.contents}</S.Contents>
      <Blank height="8px" />
      <S.TagWrapper>
        { props.data?.stacktag&&
          props.data?.stacktag.filter((_,idx) => idx > 0).map((el, idx) => (
            <div key={idx} style={{ display: "flex" }}>
              <Tag02 value={el.tag} />
              <Blank width="30px" />
            </div>
          ))}
      </S.TagWrapper>
      <Blank height="30px" />
      <S.RowWrapper style={{ justifyContent: "space-between" }}>
        <S.Like>
          <AiOutlineLike style={{ width: "25px", height: "25px" }} />
          <Blank width="8px" />
          <Label01 value={String(props.data.like)} size="18px" />
        </S.Like>
        <S.Writer>{props.data.user.nickname}</S.Writer>
      </S.RowWrapper>
    </S.Wrapper>
  );
}
