import Blank from "../../../../commons/Blank";
import MypageMenu from "../MypageMenu.Container";
import * as S from "./Follower.Style";

export default function UserFollowerUI() {
  return (
    <S.AllWrapper>
      <MypageMenu />

      <S.Wrapper>
        검색창
        <S.Box>{`마이페이지 > 팔로워`}</S.Box>
        <Blank height="30px" />
        <div>
          팔로우 | <b>팔로워</b>
        </div>
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
