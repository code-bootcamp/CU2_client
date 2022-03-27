import Blank from "../../../../commons/Blank";
import MyPageNav from "../../../../commons/Mypage/MypageNav";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./Follower.Style";

export default function UserFollowerUI() {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <MyPageNav menu={"팔로워"} />
        <Blank height="30px" />
        <S.FollowerBox>
          <img src="/pofile_img_default.png" />
          <p>닉네임</p>
          <p>랭킹</p>
          <p>점수</p>
          <button>유저 페이지</button>
          <button>팔로우|팔로우 취소</button>
        </S.FollowerBox>
        <S.FollowerBox>
          <img src="/pofile_img_default.png" />
          <p>닉네임</p>
          <p>랭킹</p>
          <p>점수</p>
          <button>유저 페이지</button>
          <button>팔로우|팔로우 취소</button>
        </S.FollowerBox>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
