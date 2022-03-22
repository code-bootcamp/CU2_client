import Blank from "../../../../commons/Blank";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./UserRanking.Style";

export default function UserRankingUI() {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <S.Box>랭킹</S.Box>
        <Blank height="30px" />

        <S.ChargeBox>
          <span>일간</span> | <span>주간</span> | <span>월간</span> |{" "}
          <span>전체</span>
          <S.Row>
            <S.ColumnHeaderBasic>충전일</S.ColumnHeaderBasic>
            <S.ColumnHeaderTitle>결제ID</S.ColumnHeaderTitle>
            <S.ColumnHeaderBasic>충전/구매 내역</S.ColumnHeaderBasic>
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
