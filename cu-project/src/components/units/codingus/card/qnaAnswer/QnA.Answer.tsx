import * as S from "./QnA.Answer.Style";
import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
import { getYYYYMMDD } from "../../../../../commons/libraries/dateUtils";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { useState } from "react";
import { RowWrapper } from "../../../coachingus/columns/detail/Columns.Style";
import Color from "../../../../../commons/styles/color";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { ICodingUsAnswerCardProps } from "../../../../../commons/types/types";
import { SiAnsible } from "react-icons/si";

export default function QnAAnswerCard(props: ICodingUsAnswerCardProps) {
  const [isEdit, setIsEdit] = useState(false);
  const { moveToPage } = useMoveToPage();
  return (
    <S.Wrapper
      width={"100%"}
      height={props.height ? `${props.height}px` : "350px"}
      isMine={true}
      onClick={() => {
        moveToPage("/codingus/question/detail");
      }}
    >
      <Blank height="15px" />
      <S.MyButtonWrapper isMine={true}>
        <RowWrapper>
          <Label01
            value="수정"
            size="16px"
            color={Color.medium}
            onClick={() => {
              setIsEdit((prev) => !prev);
              props.setEditValue("");
            }}
          />
          <Blank width="8px" />
          <Label01
            value="삭제"
            size="16px"
            color={Color.medium}
            onClick={props.onClickDelete("answer", props.data?.id)}
          />
        </RowWrapper>
      </S.MyButtonWrapper>
      {/* isMine */}
      {true && <Blank height="10px" />}
      <S.RowWrapper>
        <S.Title>
          <SiAnsible
            style={{
              background: "#EA345A",
              color: "white",
              height: "35px",
              width: "35px",
              padding: "1px",
              borderRadius: "100%",
            }}
          />
        </S.Title>
        <Label01 value={props.data.user.nickname} size="24px" weight="700" />
      </S.RowWrapper>
      <Blank height="18px" />
      <S.Date>{getYYYYMMDD(props.data.createAt)}</S.Date>
      <Blank height="28px" />
      {!isEdit ? (
        <>
          <S.Contents>{props.data.contents}</S.Contents>
          <Blank height="77px" />
          <S.ButtonWrapper>
            <S.Button
              id="good"
              isGood={props.isGood ?? false}
              onClick={props.onClickBtn}
              style={{ border: `1px solid ${Color.main}` }}
            >
              {props.isGood ? (
                <AiOutlineLike
                  style={{ width: "30px", height: "30px", color: Color.main }}
                />
              ) : (
                <AiFillLike
                  style={{ width: "30px", height: "30px", color: Color.main }}
                />
              )}
              <Blank width="16px" />
              <Label01
                size="18px"
                weight="700"
                value="Good"
                color={Color.main}
              />
              <Blank width="16px" />
              <Label01
                size="18px"
                weight="700"
                value={String(props.data.like ?? 0)}
                color={Color.main}
              />
            </S.Button>
            <Blank width="47px" />
            <S.Button
              id="bad"
              isGood={false}
              onClick={props.onClickBtn}
              style={{ border: `1px solid ${Color.medium}` }}
            >
              {props.isBad ? (
                <AiOutlineDislike
                  style={{ width: "30px", height: "30px", color: Color.medium }}
                />
              ) : (
                <AiFillDislike
                  style={{ width: "30px", height: "30px", color: Color.medium }}
                />
              )}
              <Blank width="16px" />
              <Label01
                size="18px"
                weight="700"
                value="Bad"
                color={Color.medium}
              />
              <Blank width="16px" />
              <Label01
                size="18px"
                weight="700"
                value={String(props.data.dislike ?? 0)}
                color={Color.medium}
              />
            </S.Button>
          </S.ButtonWrapper>
        </>
      ) : (
        <>
          <S.CommentInput
            defaultValue={props.data.contents}
            ref={props.editCommentRef}
          />
          <S.ButtonWrapper>
            <S.Button
              isGood={false}
              style={{ border: `1px solid ${Color.medium}`, width: "173px" }}
            >
              <Label01
                size="18px"
                weight="700"
                value="취소"
                color={Color.medium}
                width={"100%"}
                textAlign="center"
              />
            </S.Button>
            <Blank width="16px" />
            <S.Button
              isGood={false}
              style={{ border: `1px solid ${Color.main}`, width: "173px" }}
              onClick={props.onClickEditAnswer(props.data.id)}
            >
              <Label01
                size="18px"
                weight="700"
                value="수정"
                color={Color.main}
                width={"100%"}
                textAlign="center"
              />
            </S.Button>
          </S.ButtonWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
