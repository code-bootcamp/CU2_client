import { useRouter } from "next/router";
import React from "react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import Blank from "../../Blank";
import * as S from "./ConfirmModal.Style";

export default function ConfirmModal(props) {
  const router = useRouter();
  return (
    <>
      <S.ModalWrapper
        onClick={() => router.push(props.router)}
      ></S.ModalWrapper>
      <S.PointModal>
        <S.Logo src="/CU2_LOGO.png" />
        <Blank height="50px" />
        <S.ModalText>{props.mainText}</S.ModalText>
        <Blank height="20px" />
        <S.ModalSubText>
          <p>{props.subText}</p>
        </S.ModalSubText>
        <Blank height="40px" />
        {props.type === "duo" ? (
          <>
            <S.BtnBox>
              <S.ConfirmBtn onClick={props.yesBtn}>예</S.ConfirmBtn>
            </S.BtnBox>
            <S.BtnBox>
              <S.ConfirmBtn onClick={() => router.push(props.router)}>
                아니오
              </S.ConfirmBtn>
            </S.BtnBox>
          </>
        ) : (
          <S.BtnBox>
            <S.ConfirmBtn onClick={() => router.push(props.router)}>
              {props.btnText}
            </S.ConfirmBtn>
          </S.BtnBox>
        )}
      </S.PointModal>
    </>
  );
}
