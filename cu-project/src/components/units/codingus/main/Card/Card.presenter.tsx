import Blank from "../../../../commons/Blank";
import * as S from "./Card.styles";

export default function CardUI() {
  const image = "https://source.unsplash.com/random";

  return (
    <S.CardWrapper>
      <S.CardImageWrapper>
        {!!image && <S.CardImage src={image}></S.CardImage>}
        <S.LikeToggle>♥︎</S.LikeToggle>
      </S.CardImageWrapper>
      <S.CardBodyWrapper>
        <S.CardContentWrapper>
          <S.CardTagWrapper>
            {new Array(3).fill(0).map((_, idx) => (
              <S.CardTag key={idx}>{`스택${idx + 1}`}</S.CardTag>
            ))}
          </S.CardTagWrapper>
          <Blank height="10px" />
          <S.CardTitle>{"제목입니다~"}</S.CardTitle>
          <S.CardContent>{"내용입니다~~"}</S.CardContent>
        </S.CardContentWrapper>
        <S.CardBottomWrapper>
          <S.CardDetaiWrapper>
            <S.CardDate>{"30분 전"}</S.CardDate>
            <S.CardComment>
              . {10}
              개의 댓글
            </S.CardComment>
          </S.CardDetaiWrapper>
        </S.CardBottomWrapper>
      </S.CardBodyWrapper>
      <S.CardFooterWrapper>
        <S.CardProfileWrapper>
          <span>by</span>
          <S.Writer>{"작성자입니다~~"}</S.Writer>
        </S.CardProfileWrapper>
        <S.CardLikeWrapper></S.CardLikeWrapper>
      </S.CardFooterWrapper>
    </S.CardWrapper>
  );
}
