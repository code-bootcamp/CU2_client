import styled from "@emotion/styled";

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

export default function SearchComments() {
  return (
    <Wrapper>
      <SearchHead>CoachingUs Comments</SearchHead>
      <div>코멘트 리스트</div>
    </Wrapper>
  );
}
