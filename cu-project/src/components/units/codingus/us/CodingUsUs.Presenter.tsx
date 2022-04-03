import { ICodingUsRankUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import CodingUsRanking from "../../../commons/Ranking/CodingUsRanking";
import CodingUsHistory from "../history/History.Container";
import * as S from "./CodingUsUs.Style";

export default function CodingUsRankUI(props: ICodingUsRankUIProps) {
  return (
    <S.CodingUsUs>
      <S.CodingUsUsBody>
        <CodingUsHistory
          historyData={{
            작성글: 10,
            GOOD: 24,
            BAD: 2,
            채택: 0,
            댓글: 13,
          }}
          title={`${"userName"} 님의 최근 7일 간 활동`}
        />
        <Blank height="69px" />
        <S.Banner />
        <Blank height="69px" />
        <CodingUsRanking
          rankingInfos={props.rankingInfos}
          myInfo={props.myInfo}
        />
      </S.CodingUsUsBody>
    </S.CodingUsUs>
  );
}
