import { ICoachPageMenuUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CoachpageMenu.Style";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { FaCopyright } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import getMoney from "../../../../commons/libraries/getMoney";

export default function CoachpageMenuUI(props: ICoachPageMenuUIProps) {
  return (
    <S.Web>
      <S.Wrapper>
        <S.TopMenu>
          <S.MyPageButton onClick={props.onClickMove("/mypage/user")}>
            User Mypage
          </S.MyPageButton>
          <Blank width="30px" />
          {props.userData?.fetchmyuser.role === "COACH" ? (
            <S.MyPageButton
              isSelect={true}
              onClick={props.onClickMove("/mypage/coach")}
            >
              Coach Mypage
            </S.MyPageButton>
          ) : (
            <S.MyPageButton
              onClick={props.onClickMove("/mypage/coach/register")}
            >
              Coach Register
            </S.MyPageButton>
          )}
        </S.TopMenu>
        <Blank height="20px" />
        <S.ProfileBox>
          <S.ProfileHead>
            <S.ProfileImg src="/pofile_img_default.png" />
            <Blank width="10px" />
            <div>{props.data?.fetchCoachUser?.nickname}</div>
          </S.ProfileHead>
          <Blank height="20px" />
          <S.ProfileBody>
            <Blank height="20px" />
            <Blank height="20px" />
            <S.ProfileContents>
              <span>포인트</span>
              <div>
                <S.ChargeButton
                  onClick={props.onClickMove("/mypage/coach/point")}
                >
                  내역
                </S.ChargeButton>
                {getMoney(props.data?.fetchCoachUser.point)} 원
              </div>
            </S.ProfileContents>
            <Blank height="20px" />
            <S.ProfileContents>
              <span>코치 랭킹</span>
              <p onClick={props.onClickMove("/mypage/coach/ranking")}>
                {props.rankData?.fetchUserOrderbyscore.map((el, idx) => {
                  return el.id === props.data?.fetchCoachUser.id
                    ? `${idx + 1} 등 (${el.score} 점)`
                    : "";
                })}
              </p>
            </S.ProfileContents>
            <Blank height="10px" />
            <S.ProfileContents>
              <span></span>
              <span>
                <S.RankingButton
                  onClick={props.onClickMove("/mypage/coach/ranking")}
                >{`전체 랭킹 보기 > `}</S.RankingButton>
                {/* <S.RankingButton
                  onClick={props.onClickMove("/mypage/coach/ranking/history")}
                >{`점수 내역 보기 >`}</S.RankingButton> */}
              </span>
            </S.ProfileContents>
            <Blank height="30px" />
            <S.UserInfoEditBox>
              <button
                onClick={props.onClickMove("/mypage/coach/register/edit")}
              >
                코치 정보 수정
              </button>
              <Blank height="10px" />
              <button
                onClick={props.onClickMove("/coachingus/coach-register/")}
              >
                포트폴리오 추가/수정
              </button>
            </S.UserInfoEditBox>
          </S.ProfileBody>
          <Blank height="80px" />
          <S.MenuBox>
            <p>CoachingUs</p>
            <Blank height="40px" />
            <S.MenuButton onClick={props.onClickMove("/mypage/coach/comments")}>
              <FaCopyright size={24} />
              <Blank width="10px" />내 코칭 보기
            </S.MenuButton>
            <Blank height="50px" />
            <S.MenuButton onClick={props.onClickMove("/mypage/coach/columns")}>
              <BiNews size={24} />
              <Blank width="10px" /> 내 칼럼 보기
            </S.MenuButton>
          </S.MenuBox>
        </S.ProfileBox>
      </S.Wrapper>
    </S.Web>
  );
}
