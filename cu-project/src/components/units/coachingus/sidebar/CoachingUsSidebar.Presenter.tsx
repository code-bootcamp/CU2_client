import * as S from "./CoachingUsSidebar.Style";
import CoachingUsSidebarPage from "./navbar/CoachingUsNavbar.Container";
import CoachingUsSidebarMyActivity from "./right/CoachingUsSidebar.Container";
import CoachingUsSidebarMyFavorite from "./left/CoachingUsSidebar.Container";
import React from "react";
import Blank from "../../../commons/Blank";

export default function CoachingUsSidebarUI() {
  return (
    <S.Wrapper>
      <CoachingUsSidebarPage />
      <Blank height="50px" />
      <CoachingUsSidebarMyFavorite />
    </S.Wrapper>
  );
}
