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
            <S.QuestionPicture />
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
              <p>
                질문 제목입니당~질문 제목입니당~질문 제목입니당~질문
                제목입니당~질문 제목입니당~질문 제목입니당~질문 제목입니당~질문
              </p>
            </S.QuestionTitle>
            <S.QuestionProfile></S.QuestionProfile>
            <S.QuestionContents>
              질문 내용입니당~~~질문 내용입니당~~~질문 내용입니당~~~질문
              내용입니당~~~질문 내용입니당~~~질문 내용입니당~~~
            </S.QuestionContents>
          </S.QuestionContainer>
        </S.CoachQuestionContainer>
        <Blank height="50px" />

        {/* 답변 내용 */}
        {props.answerList.length ? (
          <AnswerComponent />
        ) : (
          <S.CoachAnswerContainer>
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
          </S.CoachAnswerContainer>
        )}
      </S.CommentsBody>
    </S.Wrapper>
  );
}
