import { Dispatch, SetStateAction } from "react";
import Blank from "../../Blank";
import * as S from "./ErrorModal.Style";

interface IErrorModalProps {
mainText?: string;
subText?: string;
list?: string[];
setModalVisible: Dispatch<SetStateAction<boolean>>; 
}

export default function ErrorModal(props: IErrorModalProps) {
  return (
    <>
      <S.ModalWrapper
      ></S.ModalWrapper>
      <S.PointModal>
        <S.Logo src="/CU2_LOGO.png" />
        <Blank height="50px" />
        <S.ModalText>{props.mainText}</S.ModalText>
        <Blank height="20px" />
        <S.ModalSubText>
          <p>{props.subText}</p>
        </S.ModalSubText>
        {props.list && (
          <>
            {props.list.map((el: string, index: number) => (
              <S.ModalSubText key={index}>
                <p>{el}</p>
              </S.ModalSubText>
            ))}
          </>
        )}
        <Blank height="40px" />
          <S.BtnBox>
            <S.ConfirmBtn onClick={() => props.setModalVisible(false)}>
              {"확인"}
            </S.ConfirmBtn>
          </S.BtnBox>
      </S.PointModal>
    </>
  );
}
