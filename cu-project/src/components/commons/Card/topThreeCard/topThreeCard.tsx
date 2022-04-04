import * as S from "./topThreeCard.Style";
import { Avatar } from "antd";
import Label01 from "../../Label/Label01";
import Blank from "../../Blank";
import { IUser } from "../../../../commons/types/generated/types";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RestUserPicture } from "../rankingCard/rankingCard.Style";
interface ICodingUsCardProps {
  width?: number;
  height?: number;
  data: IUser;
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
      <RestUserPicture style={{width: "120px", height: "120px"}}>
      <BsFillPersonFill style={{width: "80px", height: "80px"}}/>
      </RestUserPicture>
        <Blank height="22px" />
        <Label01 value={props.data.nickname} />
        <Blank height="10px" />
        <Label01 value={`${String(props.data.score)} 점`} />
      </S.UserWrapper>
    </S.Wrapper>
  );
}
