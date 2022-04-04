import { useEffect, useState } from "react";
import Blank from "../Blank";
import Label01 from "../Label/Label01";
import { v4 as uuidv4 } from "uuid";
import { MdExpandMore } from "react-icons/md";
import RankingCard from "../Card/rankingCard/rankingCard";
import TopThreeCard from "../Card/topThreeCard/topThreeCard";
import * as S from "./style";
import { ICodingUsRankingProps } from "../../../commons/types/types";
import { IUser } from "../../../commons/types/generated/types";

export default function CodingUsRanking(props: ICodingUsRankingProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayRankings, setDisplayRankgings] = useState<IUser[]>([]);

  useEffect(() => {
    if (props.rankingInfos) {
      setDisplayRankgings(
        props.rankingInfos.filter((_, idx) => idx < (currentPage + 1) * 10)
      );
      setCurrentPage((prev) => prev + 1);
    }
  }, [props.rankingInfos]);

  const calcMyRanking = () => {
    if(!props.rankingInfos) return;
    for (let i = 0; i < props.rankingInfos.length; i++) {
      if (props.rankingInfos[i].id === props.myInfo?.id) return i + 1;
    }
    return -1;
  };

  const onLoadMore = () => {
    console.log("a",props.rankingInfos);
    if (props.rankingInfos) {
        setDisplayRankgings(
          [...props.rankingInfos.filter((_, idx) => idx < (currentPage + 1) * 10)]
        );
        console.log(currentPage);
        console.log(props.rankingInfos.filter((_, idx) => idx < (currentPage + 1) * 10));
        setCurrentPage((prev) => prev + 1);
      }
  };

  return (
    <S.RankingWrapper>
      <Label01 value="User Ranking" size="36px" weight="700" />
      <Blank height="20px" />
      <S.SortGubun>
        {/* {["일간", "주간", "월간", "전체"].map((el) => (
            <div style={{ display: "flex" }} key={uuidv4()}>
              <S.GubunLabel
                isSelected={el === props.gubun}
                onClick={props.onClickPeriodGubun(el)}
              >
                {`${el} 랭킹`}  
              </S.GubunLabel>
              <VerticalLine thickness={2} margin={16} />
            </div>
          ))} */}
      </S.SortGubun>
      <Blank height="31px" />
      {props.myInfo && (
        <RankingCard
          data={props.myInfo}
          isMyRanking={true}
          ranking={calcMyRanking()}
        />
      )}
      <Blank height="31px" />
      <S.TopWrapper>
        {displayRankings
          .filter((_, idx) => idx < 3)
          .map((el, idx) => (
            <TopThreeCard data={el} ranking={idx + 1} key={uuidv4()} />
          ))}
      </S.TopWrapper>
      <Blank height="24px" />
      <S.CardWrapper>
        {displayRankings
          .filter((_, idx) => idx > 2)
          .map((el, idx) => (
            <RankingCard
              key={uuidv4()}
              data={el}
              isMyRanking={false}
              ranking={idx + 4}
            />
          ))}
      </S.CardWrapper>
      <S.LoadMoreBtn onClick={onLoadMore}>
        <MdExpandMore size="50px" />
      </S.LoadMoreBtn>
    </S.RankingWrapper>
  );
}
