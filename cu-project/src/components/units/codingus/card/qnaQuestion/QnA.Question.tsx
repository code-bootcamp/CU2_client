import * as S from "./QnA.Question.Style";
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
import {
  ChangeEvent,
  useState,
} from "react";
import { RowWrapper } from "../../../coachingus/columns/detail/Columns.Style";
import Color from "../../../../../commons/styles/color";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { ICodingQuestionCardProps } from "../../../../../commons/types/types";

export default function QnAAnswerCard(props: ICodingQuestionCardProps) {
  const [isEdit, setIsEdit] = useState(false);
  const onChangeEditText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.setEditValue(event.target.value);
  };
  const {moveToPage} = useMoveToPage();
  return (
    <S.Wrapper
      width={"100%"}
      height={props.height ? `${props.height}px` : "350px"}
      isMine={true}
      onClick ={()=>{moveToPage("/codingus/question/detail")}}
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
            onClick={props.onClickDelete(
              "props.id"
            )}
          />
        </RowWrapper>
      </S.MyButtonWrapper>
      {/* isMine */}
      {true && <Blank height="10px" />}
      <S.RowWrapper>
        <S.Title>
          <img
            style={{ width: "32px" }}
            src={
                "/Icon_Fill_Question.png"
            }
          />
          <Blank width="10px" /> {props.title}
        </S.Title>
        <Label01 value={props.writer} size="24px" weight="700" />
      </S.RowWrapper>
      <Blank height="18px" />
      <HorizontalLine margin={6} />
      <S.Date>{getYYYYMMDD(props.createdAt)}</S.Date>
      <Blank height="28px" />
      {!isEdit ? (
        <>
          <S.Contents>{props.contents}</S.Contents>
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
                value={String(props.goodCnt ?? 0)}
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
                value={String(props.goodCnt ?? 0)}
                color={Color.medium}
              />
            </S.Button>
          </S.ButtonWrapper>
        </>
      ) : (
        <>
          <S.CommentInput
            defaultValue={props.contents}
            onChange={onChangeEditText}
            value={props.editValue}
          />
          <S.Button
            isGood={false}
            style={{ border: `1px solid ${Color.main}` }}
            onClick={props.onClickEditSubmit(
              "props.id"
            )}
          >
            <Label01 size="18px" weight="700" value="수정" color={Color.main} />
          </S.Button>
        </>
      )}
    </S.Wrapper>
  );
}
