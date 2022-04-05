import { AiFillPlusCircle } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroller";
import Blank from "../../../commons/Blank";
import BlogCard01 from "../../../commons/Card/BlogCard01/BlogCard01";
import CoachingUsSidebar from "../sidebar/CoachingUsSidebar.Container";
import { v4 as uuidV4 } from "uuid";
import * as S from "./CoachingUsColumn.Style";
import BlogCard02 from "../../codingus/card/blogCard/BlogCard02/BlogCard02";

export default function CoachingUsColumnUI(props) {
  return (
    <S.Wrapper>
      <S.LeftSideBar>
        <CoachingUsSidebar />
      </S.LeftSideBar>
      <S.ColumnsBody>
        <S.CoachColumn>
          Weekly Best Columns
          <Blank height="30px" />
          <S.ContainerColumnsListBody>
            {props.columns?.map((column, index) => (
              <S.ColumnsList
                key={column.id}
                onClick={props.moveToPage(
                  `/coachingus/coaches/876cbaa9-b954-46e7-b6a3-b7e5f7cb0e7b/columns/0`
                )}
              >
                <S.ColumnPicture imgCover={props.imgUrl[index]} />

                <S.ColumnText>
                  <S.ColumnTitle>
                    {column.title.length > 25 ? (
                      <S.ColumnShortenTitle>
                        {column.title.slice(0, 25) + "..."}
                      </S.ColumnShortenTitle>
                    ) : (
                      <S.ColumnTitle>{column.title}</S.ColumnTitle>
                    )}
                  </S.ColumnTitle>
                  <S.ColumnContents>
                    {column.contents.length > 30 ? (
                      <S.ColumnShortenContents>
                        {column.contents.slice(0, 30) + "..."}
                      </S.ColumnShortenContents>
                    ) : (
                      <S.ColumnContents>{column.contents}</S.ColumnContents>
                    )}
                  </S.ColumnContents>
                  <Blank height="5px" />
                  <S.ColumnFooter>
                    <div>{column.name}</div>
                    {column.createdAt}
                  </S.ColumnFooter>
                </S.ColumnText>
              </S.ColumnsList>
            ))}
          </S.ContainerColumnsListBody>
        </S.CoachColumn>
      </S.ColumnsBody>
      <Blank height="50px" />
      <S.ColumnsBody>
        <S.CoachColumn>
          Columns
          <Blank height="30px" />
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            // hasMore={props.isActive}
            hasMore={true || false}
            // useWindow={true}
          >
            <S.ContainerColumnsBody>
              {props.blogList?.map((el, index) => (
                <div
                  style={{ height: "500px", padding: "0 40px 0 0" }}
                  key={index}
                >
                  <BlogCard01
                    key={uuidV4()}
                    data={el.blog}
                    isLike={el.isLike}
                  />
                </div>
              ))}
              {/* {props.totalColumn?.map((column) => (
                <S.ColumnList
                  key={column.id}
                  onClick={props.moveToPage(`/coachingus/columns/${column.id}`)}
                >
                  <S.ColumnsPicture></S.ColumnsPicture>

                  <S.ColumnText>
                    <S.ColumnTitle>
                      {column.title.length > 25 ? (
                        <S.ColumnShortenTitle>
                          {column.title.slice(0, 25) + "..."}
                        </S.ColumnShortenTitle>
                      ) : (
                        <S.ColumnTitle>{column.title}</S.ColumnTitle>
                      )}
                    </S.ColumnTitle>
                    <S.ColumnContents>
                      {column.contents.length > 30 ? (
                        <S.ColumnShortenContents>
                          {column.contents.slice(0, 30) + "..."}
                        </S.ColumnShortenContents>
                      ) : (
                        <S.ColumnContents>{column.contents}</S.ColumnContents>
                      )}
                    </S.ColumnContents>
                    <Blank height="5px" />
                    <S.ColumnFooter>
                      <div>{column.user.name}</div>2일전
                    </S.ColumnFooter>
                  </S.ColumnText>
                </S.ColumnList>
              ))} */}
            </S.ContainerColumnsBody>
          </InfiniteScroll>
          {props.isCoach && (
            <S.WriteBtn>
              <AiFillPlusCircle
                onClick={props.moveToPage("/coachingus/columns/write")}
                style={{ color: "#EA345A", width: "80px", height: "80px" }}
              />
            </S.WriteBtn>
          )}
        </S.CoachColumn>
      </S.ColumnsBody>
    </S.Wrapper>
  );
}
