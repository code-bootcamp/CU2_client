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
      <Blank height="20px" />
      <S.ContainerColumnsListBody>
        {props.columnList?.map((column) => (
          <S.ColumnsList
            key={column.id}
            onClick={props.moveToPage(
              `/coachingus/coaches/${column?.user.coachProfile.id}/columns/${column?.id}`
            )}
          >
            <S.ColumnPicture>{column.picture}</S.ColumnPicture>
            <Blank height="10px" />
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
              <S.ColumnFooter>김태훈 coach | 2일전</S.ColumnFooter>
            </S.ColumnText>
          </S.ColumnsList>
        ))}
      </S.ContainerColumnsListBody>
      <Blank height="50px" />
      <S.MoreCoachesListBtn onClick={props.moveToPage(`/coachingus/column`)}>
        더 많은 칼럼보기 {">"}
      </S.MoreCoachesListBtn>
    </S.ContainerColumnsList>
  );
}
