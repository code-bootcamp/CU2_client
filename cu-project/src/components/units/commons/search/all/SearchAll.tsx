import Blank from "../../../../commons/Blank";

import * as S from "../Search.Style";

export default function SearchAll() {
  return (
    <div style={{ width: "75%" }}>
      <Blank height="30px" />
      <S.Category>
        <S.CodingUs>CodingUs</S.CodingUs>
        <Blank width="30px" />
        <div>
          <S.Line1 />
        </div>
        <Blank width="30px" />
      </S.Category>
      <S.BlogBox>
        <Blank height="30px" />
        <h2>Blog</h2>
        <Blank height="30px" />
        <S.BlogBackGround>
          <div>
            <img src="/Group 315.png" width="30%" />
            <img src="/Group 315.png" width="30%" />
            <img src="/Group 315.png" width="30%" />
          </div>
        </S.BlogBackGround>
        <Blank height="50px" />
        <S.SearchButton>{`Blog 더 보기`}</S.SearchButton>
      </S.BlogBox>
      <S.QuestionBox>
        <Blank height="30px" />
        <h2>{`Q&A`}</h2>
        <Blank height="30px" />
        <S.QuestionBackGround>
          <div>
            <img src="/Group 315.png" width="22%" />
            <img src="/Group 315.png" width="22%" />
            <img src="/Group 315.png" width="22%" />
            <img src="/Group 315.png" width="22%" />
          </div>
        </S.QuestionBackGround>
        <Blank height="50px" />
        <S.SearchButton>{`Q&A 더 보기`}</S.SearchButton>
      </S.QuestionBox>
      <Blank height="100px" />
      <S.Category>
        <S.CoachingUs>CoachingUs</S.CoachingUs>
        <Blank width="30px" />
        <div>
          <S.Line2 />
        </div>
        <Blank width="30px" />
      </S.Category>
      <S.BlogBox>
        <Blank height="50px" />
        <h2>Coaching</h2>
        <Blank height="50px" />
        <S.CoachingBackGround>
          <div>
            <img src="/Group 315.png" width="30%" />
            <img src="/Group 315.png" width="30%" />
            <img src="/Group 315.png" width="30%" />
          </div>
        </S.CoachingBackGround>
        <Blank height="50px" />
        <S.SearchButton2>{`Coaching 더 보기`}</S.SearchButton2>
      </S.BlogBox>
      <S.QuestionBox>
        <Blank height="50px" />
        <h2>Columns</h2>
        <Blank height="50px" />
        <S.QuestionBackGround>
          <div>
            <img src="/Group 315.png" width="22%" />
            <img src="/Group 315.png" width="22%" />
            <img src="/Group 315.png" width="22%" />
            <img src="/Group 315.png" width="22%" />
          </div>
        </S.QuestionBackGround>
        <Blank height="50px" />
        <S.SearchButton2>Columns 더 보기</S.SearchButton2>
      </S.QuestionBox>
      <Blank height="50px" />
      <S.Category>
        <S.CodingUs>Us</S.CodingUs>
        <Blank width="30px" />
        <div>
          <S.Line1 />
        </div>
        <Blank width="30px" />
      </S.Category>
      <S.BlogBox>
        <Blank height="30px" />
        <h2>{`Us & Coaches`}</h2>
        <Blank height="30px" />
        <S.BlogBackGround>
          <div>
            <img src="/Group 414.png" width="30%" />
            <img src="/Group 414.png" width="30%" />
            <img src="/Group 414.png" width="30%" />
          </div>
        </S.BlogBackGround>
        <Blank height="50px" />
        <S.SearchButton>{`Us & Coaches 더 보기`}</S.SearchButton>
      </S.BlogBox>
    </div>
  );
}
