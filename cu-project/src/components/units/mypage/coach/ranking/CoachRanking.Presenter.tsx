import { Radio } from "antd";
import Blank from "../../../../commons/Blank";
import { CoachPageNav } from "../../../../commons/Mypage/MypageNav";
import CoachpageMenu from "../CoachpageMenu.Container";
import * as S from "./CoachRanking.Style";

export default function CoachRankingUI(props) {
  return (
    <S.AllWrapper>
      <CoachpageMenu />
      <S.Wrapper>
        <CoachPageNav menu={"전체 랭킹보기"} />
        <Blank height="30px" />
        <S.LankingBox>
          <Radio.Group onChange={props.onChangeDuration} defaultValue="daily">
            <Radio.Button value="daily">일간</Radio.Button>
            <Radio.Button value="weekly">주간</Radio.Button>
            <Radio.Button value="monthly">월간</Radio.Button>
            <Radio.Button value="total">전체</Radio.Button>
          </Radio.Group>
          <span>2022.03.26 - 2022.03.26 , 선택에 따라 달라짐</span>
          <Blank height="30px" />
          <img src="/Group 511.png" />
        </S.LankingBox>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
