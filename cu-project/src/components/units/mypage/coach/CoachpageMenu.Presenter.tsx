import { IMyPageMenuUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CoachpageMenu.Style";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { FaCopyright } from "react-icons/fa";
import { BiNews } from "react-icons/bi";

export default function CoachpageMenuUI(props: IMyPageMenuUIProps) {
  return (
    <S.Web>
      <S.Wrapper>
        {props.isModal && (
          <Modal
            visible={true}
            onOk={props.onClickModal}
            onCancel={props.onClickModal}
            okText="출금하기"
            cancelText="취소하기"
            style={{ textAlign: "center", width: "100%" }}
          >
            <h1>CU2 포인트 출금</h1>
            <select
              // onChange={}
              style={{ width: "80%", textAlign: "center", fontSize: "18px" }}
            >
              <option selected disabled>
                CU Point 출금 금액을 선택해주세요.
              </option>
              <option value="5000">5,000 포인트</option>
              <option value="10000">10,000 포인트</option>
              <option value="20000">20,000 포인트</option>
              <option value="30000">30,000 포인트</option>
            </select>
            <div>
              <select>
                <option>국민은행</option>
                <option>카카오페이</option>
              </select>
              <input placeholder="계좌번호" />
            </div>
          </Modal>
        )}
        <S.TopMenu>
          <S.MyPageButton onClick={props.moveToPage("/mypage/user")}>
            User Mypage
          </S.MyPageButton>
          <Blank width="30px" />
          {props.userInfo?.role === "COACH" ? (
            <S.MyPageButton
              isSelect={true}
              onClick={props.moveToPage("/mypage/coach")}
            >
              Coach Mypage
            </S.MyPageButton>
          ) : (
            <S.MyPageButton
              onClick={props.moveToPage("/mypage/coach/register")}
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
            <S.ProfileContents>
              <span>팔로우</span>
              <p onClick={props.moveToPage("/mypage/coach/follow")}>112</p>
            </S.ProfileContents>
            <Blank height="20px" />
            <S.ProfileContents>
              <span>팔로워</span>
              <p onClick={props.moveToPage("/mypage/coach/follower")}>20</p>
            </S.ProfileContents>
            <Blank height="20px" />
            <S.ProfileContents>
              <span>포인트</span>
              <div>
                <S.ChargeButton onClick={props.onClickModal}>
                  출금
                </S.ChargeButton>
                <S.ChargeButton
                  onClick={props.moveToPage("/mypage/coach/point")}
                >
                  내역
                </S.ChargeButton>
                {props.data?.fetchCoachUser.point}
              </div>
            </S.ProfileContents>
            <Blank height="20px" />
            <S.ProfileContents>
              <span>코치 랭킹</span>
              <p onClick={props.moveToPage("/mypage/coach/ranking")}>
                {props.data?.fetchCoachUser.score}
              </p>
            </S.ProfileContents>
            <Blank height="10px" />
            <S.ProfileContents>
              <span></span>
              <span>
                <S.RankingButton
                  onClick={props.moveToPage("/mypage/coach/ranking")}
                >{`전체 랭킹 보기 > `}</S.RankingButton>
                <S.RankingButton
                  onClick={props.moveToPage("/mypage/coach/ranking/history")}
                >{`점수 내역 보기 >`}</S.RankingButton>
              </span>
            </S.ProfileContents>
            <Blank height="30px" />
            <S.UserInfoEditBox>
              <button onClick={props.moveToPage("/mypage/coach/register/edit")}>
                코치 정보 수정
              </button>
              <Blank height="10px" />
              <button
                onClick={props.moveToPage("/mypage/coach/portfolio/edit")}
              >
                포트폴리오 추가/수정
              </button>
            </S.UserInfoEditBox>
          </S.ProfileBody>
          <Blank height="80px" />
          <S.MenuBox>
            <p>CoachingUs</p>
            <Blank height="40px" />
            <S.MenuButton
              isCurrent={props.getIsCurrentPage("/coach/comments")}
              onClick={props.moveToPage("/mypage/coach/comments")}
            >
              <FaCopyright size={24} />
              <Blank width="10px" />내 코칭 보기
            </S.MenuButton>
            <Blank height="50px" />
            <S.MenuButton
              isCurrent={props.getIsCurrentPage("/coach/columns")}
              onClick={props.moveToPage("/mypage/coach/columns")}
            >
              <BiNews size={24} />
              <Blank width="10px" /> 내 칼럼 보기
            </S.MenuButton>
          </S.MenuBox>
        </S.ProfileBox>
      </S.Wrapper>
    </S.Web>
  );
}
