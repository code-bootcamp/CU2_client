import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsRankUI from "./CodingUsUs.Presenter";
import { FETCH_USER_ORDER_BY_SCORE } from "./CodingUsUs.Queries";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { IQuery, IUser } from "../../../../commons/types/generated/types";
import useStore from "../../../../commons/store/store";

export default function CodingUsRank() {
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

  // 랭킹 api미구현... 나중에 합시다....
  // const onClickPeriodGubun = (gubun: string) => () => {
  //   setGubun(gubun);
  // };
  // useEffect(() => {
  //   // 바뀐 정렬 기준으로 재 요청
  // }, [gubun]);

  return (
    <CodingUsLayout
      children={
        <CodingUsRankUI
          rankingInfos={rankingInfos}
          myInfo={myInfo}
          // gubun={gubun}
          // onClickPeriodGubun={onClickPeriodGubun}
          // onLoadMore={onLoadMore}
        />
      }
    ></CodingUsLayout>
  );
}
