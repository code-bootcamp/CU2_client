import CodingUsLayout from "../layout/CodingUsLayout";
import { ICodingUsRankProps } from "../../../../commons/types/types";
import CodingUsRankUI from "./CodingUsUs.Presenter";
import {} from "./CodingUsUs.Queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useEffect, useState } from "react";

const myRankingInfo = {
  user: {
    name: "userName",
    image: "https://source.unsplash.com/random",
  },
  currInfo: {
    ranking: 20,
    point: 1050,
  },
  prevInfo: {
    ranking: 22,
    point: 1020,
  },
};

export default function CodingUsRank(props: ICodingUsRankProps) {
  const { moveToPage } = useMoveToPage();
  const [gubun, setGubun] = useState("일간");
  const [rankingInfos, setRankingInfos] = useState(
    new Array(10).fill(0).map((_, idx) => {
      return {
        user: {
          name: `userName${idx + 1}`,
          image: "https://source.unsplash.com/random",
        },
        currInfo: {
          ranking: idx + 1,
          point: 1050,
        },
        prevInfo: {
          ranking: idx + 3,
          point: 1020,
        },
      };
    })
  );

  const onLoadMore = () => {
    setRankingInfos([
      ...rankingInfos,
      ...new Array(10).fill(0).map((el, idx) => {
        return {
          user: {
            name: `userName${idx + 1}`,
            image: "https://source.unsplash.com/random",
          },
          currInfo: {
            ranking: 10 * Math.floor(rankingInfos.length / 10) + idx + 1,
            point: 1050,
          },
          prevInfo: {
            ranking: idx + 3,
            point: 1020,
          },
        };
      }),
    ]);
  };
  const onClickPeriodGubun = (gubun: string) => () => {
    setGubun(gubun);
  };

  const onClickMyPage = (userId: string) => () => {
    moveToPage(`/mypage/${userId}`);
  };

  useEffect(() => {
    // 바뀐 정렬 기준으로 재 요청
  }, [gubun]);

  return (
    <CodingUsLayout
      children={
        <CodingUsRankUI
          moveToPage={moveToPage}
          rankingInfos={rankingInfos}
          myRankingInfo={myRankingInfo}
          gubun={gubun}
          onClickPeriodGubun={onClickPeriodGubun}
          onLoadMore={onLoadMore}
          onClickMyPage={onClickMyPage}
        />
      }
    ></CodingUsLayout>
  );
}
