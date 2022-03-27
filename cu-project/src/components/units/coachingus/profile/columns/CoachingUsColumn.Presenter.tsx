import Blank from "../../../../commons/Blank";
import * as S from "./CoachingUsColumn.Style";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";

export default function CoachingUsColumnUI(props) {
  return (
    <S.CoachCommentsWrapper>
      <S.CoachCommentsTitle>Coach Colomns</S.CoachCommentsTitle>
      <S.ContainerColumnsListBody>
        {props.columnList.map((column) => (
          <S.ColumnsList
            key={column.id}
            onClick={props.moveToPage(`/coachingus/column/${column.id}`)}
          >
            <S.ColumnPicture>{column.picture}</S.ColumnPicture>
            <Blank height="20px" />
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
              <S.ExtraBox>
                <S.LikeInfo>
                  <AiOutlineLike
                    style={{
                      height: "20px",
                      width: "20px",
                      marginBottom: "5px",
                    }}
                  />{" "}
                  <Blank width="5px" />
                  20
                </S.LikeInfo>
                <Blank width="20px" />
                <S.CommentsInfo>
                  <BsChatDots
                    style={{
                      height: "20px",
                      width: "20px",
                      marginBottom: "5px",
                    }}
                  />{" "}
                  <Blank width="5px" /> 20
                </S.CommentsInfo>
              </S.ExtraBox>
            </S.ColumnText>
          </S.ColumnsList>
        ))}
      </S.ContainerColumnsListBody>
    </S.CoachCommentsWrapper>
  );
}
