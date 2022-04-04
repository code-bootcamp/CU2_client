import { AiOutlinePicture } from "react-icons/ai";
import { ICoachingUsQuestionUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import CoachingUsSidebar from "../../sidebar/CoachingUsSidebar.Container";
import CoachingUsCoachCard from "../CoachingUsCoachCard";
import * as S from "./CoachingUsQuestion.Style";

export default function CoachingUsQuestionUI(
  props: ICoachingUsQuestionUIProps
) {
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
      <S.CoachQuestionWrapper>
        <S.CoachQuestionTitle>코치에게 질문하기</S.CoachQuestionTitle>
        <Blank height="30px" />
        <S.CoachQuestionSubTitle>
          <p>{props.data?.fetchmyuser?.nickname}님, 고민이 있나요?</p>
          <Blank height="10px" />
          <p>커리어, 직무 고민에 대한 해답을 코치님에게 직접 들어보세요!</p>
        </S.CoachQuestionSubTitle>
        <Blank height="50px" />
        <S.CoachQuestionExample>
          <h1>질문을 구체적으로 작성해 주세요.</h1>
          <h2>
            <p>예시.</p>
            <Blank width="5px" /> 영업 직무 취업을 목표로 3개월 계획을
            세웠습니다.
          </h2>
          <h2>
            <p>예시.</p> <Blank width="5px" />
            외국계 기업에서 좋은 조건으로 인터뷰를 제안했습니다.
          </h2>
        </S.CoachQuestionExample>
        <Blank height="50px" />
        <S.ContainerQuestionBody>
          <S.QuestionCategory>
            <S.CategoryIntroduceBtn
              isCategory={props.isCategory === "RESUME"}
              onClick={() => props.setIsCategory("RESUME")}
            >
              자기소개서
            </S.CategoryIntroduceBtn>
            <Blank width="25px" />
            <S.CategoryIntroduceBtn2
              isCategory={props.isCategory === "PORTFORLIO"}
              onClick={() => props.setIsCategory("PORTFORLIO")}
            >
              포트폴리오
            </S.CategoryIntroduceBtn2>
          </S.QuestionCategory>
          <Blank height="50px" />
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
          <S.QuestionBtn onClick={props.onClickCreateQuestion}>
            작성하기
          </S.QuestionBtn>
        </S.ContainerQuestionBody>
      </S.CoachQuestionWrapper>
    </S.Wrapper>
  );
}
