import InfiniteScroll from "react-infinite-scroller";
import BlogCard from "../../../../codingus/card/blogCard/BlogCard02/BlogCard02";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./Likeposts.Style";
import { v4 as uuidV4 } from "uuid";
import { ICodingUsBlogCardProps } from "../../../../../../commons/types/types";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";
import MyPageSearchBar from "../../../../../commons/Mypage/MypageSearchBar";

export default function UserLikePostsUI(props) {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <UserPageNav menu={"Good한 포스트"} />
        <S.BlogHeader>
          <h2>전체글 53</h2>
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
