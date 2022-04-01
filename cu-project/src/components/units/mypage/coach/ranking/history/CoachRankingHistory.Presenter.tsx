import { DatePicker, Space } from "antd";
import Blank from "../../../../../commons/Blank";
import { CoachPageNav } from "../../../../../commons/Mypage/MypageNav";
import CoachpageMenu from "../../CoachpageMenu.Container";
import * as S from "./CoachRankingHistory.Style";

export default function CoachRankingHistoryUI() {
  const { RangePicker } = DatePicker;
  return (
    <S.AllWrapper>
      <CoachpageMenu />
      <S.Wrapper>
        <CoachPageNav menu={"점수내역"} />
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
