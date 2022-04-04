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
    }, 3000);
  },[])
  return (
    <>
      <S.ModalWrapper
        onClick={() => router.push(props.router)}
      ></S.ModalWrapper>
      <S.PointModal>
        <S.Logo src="/CU2_LOGO.png" />
        <Blank height="50px" />
        <S.ModalText>{props.beforeScore}(<p>+{props.currScore - props.beforeScore}</p>)</S.ModalText>
        <S.ModalText>{props.currScore}</S.ModalText>
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
