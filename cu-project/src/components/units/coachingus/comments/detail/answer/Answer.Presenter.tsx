import React from "react";
import Blank from "../../../../../commons/Blank";
import * as S from "./Answer.Style";
import { BiDislike, BiLike } from "react-icons/bi";
import { SiAnsible } from "react-icons/si";
import { MdLockOpen, MdOutlineQuestionAnswer } from "react-icons/md";

export default function AnswerPresenter(props) {
  return (
    <S.CoachAnswerContainer>
      <S.CommentsContainer>
        <S.CommentsTitle>
          <S.CommentsTitleLeft>
            <S.TitlePicture></S.TitlePicture>
            <Blank width="10px" />
            <p>김태훈 coach</p>
          </S.CommentsTitleLeft>
          <S.CommentsTitleRight>
            <S.CommentsInfo>
              <S.CommentsInfoHits>조회수 302</S.CommentsInfoHits>
              <Blank width="20px" />
              <S.CommentsInfoLikes>좋아요 21</S.CommentsInfoLikes>
            </S.CommentsInfo>
          </S.CommentsTitleRight>
        </S.CommentsTitle>

        <S.CommentsContents>
          <Blank height="20px" />
          {props.isOpen ? (
            <S.ContentsAnwer>
              <S.QuestionIcon>
                <SiAnsible
                  style={{
                    background: "#EA345A",
                    color: "white",
                    height: "25px",
                    width: "25px",
                    padding: "1px",
                    borderRadius: "100%",
                  }}
                />
              </S.QuestionIcon>
              <Blank width="20px" />
              <S.QuestionText>
                답변 내용입니다앙~~답변 내용입니다앙~~답변 내용입니다앙~~답변
                내용입니다앙~~답변 내용입니다앙~~답변 내용입니다앙~~답변
                내용입니다앙~~답변 내용입니다앙~~답변 내용입니다앙~~답변
                내용입니다앙~~답변 내용입니다앙~~답변 내용입니다앙~~답변
                내용입니다앙~~답변 내용입니다앙~~답변 내용입니다앙~~답변
                내용입니다앙~~답변 내용입니다앙~~답변 내용입니다앙~~답변
                내용입니다앙~~답변 내용입니다앙~~답변 내용입니다앙~~답변
                내용입니다앙~~답변 내용입니다앙~~답변 내용입니다앙~~답변
                내용입니다앙~~답변 내용입니다앙~~답변 내용입니다앙~~답변
                내용입니다앙~~
              </S.QuestionText>
            </S.ContentsAnwer>
          ) : (
            <S.LockAnswer>
              <S.AnswerUnlockBtn onClick={() => props.setIsModalOpen(true)}>
                <MdLockOpen
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "-5px",
                    marginRight: "10px",
                  }}
                />
                답변 조회하기
              </S.AnswerUnlockBtn>
            </S.LockAnswer>
          )}
          <Blank height="35px" />
          <S.ContentsInfo>
            <p>답변이 도움이 되셨나용?</p>
            <Blank height="20px" />
            <S.InfoBox>
              <S.ContentsInfoLikes>
                <BiLike
                  style={{
                    height: "20px",
                    width: "20px",
                    marginBottom: "1px",
                  }}
                />
                <Blank width="10px" />
                Good 12
              </S.ContentsInfoLikes>
              <Blank width="30px" />
              <S.ContentsInfoDislikes>
                <BiDislike
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                />
                <Blank width="10px" />
                Bad 1
              </S.ContentsInfoDislikes>
            </S.InfoBox>
          </S.ContentsInfo>
        </S.CommentsContents>
      </S.CommentsContainer>
      <p>2022-03-12</p>
      {props.isModalOpen && (
        <>
          <S.ModalWrapper
            onClick={() => props.setIsModalOpen(false)}
          ></S.ModalWrapper>
          <S.PointModal>
            <S.BtnStyle>
              <MdOutlineQuestionAnswer
                style={{
                  width: "70px",
                  height: "70px",
                  color: "white",
                  // padding: "10px",
                  // borderRadius: "100%",
                }}
              />
            </S.BtnStyle>
            <Blank height="50px" />

            <S.ModalText>답변을 열람하시겠습니까?</S.ModalText>
            <Blank height="20px" />
            <S.ModalSubText>
              <p>답변을 한 번 열람하시면,</p>
              <p>앞으로 계속 확인하실 수 있습니다.</p>
            </S.ModalSubText>
            <Blank height="40px" />
            <S.BtnBox>
              <S.ConfirmBtn
                onClick={() => {
                  props.setIsOpen(true);
                  props.setIsModalOpen(false);
                }}
              >
                예, 확인하겠습니다.
              </S.ConfirmBtn>
              <Blank height="10px" />
              <S.refuseBtn
                onClick={() => {
                  props.setIsModalOpen(false);
                }}
              >
                괜찮습니다.
              </S.refuseBtn>
            </S.BtnBox>
          </S.PointModal>
        </>
      )}
    </S.CoachAnswerContainer>
  );
}