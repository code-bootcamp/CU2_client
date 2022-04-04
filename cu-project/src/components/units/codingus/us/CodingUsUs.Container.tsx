import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsRankUI from "./CodingUsUs.Presenter";
import { FETCH_USER_ORDER_BY_SCORE } from "./CodingUsUs.Queries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import useStore from "../../../../commons/store/store";

export default function CodingUsRank() {
  const { data: userListOrderByScore } = useQuery<
    Pick<IQuery, "fetchUserOrderbyscore">
  >(FETCH_USER_ORDER_BY_SCORE);

  const myInfo = useStore((state) => state.userInfo);

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
          rankingInfos={userListOrderByScore?.fetchUserOrderbyscore}
          myInfo={myInfo}
          // gubun={gubun}
          // onClickPeriodGubun={onClickPeriodGubun}
          // onLoadMore={onLoadMore}
        />
      }
    ></CodingUsLayout>
  );
}
