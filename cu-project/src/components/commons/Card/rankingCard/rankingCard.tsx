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


export default function RankingCard(props: ICogindUsRankingProps) {
  // 랭킹 비교 기능 미구현... ㅠㅠ.... api가 없어요 ㅠㅠㅠ........
  // const getRankingDiff = () => {
  //   if (
  //     !props.data?.prevInfo?.ranking ||
  //     !props.data?.currInfo?.ranking ||
  //     props.data?.prevInfo?.ranking === props.data?.currInfo?.ranking
  //   )
  //     return <S.RankingDiff> - </S.RankingDiff>;
  //   const diff = props.data?.prevInfo?.ranking - props.data?.currInfo?.ranking;
  //   const isUp =
  //     props.data?.prevInfo?.ranking - props.data?.currInfo?.ranking > 0;

  //   return (
  //     <S.RankingDiff style={{ color: isUp ? "red" : "blue" }}>{`${
  //       isUp ? "▲" : "▼"
  //     } ${Math.abs(diff)}`}</S.RankingDiff>
  //   );
  // };
  // 얘도 미구현 ..... 서비스 발표 후 api 추가 예정......
  // const getPointDiff = () => {
  //   if (
  //     !props.data?.prevInfo?.point ||
  //     !props.data?.currInfo?.point ||
  //     props.data?.prevInfo?.point === props.data?.currInfo?.point
  //   )
  //     return <S.PointDiff> - </S.PointDiff>;
  //   const diff = props.data?.prevInfo?.point - props.data?.currInfo?.point;
  //   const isUp = props.data?.prevInfo?.point - props.data?.currInfo?.point > 0;

  //   return (
  //     <S.PointDiff style={{ color: isUp ? "red" : "blue" }}>{`${
  //       isUp ? "+" : "-"
  //     } ${Math.abs(diff)}`}</S.PointDiff>
  //   );
  // };
  const router = useRouter();
  return (
    <S.Wrapper
      height={props.height ? `${props.height}px` : "100px"}
      isMyRanking={props.isMyRanking}
    >
      <S.RowWrapper>
        <S.RankingWrapper>
          <S.CurrentRanking>{props.ranking}</S.CurrentRanking>
          {/* {getRankingDiff()} */}
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
          <Avatar
            style={{
              backgroundColor: "#C4C4C4",
              borderRadius: "50%",
              padding: "5px",
              width: "50px",
              height: "50px",
              objectFit: "cover",
              backgroundSize: "cover",
            }}
          />
          <Blank width="50px" />
          <S.UserDetail>
            <Label01
              value={String(props.data?.nickname)}
              size="24px"
              weight="700"
            />
            <Label01
              value={`Lv.${String(Math.floor((props.data?.score ?? 0) / 10))}`}
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
            value={`${String(props.data?.score)}점`}
            weight="700"
            size="24px"
          />
          <Blank width="10px" />
          {/* {getPointDiff()} */}
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
