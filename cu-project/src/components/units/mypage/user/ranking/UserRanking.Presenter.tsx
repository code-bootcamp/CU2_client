import { Radio } from "antd";
import { IUserRankingUI } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import { UserPageNav } from "../../../../commons/Mypage/MypageNav";
import CodingUsRank from "../../../codingus/us/CodingUsUs.Container";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./UserRanking.Style";

export default function UserRankingUI(props: IUserRankingUI) {
  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        <UserPageNav menu={"전체 랭킹보기"} />
        <Blank height="30px" />
        <S.LankingBox>
          <Radio.Group onChange={props.onChangeDuration} defaultValue="daily">
            <Radio.Button value="daily">일간</Radio.Button>
            <Radio.Button value="total">전체</Radio.Button>
          </Radio.Group>
          <span>2022.03.26 - 2022.03.26 , 선택에 따라 달라짐</span>
          <Blank height="30px" />
          <CodingUsRank />
        </S.LankingBox>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
