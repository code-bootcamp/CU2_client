import { IMyPageMenuUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./MypageMenu.Style";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillLike, AiFillQuestionCircle } from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";

export default function MypageMenuUI(props: IMyPageMenuUIProps) {
  console.log(props.data);
  return (
    <S.Web>
      <S.Wrapper>
        {props.isModal && (
          <Modal
            visible={true}
            // onOk={}
            onCancel={props.onClickModal}
            okText="충전하기"
            cancelText="취소하기"
            style={{ textAlign: "center", width: "100%" }}
          >
            <h1>CU2 포인트 충전</h1>
            <select
              // onChange={}
              style={{ width: "80%", textAlign: "center", fontSize: "18px" }}
            >
              <option selected disabled>
                CU Point 충전 금액을 선택해주세요.
              </option>
              <option value="5000">5,000 포인트</option>
              <option value="10000">10,000 포인트</option>
              <option value="20000">20,000 포인트</option>
              <option value="30000">30,000 포인트</option>
            </select>
          </Modal>
        )}
        <S.TopMenu>
          <S.MyPageButton
            isSelect={true}
            onClick={props.onClickMove("/mypage/user")}
          >
            User Mypage
          </S.MyPageButton>
          <Blank width="30px" />
          {props.data?.fetchmyuser.role === "COACH" ? (
            <S.MyPageButton onClick={props.onClickMove("/mypage/coach")}>
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

            <div>{props.data?.fetchmyuser.nickname}</div>
          </S.ProfileHead>
          <Blank height="20px" />
          <S.ProfileBody>
            <S.ProfileContents>
              <span>주스택</span>
              <S.MainStack>{props.mainstack?.fetchmainstack}</S.MainStack>
            </S.ProfileContents>
            <Blank height="20px" />
            <S.ProfileContents>
              <span>팔로우</span>
              <p onClick={props.onClickMove("/mypage/user/follow")}>112</p>
            </S.ProfileContents>
            <Blank height="20px" />
            <S.ProfileContents>
              <span>팔로워</span>
              <p onClick={props.onClickMove("/mypage/user/follower")}>20</p>
            </S.ProfileContents>
            <Blank height="20px" />
            <S.ProfileContents>
              <span>포인트</span>
              <div>
                <S.ChargeButton onClick={props.onClickModal}>
                  충전
                </S.ChargeButton>
                <S.ChargeButton
                  onClick={props.onClickMove("/mypage/user/point")}
                >
                  내역
                </S.ChargeButton>
                {props.data?.fetchmyuser.point}
              </div>
            </S.ProfileContents>
            <Blank height="20px" />
            <S.ProfileContents>
              <span>유저 랭킹</span>
              <p onClick={props.onClickMove("/mypage/user/ranking")}>
                {props.data?.fetchmyuser.score} 점
              </p>
            </S.ProfileContents>
            <Blank height="10px" />
            <S.ProfileContents>
              <span></span>
              <span>
                <S.RankingButton
                  onClick={props.onClickMove("/mypage/user/ranking")}
                >
                  {`전체 랭킹 보기 > `}
                </S.RankingButton>
                <S.RankingButton
                  onClick={props.onClickMove("/mypage/user/ranking/history")}
                >{`점수 내역 보기 >`}</S.RankingButton>
              </span>
            </S.ProfileContents>
            <Blank height="30px" />
            <S.UserInfoEditBox>
              <button onClick={props.onClickMove("/mypage/user/follower")}>
                관심 카테고리 수정
              </button>
              <Blank height="10px" />
              <button onClick={props.onClickMove("/mypage/user/update")}>
                회원 정보 수정
              </button>
            </S.UserInfoEditBox>
          </S.ProfileBody>
          <Blank height="80px" />
          <S.MenuBox>
            <p>CodingUs</p>
            <Blank height="40px" />
            <S.MenuButton onClick={props.onClickMove("/mypage/user/blog")}>
              <BsFillPencilFill size={24} /> <Blank width="10px" />내 블로그
              보기
            </S.MenuButton>
            <Blank height="50px" />
            <S.MenuButton onClick={props.onClickMove("/mypage/user/likeposts")}>
              <AiFillLike size={24} /> <Blank width="10px" />
              Good한 포스트 보기
            </S.MenuButton>
            <Blank height="50px" />
            <S.MenuButton onClick={props.onClickMove("/mypage/user/questions")}>
              <AiFillQuestionCircle size={24} />
              <Blank width="10px" />
              {" 내 Q&A 보기"}
            </S.MenuButton>
            <Blank height="50px" />
            <S.MenuButton
              onClick={props.onClickMove("/mypage/user/likequestions")}
            >
              <AiFillLike size={24} /> <Blank width="10px" />
              {`Good한 Q&A 보기`}
            </S.MenuButton>
          </S.MenuBox>
          <Blank height="75px" />
          <S.MenuBox>
            <p>CoachingUs</p>
            <Blank height="40px" />
            <S.MenuButton onClick={props.onClickMove("/mypage/user/coached")}>
              <FaCopyright size={24} />
              <Blank width="10px" />내 코칭 보기
            </S.MenuButton>
            <Blank height="50px" />
            <S.MenuButton
              onClick={props.onClickMove("/mypage/user/likecolumns")}
            >
              <AiFillLike size={24} /> <Blank width="10px" />
              Good한 칼럼 보기
            </S.MenuButton>
          </S.MenuBox>
        </S.ProfileBox>
      </S.Wrapper>
    </S.Web>
  );
}
