import MypageMenu from "../../MypageMenu.Container";
import * as S from "./Blog.Style";
import { v4 as uuidV4 } from "uuid";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";
// import { MyPageSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";
import { IUserBlogUIProps } from "../../../../../../commons/types/types";
import BlogCard01 from "../../../../../commons/Card/BlogCard01/BlogCard01";
import Blank from "../../../../../commons/Blank";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserBlogUI(props: IUserBlogUIProps) {
  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        <UserPageNav menu={"내 블로그"} />
        <S.BlogHeader>
          <h2>전체글 {props.data?.fetchmyBlog.length}개</h2>
          {/* <MyPageSearchBar /> */}
        </S.BlogHeader>
        <div style={{ width: "90%" }}>
          <Blank height="30px" />
          <S.BlogRow xs={1} md={3} className="g-4">
            {props.data?.fetchmyBlog
              .filter((el) => {
                return el;
              })
              .sort((a, b) => {
                return (
                  new Date(b.createAt).getTime() -
                  new Date(a.createAt).getTime()
                );
              })
              .map((el) => (
                <S.CardWrapper key={el.id}>
                  <BlogCard01 key={uuidV4()} data={el} />
                </S.CardWrapper>
              ))}
          </S.BlogRow>
        </div>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
