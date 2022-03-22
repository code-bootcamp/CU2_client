import { IMyPageMenuUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./MypageMenu.Style";

export default function MypageMenuUI(props: IMyPageMenuUIProps) {
  return (
    <S.Wrapper>
      <S.TopMenu>
        <S.MyPageButton
          isSelect={true}
          onClick={props.moveToPage("/mypage/user")}
        >
          User Mypage
        </S.MyPageButton>
        <Blank width="30px" />
        {props.isCoach ? (
          <S.MyPageButton onClick={props.moveToPage("/mypage/coach")}>
            Coach Mypage
          </S.MyPageButton>
        ) : (
          <S.MyPageButton onClick={props.moveToPage("/mypage/coach/register")}>
            Coach Register
          </S.MyPageButton>
        )}
      </S.TopMenu>
      <Blank height="10px" />

      <S.ProfileBox>
        <S.ProfileHead>
          <S.ProfileImg src="/pofile_img_default.png" />
          <Blank width="10px" />
          <div>유저 닉네임</div>
        </S.ProfileHead>
        <Blank height="20px" />
        <S.ProfileBody>
          <S.ProfileContents>
            <span>주활동</span>
            <S.MainStack>Javascript</S.MainStack>
          </S.ProfileContents>
          <Blank height="20px" />
          <S.ProfileContents>
            <span>팔로우</span>
            <p>112</p>
          </S.ProfileContents>
          <Blank height="20px" />
          <S.ProfileContents>
            <span>팔로워</span>
            <p>20</p>
          </S.ProfileContents>
          <Blank height="20px" />
          <S.ProfileContents>
            <span>포인트</span>
            <p>
              <S.ChargeButton>충전</S.ChargeButton>
              <S.ChargeButton onClick={props.moveToPage("/mypage/user/point")}>
                내역
              </S.ChargeButton>{" "}
              10,000
            </p>
          </S.ProfileContents>
          <Blank height="20px" />
          <S.ProfileContents>
            <span>유저 랭킹</span>
            <p>50등(▲ 2등)</p>
          </S.ProfileContents>
          <Blank height="10px" />
          <S.ProfileContents>
            <span></span>
            <span>
              <button>{`전체 랭킹 보기 > `}</button>
              <button>{`점수 내역 보기 >`}</button>
            </span>
          </S.ProfileContents>
          <Blank height="30px" />
          <S.UserInfoEditBox>
            <button>관심 카테고리 수정</button>
            <Blank height="10px" />
            <button>회원 정보 수정</button>
          </S.UserInfoEditBox>
        </S.ProfileBody>
        <Blank height="80px" />
        <S.MenuBox>
          <p>CodingUs</p>
          <Blank height="40px" />
          <button onClick={props.moveToPage("/mypage/user/blog")}>
            내 블로그 보기
          </button>
          <Blank height="50px" />
          <button onClick={props.moveToPage("/mypage/user/likepost")}>
            좋아요한 포스트 보기
          </button>
          <Blank height="50px" />
          <button onClick={props.moveToPage("/mypage/user/questions")}>
            {"내 Q&A 보기"}
          </button>
        </S.MenuBox>
        <Blank height="75px" />
        <S.MenuBox>
          <p>CoachingUs</p>
          <Blank height="40px" />
          <button onClick={props.moveToPage("/mypage/user/point")}>
            내 코칭 보기
          </button>
          <Blank height="50px" />
          <button onClick={props.moveToPage("/mypage/user/point")}>
            좋아요한 칼럼 보기
          </button>
        </S.MenuBox>
      </S.ProfileBox>
    </S.Wrapper>
  );
}
