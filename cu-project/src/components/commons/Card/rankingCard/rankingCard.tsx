import * as S from "./rankingCard.Style";
import Button02 from "../../Button/Button02";
import Button03 from "../../Button/Button03";
import Label01 from "../../Label/Label01";
import Blank from "../../Blank";
import { AiFillTrophy } from "react-icons/ai";
import Color from "../../../../commons/styles/color";
import { Avatar } from "antd";
import { useRouter } from "next/router";
import { ICogindUsRankingProps } from "../../../../commons/types/types";
import { BsFillPersonFill } from "react-icons/bs";
import React from "react";
import { RestCoachPicture } from "../../../units/coachingus/coaches/CoachingUsCoaches.Style";

export default function RankingCard(props: ICogindUsRankingProps) {
  // 랭킹 비교 기능 미구현... ㅠㅠ.... api가 없어요 ㅠㅠㅠ........
  const getRankingDiff = () => {
    if (
      !props.prevData!.ranking ||
      !props.ranking ||
      props.prevData!.ranking === props.ranking ||
      props.data!.score  < 100
    )
      return <S.RankingDiff> - </S.RankingDiff>;
    const diff = props.prevData!.ranking - props.ranking;
    const isUp =
      props.prevData!.ranking < props.ranking ;

    return (
      <S.RankingDiff style={{ color: isUp ? "red" : "blue" }}>{`${
        isUp ? "▲" : "▼"
      } ${Math.abs(diff)}`}</S.RankingDiff>
    );
  };
  // 얘도 미구현 ..... 서비스 발표 후 api 추가 예정......
  const getPointDiff = () => {
    if (
      !props.prevData!.data!.score! ||
      !props.data?.score ||
      props.prevData!.data!.score! === props.data?.score ||
      props.data!.score  < 100
    )
      return <S.PointDiff> - </S.PointDiff>;
    const diff =  props.data?.score - props.prevData!.data!.score!;
    const isUp = props.prevData!.data!.score! > props.data?.score ;

    return (
      <S.PointDiff style={{ color: isUp ? "red" : "blue" }}>{`${
        isUp ? "+" : "-"
      } ${Math.abs(diff)}`}</S.PointDiff>
    );
  };
  const router = useRouter();
  return (
    <S.Wrapper
      height={props.height ? `${props.height}px` : "100px"}
      isMyRanking={props.isMyRanking}
    >
      <S.RowWrapper>
        <S.RankingWrapper>
          <S.CurrentRanking>{props.ranking}</S.CurrentRanking>
          {getRankingDiff()}
        </S.RankingWrapper>
        <Blank width="40px" />
        <S.MyRanking isMyRanking={props.isMyRanking}>
          <S.RowWrapper style={{ justifyContent: "center" }}>
            <AiFillTrophy style={{ width: "30px", height: "30px" }} />
            <Blank width="12px" />
            <Label01
              value="내 순위"
              color={Color.main}
              size="24px"
              weight="700"
            />
          </S.RowWrapper>
        </S.MyRanking>
        <Blank width="40px" />
        <S.UserInfo>
        <S.RestUserPicture>
          <BsFillPersonFill style={{width: "40px", height: "40px"}}/>
        </S.RestUserPicture>
          <Blank width="50px" />
          <S.UserDetail>
            <Label01
              value={String(props.data?.nickname)}
              size="24px"
              weight="700"
            />
            <Label01
              value={`Lv.${String(Math.floor((props.data?.score ?? 0) / 100))}`}
              weight="400"
              size="24px"
              color=" #C4C4C4"
            />
          </S.UserDetail>
        </S.UserInfo>
      </S.RowWrapper>
      <S.RowWrapper>
        <S.PointWrapper>
          <Label01
            value={`${props.data!.score  > 100 ? String(props.data?.score) : "0"}점`}
            weight="700"
            size="24px"
          />
          <Blank width="10px" />
          {getPointDiff()}
        </S.PointWrapper>
        <Blank width="80px" />
        {props.isMyRanking ? (
          <Button02
            value="마이페이지"
            onClick={() => {
              router.push(`/mypage/${props.data?.id}`);
            }}
          />
        ) : (
          <Button03
            value="마이페이지"
            onClick={() => {
              router.push(`/mypage/${props.data?.id}`);
            }}
          />
        )}
      </S.RowWrapper>
    </S.Wrapper>
  );
}
