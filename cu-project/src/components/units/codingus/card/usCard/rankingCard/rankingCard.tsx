import * as S from "./rankingCard.Style";
import { IRankingInfo } from "../../../../../../commons/types/types";
import Button02 from "../../../../../commons/Button/Button02";
import Button03 from "../../../../../commons/Button/Button03";
import Label01 from "../../../../../commons/Label/Label01";
import Blank from "../../../../../commons/Blank";
import { AiFillTrophy } from "react-icons/ai";
import Color from "../../../../../../commons/styles/color";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
interface ICodingUsCardProps {
  height?: number;
  data: IRankingInfo;
  isMyRanking: boolean;
  onClickMyPage: (userId: string) => () => void;
}

export default function RankingCard(props: ICodingUsCardProps) {
  const getRankingDiff = () => {
    if (
      !props.data.prevInfo?.ranking ||
      !props.data.currInfo?.ranking ||
      props.data.prevInfo?.ranking === props.data.currInfo?.ranking
    )
      return <S.RankingDiff> - </S.RankingDiff>;
    const diff = props.data.prevInfo?.ranking - props.data.currInfo?.ranking;
    const isUp =
      props.data.prevInfo?.ranking - props.data.currInfo?.ranking > 0;

    return (
      <S.RankingDiff style={{ color: isUp ? "red" : "blue" }}>{`${
        isUp ? "▲" : "▼"
      } ${Math.abs(diff)}`}</S.RankingDiff>
    );
  };

  const getPointDiff = () => {
    if (
      !props.data.prevInfo?.point ||
      !props.data.currInfo?.point ||
      props.data.prevInfo?.point === props.data.currInfo?.point
    )
      return <S.PointDiff> - </S.PointDiff>;
    const diff = props.data.prevInfo?.point - props.data.currInfo?.point;
    const isUp = props.data.prevInfo?.point - props.data.currInfo?.point > 0;

    return (
      <S.PointDiff style={{ color: isUp ? "red" : "blue" }}>{`${
        isUp ? "+" : "-"
      } ${Math.abs(diff)}`}</S.PointDiff>
    );
  };

  return (
    <S.Wrapper
      height={props.height ? `${props.height}px` : "100px"}
      isMyRanking={props.isMyRanking}
    >
      <S.RowWrapper>
        <S.RankingWrapper>
          <S.CurrentRanking>{props.data.currInfo?.ranking}</S.CurrentRanking>
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
          <Avatar style={{backgroundColor: "#C4C4C4", borderRadius: "50%", padding: "5px", width:"50px", height:"50px", objectFit: "cover", backgroundSize: "cover"} }  />
        <Blank width="50px" />
          <S.UserDetail>
            <Label01 value={props.data.user.name} size="24px" weight="700" />
            <Label01
              value={`Lv.${String(
                Math.floor((props.data.currInfo?.point ?? 0) / 200)
              )}`}
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
            value={`${String(props.data.currInfo?.point)}점`}
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
            onClick={props.onClickMyPage(props.data.user.name)}
          />
        ) : (
          <Button03
            value="마이페이지"
            onClick={props.onClickMyPage(props.data.user.name)}
          />
        )}
      </S.RowWrapper>
    </S.Wrapper>
  );
}
