import styled from "@emotion/styled";
import Blank from "../../../../commons/Blank";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
import WaitingItem from "../../../codingus/QnA/waitingItem/WaitingItem.Container";

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

export default function SearchStack() {
  return (
    <Wrapper>
      <SearchHead>{`CodingUs StackQ&A`}</SearchHead>
      <Blank height="30px" />
      <HorizontalLine />
      {new Array(4).fill(0).map((el, idx) => (
        <div key={idx} style={{ width: "100%" }}>
          <WaitingItem
            data={{
              stack: "스택",
              tags: ["컴퓨터 부품", "JAVA"],
              title: "모든 국민은 학문과 예술의 자유를 가진다.",
              images: ["https://source.unsplash.com/random"],
              commentCnt: 3,
              createdAt: "2022-02-07T14:42:53.532Z",
            }}
            onClickAnswer={() => {}}
          />
          <HorizontalLine />
          <Blank height="30px" />
        </div>
      ))}
    </Wrapper>
  );
}
