// import { ICoachingUsCommentsUIProps } from "../../../../commons/types/types";
import { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { SiAnsible } from "react-icons/si";

import { BsQuestionCircleFill } from "react-icons/bs";
import Blank from "../../../../commons/Blank";
import CoachingUsCoachCard from "../../profile/CoachingUsCoachCard";
import CoachingUsSidebar from "../../sidebar/CoachingUsSidebar.Container";
import * as S from "./Comment.Style";
import AnswerComponent from "./answer/Answer.Container";
import { AiOutlineFieldTime } from "react-icons/ai";

export default function CommentUI(props) {
  return (
    <S.Wrapper>
      <S.CoachSidebar>
        <CoachingUsCoachCard />
        <Blank height="50px" />
        <S.AddSideBar>
          <CoachingUsSidebar />
        </S.AddSideBar>
        <Blank height="50px" />
      </S.CoachSidebar>

      <S.CommentsBody>
        <p>Coach Comment</p>
        <Blank height="20px" />
        <S.CoachQuestionContainer>
          <S.QuestionContainer>
            <Blank height="20px" />
            <S.QuestionTitle>
              <BsQuestionCircleFill
                style={{
                  color: "#EA345A",
                  height: "25px",
                  width: "25px",
                  marginRight: "10px",
                }}
              />
              <p>{props.commentsList?.title}</p>
            </S.QuestionTitle>
            <S.QuestionProfile></S.QuestionProfile>
            <S.QuestionContents>
              {props.commentsList?.contents}
            </S.QuestionContents>
          </S.QuestionContainer>
        </S.CoachQuestionContainer>
        <Blank height="50px" />

        {props.answerList?.length ? (
          <AnswerComponent answer={props.answerList} />
        ) : (
          <S.CoachAnswerContainer onClick={props.onAnswerClick}>
            <S.CommentsContainer>
              <AiOutlineFieldTime
                style={{
                  color: "#EA345A",
                  height: "50px",
                  width: "50px",
                }}
              />
              <Blank height="10px" />
              <p>답변 대기 중입니다.</p>
            </S.CommentsContainer>
            {props.isCoach &&
              props.myData?.fetchmyuser.id === props.router.query.coachId && (
                <button onClick={props.onAnswerClick}>답변하러 가기</button>
              )}
          </S.CoachAnswerContainer>
        )}
      </S.CommentsBody>
    </S.Wrapper>
  );
}
