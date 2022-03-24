import { BsSearch } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroller";
import Blank from "../../../../../commons/Blank";
import HorizontalLine from "../../../../../commons/Line/HorizontalLine";
import BlogCard from "../../../../codingus/card/blogCard/BlogCard02/BlogCard02";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./Likeposts.Style";
import { v4 as uuidV4 } from "uuid";
import { ICodingUsBlogCardProps } from "../../../../../../commons/types/types";

export default function UserLikePostsUI(props) {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <S.Box>{`마이페이지 > Good한 포스트`}</S.Box>
        <Blank height="30px" />
        <S.BlogHeader>
          전체글 53
          <S.BlogHeaderRight>
            <S.SearchBar>
              <input type="text" placeholder="검색어를 입력해주세요" />
              <BsSearch />
            </S.SearchBar>
            <Blank width="20px"></Blank>
            <div>인기순 | 최신순</div>
          </S.BlogHeaderRight>
        </S.BlogHeader>
        <div style={{ width: "90%" }}>
          <HorizontalLine margin={20} />
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
