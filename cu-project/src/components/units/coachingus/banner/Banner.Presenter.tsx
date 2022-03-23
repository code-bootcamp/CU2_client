import React from "react";
import Blank from "../../../commons/Blank";
import RecCoachCardPage from "../main/reccoachcard/RecCoachCard.Container";
import * as S from "./Banner.Style";

export default function BannerUI() {
  return (
    <S.Wrapper>
      <RecCoachCardPage />
    </S.Wrapper>
  );
}
