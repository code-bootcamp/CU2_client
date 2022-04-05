import { useRouter } from "next/router";
import { useEffect } from "react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import Blank from "../../Blank";
import * as S from "./ConfirmModal.Style";
interface IScoreModalProps{
  router: string;
  beforeScore: number;
  currScore: number;
}
export default function ScoreModal(props: IScoreModalProps) {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(() => {
      router.push(props.router);
    }, 1500);
  },[])
  return (
    <>
      <S.ModalWrapper
        onClick={() => router.push(props.router)}
      ></S.ModalWrapper>
      <S.PointModal>
        <S.Logo src="/CU2_LOGO.png" />
        <Blank height="50px" />
        <S.ModalText>{"등록이 완료되었습니다."}</S.ModalText>
        <Blank height="50px"/>
        <S.ModalText>나의 점수 {props.beforeScore}(<p>+{1}</p>)</S.ModalText>
        <Blank height="20px" />
        <S.ModalSubText>
          <p>{props.subText}</p>
        </S.ModalSubText>
        {props.list && (
          <>
            {props.list.map((el, index) => (
              <S.ModalSubText key={index}>
                <p>{el}</p>
              </S.ModalSubText>
            ))}
          </>
        )}

        <Blank height="40px" />
      </S.PointModal>
    </>
  );
}
