import { ICodingUsRankUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import Label01 from "../../../commons/Label/Label01";
import VerticalLine from "../../../commons/Line/VerticalLine";
import CodingUsHistory from "../history/History.Container";
import * as S from "./CodingUsUs.Style";
import { v4 as uuidv4 } from "uuid";
import RankingCard from "../card/usCard/rankingCard/rankingCard";
import TopThreeCard from "../card/usCard/topThreeCard/topThreeCard";
import {MdExpandMore} from "react-icons/md"
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
        <S.RankingWrapper>
          <Label01 value="User Ranking" size="36px" weight="700" />
          <Blank height="20px" />
          <S.SortGubun>
            {["일간", "주간", "월간", "전체"].map((el) => (
              <div style={{ display: "flex" }} key={uuidv4()}>
                <S.GubunLabel
                  isSelected={el === props.gubun}
                  onClick={props.onClickPeriodGubun(el)}
                >
                  {`${el} 랭킹`}
                </S.GubunLabel>
                <VerticalLine thickness={2} margin={16} />
              </div>
            ))}
          </S.SortGubun>
          <Blank height="31px" />
          <RankingCard
            data={props.myRankingInfo}
            isMyRanking={true}
            onClickMyPage={props.onClickMyPage}
          />
          <Blank height="31px" />
          <S.TopWrapper>
            {props.rankingInfos
              .filter((_, idx) => idx < 3)
              .map((el, idx) => (
                <TopThreeCard data={el} ranking={idx + 1} key={uuidv4()} />
              ))}
          </S.TopWrapper>
          <Blank height="24px" />
          <S.CardWrapper>
            {props.rankingInfos
              .filter((_, idx) => idx > 2)
              .map((el) => (
                <RankingCard
                  key={uuidv4()}
                  data={el}
                  isMyRanking={false}
                  onClickMyPage={props.onClickMyPage}
                />
              ))}
          </S.CardWrapper>
          <S.LoadMoreBtn onClick={props.onLoadMore} ><MdExpandMore size="50px"/></S.LoadMoreBtn>
        </S.RankingWrapper>
      </S.CodingUsUsBody>
    </S.CodingUsUs>
  );
}
