import React from "react";
import SearchBar from "../../../units/commons/search/searchBar/SearchBar.Container";
import Blank from "../../Blank";
import * as S from "./LayoutHeader.Style";

export default function LayoutHeaderPageUI(props) {
  return (
    <S.Wrapper>
      <S.LeftHeader>
        <S.HeaderLogo
          onClick={props.onClickLogOut}
          // onClick={props.moveToPage("/main")}
          isCurrent={props.currentPath === "/coachingus"}
        >
          CU2
        </S.HeaderLogo>
      </S.LeftHeader>
      <S.HeaderBody>
        <SearchBar />
      </S.HeaderBody>
      <S.RightHeader>
        <S.HeaderCodingUs
          onClick={props.moveToPage("/codingus")}
          isCurrent={props.currentPath.includes("/codingus")}
        >
          CodingUs
          {props.currentPath.includes("/codingus") && (
            <S.BoldLine isCurrent={props.currentPath.includes("/codingus")} />
          )}
        </S.HeaderCodingUs>
        <Blank width="100px" />
        <S.HeaderCoachingUs
          onClick={props.moveToPage("/coachingus")}
          isCurrent={props.currentPath.includes("/coachingus")}
        >
          CoachingUs
          {props.currentPath.includes("/coachingus") && (
            <S.BoldLine isCurrent={props.currentPath.includes("/coachingus")} />
          )}
        </S.HeaderCoachingUs>
        <Blank width="100px" />

        {props.isLogin ? (
          <S.HeaderSign>
            <S.HeaderMypage
              onClick={props.moveToPage("/mypage")}
              isCurrent={props.currentPath.includes("/mypage")}
            >
              마이페이지
              {props.currentPath.includes("/mypage") && (
                <S.BoldLine isCurrent={props.currentPath.includes("/mypage")} />
              )}
            </S.HeaderMypage>
          </S.HeaderSign>
        ) : (
          <S.HeaderSign>
            <S.SingIn
              onClick={props.moveToPage("/login")}
              isCurrent={props.currentPath.includes("/login")}
            >
              로그인
              {props.currentPath === "/login" && (
                <S.BoldLine isCurrent={props.currentPath.includes("/login")} />
              )}
            </S.SingIn>
            <Blank width="25px" />
            <S.SingUp
              onClick={props.moveToPage("/register")}
              isCurrent={props.currentPath.includes("/register")}
            >
              회원가입
              {props.currentPath.includes("/register") && (
                <S.BoldLine
                  isCurrent={props.currentPath.includes("/register")}
                />
              )}
            </S.SingUp>
          </S.HeaderSign>
        )}
      </S.RightHeader>
    </S.Wrapper>
  );
}
