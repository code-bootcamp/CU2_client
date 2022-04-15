import Blank from "../../../commons/Blank";
import { ICodingUsBlogUIProps } from "../../../../commons/types/types";
import BlogShortCard from "../card/blogShortCard/BlogShortCard";
import * as S from "./CodingUsBlog.Style";
import Label01 from "../../../commons/Label/Label01";
import { v4 as uuidV4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import CodingUsHistory from "../history/History.Container";
import WriteBtn from "../writeBtn/WriteBtn";
import BlogCard01 from "../../../commons/Card/BlogCard01/BlogCard01";
export default function CodingUsBlogUI(props: ICodingUsBlogUIProps) {
  return (
    <S.CodingUsBlog>
      <S.CodingUsBlogBody>
        <CodingUsHistory
          historyData={{
            작성글: 10,
            GOOD: 24,
            BAD: 2,
            채택: 0,
            댓글: 13,
          }}
          title="My Blog History"
        />
        <Blank height="65px" />
        <S.HotTopicWrapper>
          <Label01 value="팔로잉" padding="0px" weight="700" size="36px" />
          <Blank height="32px" />
          <S.CardWrapper>
            {console.log(props.followBlogList)}
            {props.followBlogList?.map((el) => (
                  <BlogShortCard
                    key={uuidV4()}
                    data={el}
                  />
                ))
            }
          </S.CardWrapper>
        </S.HotTopicWrapper>
        <Blank height="120px" />
        <S.FollowingWrapper>
          <Label01 value="전체 블로그" padding="0px" weight="700" size="36px" />
          <Blank height="21px" />
          <S.SortGubun>
            <S.GubunLabel
              isSelected={props.isOrderByPopular}
              onClick={() => {!props.isOrderByPopular && props.onToggleSortGubun()}}
            >
              인기
            </S.GubunLabel>
            <S.GubunLabel isSelected={false}>|</S.GubunLabel>
            <S.GubunLabel
              isSelected={!props.isOrderByPopular}
              onClick={() => {props.isOrderByPopular && props.onToggleSortGubun()}}
            >
              최신
            </S.GubunLabel>
          </S.SortGubun>
          <Blank height="34px" />
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true || false}
            useWindow={false}
          >
            <S.CardWrapper>
              {props.blogList?.map((el) => (
                <div key={uuidV4()}>
                  <BlogCard01 data={el.blog} isLike={el.isLike} />
                  <Blank height="40px" />
                </div>
              ))}
            </S.CardWrapper>
          </InfiniteScroll>
        </S.FollowingWrapper>
      </S.CodingUsBlogBody>
      <WriteBtn page="blog" />
    </S.CodingUsBlog>
  );
}
