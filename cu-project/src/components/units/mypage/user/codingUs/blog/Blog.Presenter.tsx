import InfiniteScroll from "react-infinite-scroller";
import BlogCard from "../../../../codingus/card/blogCard/BlogCard02/BlogCard02";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./Blog.Style";
import { v4 as uuidV4 } from "uuid";
import { ICodingUsBlogCardProps } from "../../../../../../commons/types/types";
import MyPageNav from "../../../../../commons/Mypage/MypageNav";
import MyPageSearchBar from "../../../../../commons/Mypage/MypageSearchBar";

export default function UserBlogUI(props) {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <MyPageNav menu={"내 블로그"} />
        <S.BlogHeader>
          <h2>블로그 전체글 53</h2>
          <MyPageSearchBar />
        </S.BlogHeader>
        <div style={{ width: "90%" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={() => {}}
            hasMore={true || false}
            useWindow={false}
          >
            <S.CardWrapper>
              {props.sortedBlogList?.map((el: ICodingUsBlogCardProps) => (
                <BlogCard key={uuidV4()} blogData={el} />
              ))}
            </S.CardWrapper>
          </InfiniteScroll>
        </div>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
