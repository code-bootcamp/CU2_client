import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useStore from "../../../../../commons/store/store";
import { IQuery, IUser } from "../../../../../commons/types/generated/types";
import { IUserRankingUI } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import { UserPageNav } from "../../../../commons/Mypage/MypageNav";
import CodingUsRanking from "../../../../commons/Ranking/CodingUsRanking";
import { FETCH_USER_ORDER_BY_SCORE } from "../Mypage.Queries";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./UserRanking.Style";

export default function UserRankingUI(props: IUserRankingUI) {
  const { data: userListOrderByScore } = useQuery<
    Pick<IQuery, "fetchUserOrderbyscore">
  >(FETCH_USER_ORDER_BY_SCORE);
  const [rankingInfos, setRankingInfos] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const myInfo = useStore((state) => state.userInfo);

  useEffect(() => {
    if (!userListOrderByScore) return;
    const temp = [
      ...userListOrderByScore.fetchUserOrderbyscore.filter(
        (_, idx) => idx < (currentPage + 1) * 10
      ),
    ];
    setRankingInfos(temp);
    setCurrentPage((prev) => prev + 1);
  }, []);

  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        <UserPageNav menu={"전체 랭킹보기"} />
        <Blank height="30px" />
        {/* <S.LankingBox>
          <Radio.Group onChange={props.onChangeDuration} defaultValue="daily">
            <Radio.Button value="daily">일간</Radio.Button>
            <Radio.Button value="total">전체</Radio.Button>
          </Radio.Group>
          <span>2022.03.26 - 2022.03.26 , 선택에 따라 달라짐</span>
          <Blank height="30px" />
          <CodingUsRank />
        </S.LankingBox> */}
        <CodingUsRanking rankingInfos={rankingInfos} myInfo={myInfo} />
      </S.Wrapper>
    </S.AllWrapper>
  );
}
