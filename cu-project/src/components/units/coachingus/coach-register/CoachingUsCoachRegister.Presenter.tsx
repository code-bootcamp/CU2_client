import { useEffect } from "react";
import Blank from "../../../commons/Blank";
import * as S from "./CoachingUsCoachRegister.Style";

export default function CoachingUsCoachRegisterUI(props) {
  let nameInput;
  useEffect(() => {
    nameInput.focus();
  }, []);
  return (
    <S.Wrapper>
      <S.CoachingRegisterContainer>
        <S.RegisterContainerLeft>
          <S.RegisterForm>
            <S.FormTitle>Coach Register</S.FormTitle>
            <Blank height="10px" />
            <S.FormSubTitle>당신의 경험이 우리를 성장시킵니다.</S.FormSubTitle>
            <Blank height="20px" />
            <S.FormInput
              ref={(input) => {
                nameInput = input;
              }}
              value={props.coachProfile.email}
              name="email"
              type="email"
              placeholder="이메일"
              isFull={props.coachProfile.email}
              onChange={props.onChangeCoachProfile}
              autofocus
            />
            {props.emailTextErr ? (
              <S.ErrorMessageBox>
                이메일 형식이 올바르지 않습니다.
              </S.ErrorMessageBox>
            ) : (
              <Blank height="20px" />
            )}

            <S.FormInput
              type="text"
              name="cor"
              isFull={props.coachProfile.cor}
              onChange={props.onChangeCoachProfile}
              placeholder="회사"
            />
            {props.activateBtn && props.coachProfile.cor === "" ? (
              <S.ErrorMessageBox>필수 입력 사항입니다.</S.ErrorMessageBox>
            ) : (
              <Blank height="20px" />
            )}
            <S.FormInput
              type="text"
              name="subCorType"
              onChange={props.onChangeCoachProfile}
              isFull={props.coachProfile.subCorType}
              placeholder="직책"
            />
            {props.activateBtn && props.coachProfile.subCorType === "" ? (
              <S.ErrorMessageBox>필수 입력 사항입니다.</S.ErrorMessageBox>
            ) : (
              <Blank height="20px" />
            )}
            <S.FormInput
              type="text"
              name="exp"
              isFull={props.coachProfile.exp}
              onChange={props.onChangeCoachProfile}
              placeholder="경력"
            />
            {props.activateBtn && props.coachProfile.exp === "" ? (
              <S.ErrorMessageBox>필수 입력 사항입니다.</S.ErrorMessageBox>
            ) : (
              <Blank height="20px" />
            )}
            <Blank height="30px" />
            <div>
              (필수) 기업 유형을 선택해주세요
              <Blank height="10px" />
              <S.CorGroup>
                <S.CorGroupButton
                  value="대기업"
                  isCurrent={props.corType === "대기업"}
                  onClick={props.onClickCorType}
                >
                  대기업
                </S.CorGroupButton>
                <Blank width="10px" />
                <S.CorGroupButton
                  value="중견기업"
                  isCurrent={props.corType === "중견기업"}
                  onClick={props.onClickCorType}
                >
                  중견기업
                </S.CorGroupButton>
                <Blank width="10px" />
                <S.CorGroupButton
                  value="스타트업"
                  isCurrent={props.corType === "스타트업"}
                  onClick={props.onClickCorType}
                >
                  스타트업
                </S.CorGroupButton>
                <Blank width="10px" />
                <S.CorGroupButton
                  value="공기업"
                  isCurrent={props.corType === "공기업"}
                  onClick={props.onClickCorType}
                >
                  공기업
                </S.CorGroupButton>
                <Blank width="10px" />
                <S.CorGroupButton
                  value="외국계"
                  isCurrent={props.corType === "외국계"}
                  onClick={props.onClickCorType}
                >
                  외국계
                </S.CorGroupButton>
              </S.CorGroup>
            </div>
            <Blank height="10px" />
            {props.activateBtn && props.corType === "" ? (
              <S.ErrorMessageBox>필수 입력 사항입니다.</S.ErrorMessageBox>
            ) : (
              <Blank height="20px" />
            )}
            <Blank height="20px" />
            <div>
              (필수) 본인을 나타내는 태그 2개
              <Blank height="10px" />
            </div>
            <S.TagBox>
              {props.tags.map((tag, index) => (
                <S.TagItem
                  id={index}
                  key={index}
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
            {props.activateBtn && props.tags.length < 2 ? (
              <S.ErrorMessageBox>
                두 가지 태그를 입력해주세요.
              </S.ErrorMessageBox>
            ) : (
              <Blank height="20px" />
            )}
            <Blank height="30px" />
            <S.ButtonBox>
              <S.RegisterButton onClick={props.coachRegisterBtn}>
                지원하기
              </S.RegisterButton>
              <S.GetOutButton onClick={props.moveToPage("/coachingus")}>
                나가기
              </S.GetOutButton>
            </S.ButtonBox>
          </S.RegisterForm>
        </S.RegisterContainerLeft>
        <S.RegisterContainerRight></S.RegisterContainerRight>
      </S.CoachingRegisterContainer>
    </S.Wrapper>
  );
}
