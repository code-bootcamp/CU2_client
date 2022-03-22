import Blank from "../../../../commons/Blank";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./UserPoint.Style";

export default function UserPointUI(props) {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <S.Box>
          <button>충전하기</button>
        </S.Box>
        <Blank height="30px" />
        <S.ChargeBox>
          <S.Row>
            <S.ColumnHeaderBasic>충전일</S.ColumnHeaderBasic>
            <S.ColumnHeaderTitle>결제ID</S.ColumnHeaderTitle>
            <S.ColumnHeaderBasic>충전 내역</S.ColumnHeaderBasic>
            <S.ColumnHeaderBasic>충전 후 잔액</S.ColumnHeaderBasic>
          </S.Row>

          <S.Row>
            <S.ColumnBasic>충전일 내용</S.ColumnBasic>
            <S.ColumnTitle>결제ID 내용</S.ColumnTitle>
            <S.ColumnBasic>충전 내역 내용</S.ColumnBasic>
            <S.ColumnBasic>충전 후 잔액 내용</S.ColumnBasic>
          </S.Row>
        </S.ChargeBox>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
