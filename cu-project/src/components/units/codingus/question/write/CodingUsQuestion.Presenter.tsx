import Blank from "../../../../commons/Blank";
import * as S from "./CodingUsQuestion.Style";
import {v4 as uuidv4} from "uuid"
import { ICodingUsQuestionUIProps } from "../../../../../commons/types/types";


export default function CodingUsQuestionUI(props: ICodingUsQuestionUIProps) {
  return (
    <S.Wrapper>
      <S.CoachQuestionWrapper>
        <S.CoachQuestionTitle>질문하기</S.CoachQuestionTitle>
        <Blank height="30px" />
        <S.CoachQuestionSubTitle>
          <p>{props.nickname || "uesename"}님, 고민이 있나요?</p>
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
            <S.QuestionTitle
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeInput("title")}
            ></S.QuestionTitle>
            <Blank height="25px" />
            <S.TagBox>
              {props.tags.map((tag, index) => (
                <S.TagItem
                  id={String(index)}
                  key={uuidv4()}
                  onClick={props.onClickDeleteTags}
                >
                  #{tag}
                </S.TagItem>
              ))}
              <S.TagInput
                placeholder="태그를 입력해주세요."
                onKeyDown={props.onChangeTags}
                disabled={props.tags.length > 1}
                isFull={props.tags.length > 1}
              />
            </S.TagBox>
          <Blank height="25px" />
          <S.QuestionContents
            placeholder="질문을 작성해주세요."
            onChange={props.onChangeInput("contents")}
          ></S.QuestionContents>
          <Blank height="50px" />
          <S.QuestionBtn onClick={props.onClickSubmit}>작성하기</S.QuestionBtn>
        </S.ContainerQuestionBody>
      </S.CoachQuestionWrapper>
    </S.Wrapper>
  );
}
