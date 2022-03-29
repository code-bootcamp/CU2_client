import styled from "@emotion/styled";
import Blank from "../../../../commons/Blank";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchHead = styled.h1`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const ContainerColumnsListBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

export const ColumnsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 385px;
  margin: 0 10px;
  height: fit-content;
  padding: 0;
  overflow: hidden;
  cursor: pointer;

  :hover {
    background-color: #ea345a;
    color: white;
  }
`;

export const ColumnShortenContents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: lighter;
`;

// body columns 영역
export const ContainerColumnsBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 240px;
  margin: 0px 0px 50px 0;
  height: fit-content;
  padding: 0;
  overflow: hidden;
  cursor: pointer;

  :hover {
    background-color: #ea345a;
    color: white;
  }
`;

export const ColumnPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: #c4c4c4;
`;
export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-between;
  height: 120px;
  width: 100%;
  padding: 10px;
`;
export const ColumnTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 600;
`;
export const ColumnShortenTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 600;
`;

export const ColumnContents = styled.div`
  font-size: 14px;
  font-weight: lighter;
`;

export const ColumnFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: lighter;

  font-size: 14px;
`;

export const ColumnsPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background-color: #c4c4c4;
`;

export default function SearchColumns() {
  const { moveToPage } = useMoveToPage();

  const columnList = [
    {
      id: 0,
      title: "형제들에서 알립니다!",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "손오공",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 1,
      title: "초기 컨텐츠 입니다.",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "아이폰",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 2,
      title: "초기 컨텐츠 입니다.",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "아이폰",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 3,
      title: "초기 컨텐츠 입니다.",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "아이폰",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 4,
      title: "초기 컨텐츠 입니다.",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "아이폰",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 5,
      title: "초기 컨텐츠 입니다.",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "아이폰",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 6,
      title: "초기 컨텐츠 입니다.",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "아이폰",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 7,
      title: "초기 컨텐츠 입니다.",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "아이폰",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
  ];
  return (
    <Wrapper>
      <SearchHead>CoachingUs Columns</SearchHead>
      <Blank height="30px" />
      <ContainerColumnsBody>
        {columnList.map((column) => (
          <ColumnList
            key={column.id}
            onClick={moveToPage(`/coachingus/columns/${column.id}`)}
          >
            <ColumnsPicture>{column.picture}</ColumnsPicture>

            <ColumnText>
              <ColumnTitle>
                {column.title.length > 25 ? (
                  <ColumnShortenTitle>
                    {column.title.slice(0, 25) + "..."}
                  </ColumnShortenTitle>
                ) : (
                  <ColumnTitle>{column.title}</ColumnTitle>
                )}
              </ColumnTitle>
              <ColumnContents>
                {column.contents.length > 30 ? (
                  <ColumnShortenContents>
                    {column.contents.slice(0, 30) + "..."}
                  </ColumnShortenContents>
                ) : (
                  <ColumnContents>{column.contents}</ColumnContents>
                )}
              </ColumnContents>
              <Blank height="5px" />
              <ColumnFooter>
                <div>김태훈</div>2일전
              </ColumnFooter>
            </ColumnText>
          </ColumnList>
        ))}
      </ContainerColumnsBody>
    </Wrapper>
  );
}
