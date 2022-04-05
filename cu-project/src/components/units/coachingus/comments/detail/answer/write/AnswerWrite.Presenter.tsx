import React from "react";
import * as S from "./AnswerWrite.Style";
import { BiDislike, BiLike } from "react-icons/bi";
import { SiAnsible } from "react-icons/si";
import { MdLockOpen, MdOutlineQuestionAnswer } from "react-icons/md";
import Blank from "../../../../../../commons/Blank";
import CoachingUsCoachCard from "../../../../profile/CoachingUsCoachCard";
import CoachingUsSidebar from "../../../../sidebar/CoachingUsSidebar.Container";
export default function AnswerWritePresenter(props) {
  return (
    <S.Wrapper>
      <S.CoachSidebar>
        <S.AddSideBar>
          <CoachingUsSidebar />
        </S.AddSideBar>
        <Blank height="50px" />
      </S.CoachSidebar>
      <S.CoachAnswerWrapper>
        <S.CoachQuestionSubTitle>
          <p>조진일님, 고민이 있나요?</p>
          <Blank height="10px" />
          <p>커리어, 직무 고민에 대한 해답을 코치님에게 직접 들어보세요!</p>
        </S.CoachQuestionSubTitle>
        <Blank height="50px" />
        <S.ContainerQuestionBody>
          <S.QuestionTitle
            value={props.title}
            onChange={props.onChangeTitle}
            type="text"
            placeholder="제목을 작성해주세요."
          ></S.QuestionTitle>
          <Blank height="50px" />
          <S.QuestionContents
            value={props.contents}
            onChange={props.onChangeContents}
            placeholder="질문을 작성해주세요."
          ></S.QuestionContents>
          <Blank height="50px" />

          <Blank height="50px" />
          <S.QuestionBtn onClick={props.onClickCreateAnswer}>
            작성하기
          </S.QuestionBtn>
        </S.ContainerQuestionBody>
      </S.CoachAnswerWrapper>
    </S.Wrapper>
  );
}
