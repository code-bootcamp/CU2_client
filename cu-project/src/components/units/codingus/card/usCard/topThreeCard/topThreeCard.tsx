import Label01 from "../../../../../commons/Label/Label01";
import * as S from "./topThreeCard.Style";
import { IRankingInfo } from "../../../../../../commons/types/types";
import { Avatar } from "antd";
import React from "react";
import Blank from "../../../../../commons/Blank";
interface ICodingUsCardProps {
  width?: number;
  height?: number;
  data: IRankingInfo;
  ranking: number;
}

export default function TopThreeCard(props: ICodingUsCardProps) {
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "387px"}
      height={props.height ? `${props.height}px` : "300px"}
    >
      <S.Image src={`/${props.ranking}-place-medal.png`}></S.Image>
      <S.UserWrapper>
        <Avatar
          style={{
            backgroundColor: "#C4C4C4",
            borderRadius: "50%",
            padding: "5px",
            width: "120px",
            height: "120px",
            objectFit: "cover",
            backgroundSize: "cover",
          }}
        />
          <Blank height="22px"/>
        <Label01 value={props.data.user.name} />
        <Blank height="10px"/>
        <Label01 value={`${String(props.data.currInfo?.point)} 점`} />
      </S.UserWrapper>
    </S.Wrapper>
  );
}
