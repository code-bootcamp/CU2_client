import { ICoachingUsColumnsCardUIProps } from "../../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import * as S from "./ColumnsCard.Style";

export default function ColumnsCardUI(props: ICoachingUsColumnsCardUIProps) {
  return (
    <S.ContainerColumnsList>
      <S.ColumnsListTitle>
        개발자 실무 Tip, 대기업 면접 Tip들 아직도 찾고 계신가요?
      </S.ColumnsListTitle>
      <S.ColumnsListSubTitle>코치들의 칼럼을 읽어보세요!</S.ColumnsListSubTitle>
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
