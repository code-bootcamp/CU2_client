import { DatePicker, Space } from "antd";
import Blank from "../../../../../commons/Blank";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./UserRankingHistory.Style";

export default function UserRankingHistoryUI() {
  const { RangePicker } = DatePicker;
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <S.Box>{`마이페이지 > 점수 내역`}</S.Box>
        <Blank height="30px" />
        <Space direction="vertical" size={12}>
          <RangePicker />
        </Space>
        <S.ChargeBox>
          <S.Row>
            <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
            <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
            <S.ColumnHeaderBasic>점수</S.ColumnHeaderBasic>
            <S.ColumnHeaderBasic>누적 점수</S.ColumnHeaderBasic>
          </S.Row>
          <S.Row>
            <S.ColumnBasic>2022.03.22</S.ColumnBasic>
            <S.ColumnTitle>블로그 작성</S.ColumnTitle>
            <S.ColumnBasic>+1</S.ColumnBasic>
            <S.ColumnBasic>120</S.ColumnBasic>
          </S.Row>
        </S.ChargeBox>
      </S.Wrapper>
    </S.AllWrapper>
  );
}