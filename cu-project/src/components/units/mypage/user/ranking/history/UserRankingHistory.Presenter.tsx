import { DatePicker, Space } from "antd";
import Blank from "../../../../../commons/Blank";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./UserRankingHistory.Style";

export default function UserRankingHistoryUI() {
  const { RangePicker } = DatePicker;
  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        <UserPageNav menu={"점수내역"} />
        <Blank height="30px" />
        <Space direction="vertical" size={12}>
          <RangePicker />
        </Space>
        <S.ChargeBox>
          <S.Row>
            <S.ColumnDate>날짜</S.ColumnDate>
            <S.ColumnContent>내용</S.ColumnContent>
            <S.ColumnScore>점수</S.ColumnScore>
            <S.ColumnAllScore>누적 점수</S.ColumnAllScore>
          </S.Row>
          <S.Row>
            <S.ColumnDate>2022.03.22</S.ColumnDate>
            <S.ColumnContent>블로그 작성</S.ColumnContent>
            <S.ColumnScore>+1</S.ColumnScore>
            <S.ColumnAllScore>120</S.ColumnAllScore>
          </S.Row>
        </S.ChargeBox>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
