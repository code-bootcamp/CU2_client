import { AiOutlinePicture } from "react-icons/ai";
import { ICoachingUsQuestionUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import * as S from "./CoachingUsQuestion.Style";

export default function CoachingUsQuestionUI(
  props: ICoachingUsQuestionUIProps
) {
  return (
    <S.CoachQuestionWrapper>
      <S.CoachQuestionTitle>코치에게 질문하기</S.CoachQuestionTitle>
      <Blank height="30px" />
      <S.CoachQuestionSubTitle>
        <p>myname님, 고민이 있나요?</p>
        <Blank height="10px" />
        <p>커리어, 직무 고민에 대한 해답을 코치님에게 직접 들어보세요!</p>
      </S.CoachQuestionSubTitle>
      <Blank height="50px" />
      <S.CoachQuestionExample>
        <h1>질문을 구체적으로 작성해 주세요.</h1>
        <h2>
          <p>예시.</p>
          <Blank width="5px" /> 영업 직무 취업을 목표로 3개월 계획을 세웠습니다.
        </h2>
        <h2>
          <p>예시.</p> <Blank width="5px" />
          외국계 기업에서 좋은 조건으로 인터뷰를 제안했습니다.
        </h2>
      </S.CoachQuestionExample>
      <Blank height="50px" />
      <S.ContainerQuestionBody>
        <S.QuestionCategory>
          <S.CategoryTitle>분야</S.CategoryTitle>
          <S.CategoryIntroduceBtn
            isCategory={props.isCategory}
            onClick={() => props.setIsCategory(false)}
          >
            자기소개서
          </S.CategoryIntroduceBtn>
          <S.CategoryPortfolioBtn
            isCategory={props.isCategory}
            onClick={() => props.setIsCategory(true)}
          >
            포트폴리오
          </S.CategoryPortfolioBtn>
        </S.QuestionCategory>
        <Blank height="50px" />
        <S.QuestionTitle
          type="text"
          placeholder="제목을 작성해주세요."
        ></S.QuestionTitle>
        <Blank height="50px" />
        <S.QuestionContents placeholder="질문을 작성해주세요."></S.QuestionContents>
        <Blank height="50px" />

        <S.QuestionFilesBox>
          <S.FileTag>파일첨부</S.FileTag>
          <S.FileInput defaultValue={props.fileName} />
          <AiOutlinePicture
            onClick={props.onClickRef}
            style={{
              height: "35px",
              width: "35px",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          />
        </S.QuestionFilesBox>
        <S.QuestionFilesF
          type="file"
          onChange={props.onChangeFile}
          ref={props.fileRef}
        ></S.QuestionFilesF>
        <Blank height="50px" />
        <S.QuestionBtn>작성하기</S.QuestionBtn>
      </S.ContainerQuestionBody>
    </S.CoachQuestionWrapper>
  );
}
