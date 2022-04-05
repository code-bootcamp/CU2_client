import { useRouter } from "next/router";
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
        {props.columnList?.slice(0, 3)?.map((column, index) => (
          <S.ColumnsList
            key={column.id}
            onClick={props.moveToPage(
              `/coachingus/coaches/${column?.id}/columns/${column?.id}`
            )}
          >
            {/* `/coachingus/coaches/${column?.user.coachProfile.id}/columns/${column?.id}` */}
            <S.ColumnPicture imgCover={props.imgUrl[index]} />
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

export function ColumnsCardMain(props) {
  const router = useRouter();
  return (
    <>
      <S.ColumnsList
        key={props.column.id}
        onClick={() => {
          router.push(
            `/coachingus/coaches/${props.column?.user.coachProfile.id}/columns/${props.column?.id}`
          );
        }}
      >
        <S.ColumnPicture>{props.column?.picture}</S.ColumnPicture>
        <Blank height="10px" />
        <S.ColumnText>
          <S.ColumnTitle>
            {props.column.title.length > 25 ? (
              <S.ColumnShortenTitle>
                {props.column.title.slice(0, 25) + "..."}
              </S.ColumnShortenTitle>
            ) : (
              <S.ColumnTitle>{props.column.title}</S.ColumnTitle>
            )}
          </S.ColumnTitle>
          <S.ColumnContents>
            {props.column.contents.length > 30 ? (
              <S.ColumnShortenContents>
                {props.column.contents.slice(0, 30) + "..."}
              </S.ColumnShortenContents>
            ) : (
              <S.ColumnContents>{props.column.contents}</S.ColumnContents>
            )}
          </S.ColumnContents>
          <Blank height="5px" />
          <S.ColumnFooter>
            {props.column.user.name} coach | 2일전
          </S.ColumnFooter>
        </S.ColumnText>
      </S.ColumnsList>
    </>
  );
}
