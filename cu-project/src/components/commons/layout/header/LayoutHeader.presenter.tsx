import React from "react";
import SearchBar from "./searchBar/SearchBar.Container";
import Blank from "../../Blank";
import * as S from "./LayoutHeader.Style";
import { BsSearch } from "react-icons/bs";

export default function LayoutHeaderPageUI(props) {
  return (
    <S.Wrapper isSearch={props.isSearch}>
      <S.LeftHeader>
        <S.HeaderLogo
          src="/CU2_LOGO.png"
          onClick={props.onClickLogOut}
          // onClick={props.moveToPage("/main")}
          // isCurrent={props.currentPath === "/coachingus"}
        />
      </S.LeftHeader>
      <S.HeaderBody>
        {!props.isSearch ? (
          <SearchBar setIsSearch={props.setIsSearch} />
        ) : (
          <S.SearchBarDetail isSearch={props.isSearch}>
            <S.SearchCategory>
              <S.Category
                onClick={() => props.setSelect("Total")}
                isCurrent={props.select === "Total"}
              >
                Total
                {props.select === "Total" && (
                  <S.CategoryLine isCategory={props.select === "Total"} />
                )}
              </S.Category>
              <Blank width="40px" />
              <S.Category
                onClick={() => props.setSelect("Blog")}
                isCurrent={props.select === "Blog"}
              >
                Blog
                {props.select === "Blog" && (
                  <S.CategoryLine isCategory={props.select === "Blog"} />
                )}
              </S.Category>
              <Blank width="40px" />
              <S.Category
                onClick={() => props.setSelect("Stack Q&A")}
                isCurrent={props.select === "Stack Q&A"}
              >
                Stack Q{"&"}A
                {props.select === "Stack Q&A" && (
                  <S.CategoryLine isCategory={props.select === "Stack Q&A"} />
                )}
              </S.Category>
              <Blank width="40px" />
              <S.Category
                onClick={() => props.setSelect("Columns")}
                isCurrent={props.select === "Columns"}
              >
                Columns
                {props.select === "Columns" && (
                  <S.CategoryLine isCategory={props.select === "Columns"} />
                )}
              </S.Category>
              <Blank width="40px" />
              <S.Category
                onClick={() => props.setSelect("Comments")}
                isCurrent={props.select === "Comments"}
              >
                Comments
                {props.select === "Comments" && (
                  <S.CategoryLine isCategory={props.select === "Comments"} />
                )}
              </S.Category>
              <Blank width="40px" />
              <S.Category
                onClick={() => props.setSelect("Us & Coaches")}
                isCurrent={props.select === "Us & Coaches"}
              >
                Us {"&"} Coaches
                {props.select === "us" && (
                  <S.CategoryLine
                    isCategory={props.select === "Us & Coaches"}
                  />
                )}
              </S.Category>
            </S.SearchCategory>

            <Blank height="25px" />
            <S.SearchBar>
              <S.SearchBarInput
                onChange={props.onChangeSearch}
                onKeyDown={props.onChangeKeyPress}
                placeholder="Search"
              />
              <S.SearchBtn ref={props.SearchRef} onClick={props.onClickSearch}>
                <BsSearch style={{ color: "#BDBDBD", fontSize: "18px" }} />
              </S.SearchBtn>
            </S.SearchBar>
          </S.SearchBarDetail>
        )}
        {props.isSearch && (
          <S.SearchBarCancleBtn onClick={() => props.setIsSearch(false)}>
            cancle
          </S.SearchBarCancleBtn>
        )}
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
        <Blank width="60px" />
        <S.HeaderCoachingUs
          onClick={props.moveToPage("/coachingus")}
          isCurrent={props.currentPath.includes("/coachingus")}
        >
          CoachingUs
          {props.currentPath.includes("/coachingus") && (
            <S.BoldLine isCurrent={props.currentPath.includes("/coachingus")} />
          )}
        </S.HeaderCoachingUs>
        <Blank width="60px" />

        {props.isLogin ? (
          <S.HeaderSign>
            <S.HeaderMypage
              onClick={props.moveToPage("/mypage")}
              isCurrent={props.currentPath.includes("/mypage")}
            >
              Mypage
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
              Sign In
              {props.currentPath === "/login" && (
                <S.BoldLine isCurrent={props.currentPath.includes("/login")} />
              )}
            </S.SingIn>
            <Blank width="25px" />
            <S.SingUp
              onClick={props.moveToPage("/register")}
              isCurrent={props.currentPath.includes("/register")}
            >
              Sign Up
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
