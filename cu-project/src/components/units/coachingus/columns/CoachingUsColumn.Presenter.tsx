import { AiFillPlusCircle } from "react-icons/ai";
import Blank from "../../../commons/Blank";
import CoachingUsSidebar from "../sidebar/CoachingUsSidebar.Container";
import * as S from "./CoachingUsColumn.Style";

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
            {props.columnBestList.map((column) => (
              <S.ColumnsList
                key={column.id}
                onClick={props.moveToPage(`/coachingus/coaches/0/columns/0`)}
              >
                <S.ColumnPicture>{column.picture}</S.ColumnPicture>

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
                    <div>김태훈</div>2일전
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
          <S.ContainerColumnsBody>
            {props.columnList.map((column) => (
              <S.ColumnList
                key={column.id}
                onClick={props.moveToPage(`/coachingus/columns/${column.id}`)}
              >
                <S.ColumnsPicture>{column.picture}</S.ColumnsPicture>

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
                    <div>김태훈</div>2일전
                  </S.ColumnFooter>
                </S.ColumnText>
              </S.ColumnList>
            ))}
          </S.ContainerColumnsBody>
          <S.WriteBtn>
            <AiFillPlusCircle
              onClick={props.moveToPage("/coachingus/columns/write")}
              style={{ color: "#EA345A", width: "80px", height: "80px" }}
            />
          </S.WriteBtn>
        </S.CoachColumn>
      </S.ColumnsBody>
    </S.Wrapper>
  );
}
