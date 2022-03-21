import { ICoachingUsMainUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import * as S from "./ColumnsCard.Style";

export default function ColumnsCardUI(props: ICoachingUsMainUIProps) {
  return (
    <S.ContainerColumnsList>
      <S.ColumnsListTitle>
        Coach Columns
        <S.MoreCoachesListBtn>더보기 {">"}</S.MoreCoachesListBtn>
      </S.ColumnsListTitle>
      <S.ContainerColumnsListBody>
        {props.columnList.map((column) => (
          <S.ColumnsList key={column.id}>
            <S.ColumnPicture>{column.picture}</S.ColumnPicture>
            <Blank height="10px" />
            <S.ColumnText>
              <S.ColumnTitle>
                {column.title.length > 13 ? (
                  <S.ColumnShortenTitle>
                    {column.title.slice(0, 13) + "..."}
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
            </S.ColumnText>
          </S.ColumnsList>
        ))}
      </S.ContainerColumnsListBody>
    </S.ContainerColumnsList>
  );
}
