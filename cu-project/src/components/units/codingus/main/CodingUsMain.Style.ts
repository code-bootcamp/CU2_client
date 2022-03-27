import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  /* max-width: 1200px; */
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 0;
`;

export const CodingUsMain = styled.div`
  /* width: 100vw;
  height: 100vh;
  max-width: 1200px;
  margin: 0 0 0 20%; */
  max-width: 1200px;
`;
export const RowWrapper = styled.div`
  display: flex;
  align-items:  center;
`;

interface ILabelProps {
  fontWeight?: number | string;
  fontSize?: string;
  color?: string;
}

export const Label = styled.div`
  font-weight: ${(props: ILabelProps) =>
    props.fontWeight ? props.fontWeight : "normal"};
  font-size: ${(props: ILabelProps) =>
    props.fontSize ? props.fontSize : "16px"};
  color: ${(props: ILabelProps) => (props.color ? props.color : "black")};
`;

export const SearchWrapper = styled(RowWrapper)`
  justify-content: space-between;
`;
export const SearchInput = styled.input`
  border-radius: 50px;
  width: 1095px;
  font-size: 24px;
  background-color: #f6f5f5;
  padding: 15px 40px;
  border: none;
`;
export const SearchBtn = styled.button`
  width: 64px;
  height: 64px;
  background-color: #c4c4c4;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const UserHistoryWrapper = styled.div``;
export const HistoryItemWrapper = styled(RowWrapper)`
  justify-content: space-between;
`;
export const HistoryItem = styled.div`
  width: 149px;
  height: 149px;
  background-color: #ffffff;
  /* margin: 0px 62px 0px 0px; */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BestUserWrapper = styled.div``;
export const BestUserItemWrapper = styled(RowWrapper)`
  justify-content: space-between;
`;
export const BestUserItem = styled.div`
  width: 387px;
  height: 521px;
  background-color: #f6f5f5;
  padding: 36px 36px 36px 27px;
`;
export const MiniBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #c4c4c4;
  border: none;
`;
export const BestUserHeader = styled(RowWrapper)`
  justify-content: center;
`;
export const BestUserImage = styled.img`
  width: 100%;
  max-height: 216px;
`;

export const RecomendBlogWrapper = styled.div``;
export const BlogItemWrapper = styled(RowWrapper)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: 387px;
  height: 538px;
  background-color: #f6f5f5;
`;
export const CardImage = styled.img`
  width: 387px;
  height: 188px;
`;

export const CardTag = styled.div`
  background-color: #c4c4c4;
  border-radius: 50px;
  padding: 10px 20px;
`;

export const CardContents = styled.div`
  padding: 24px 36px 36px 27px;
`;

export const RecomendStackWrapper = styled.div``;
export const StackItemWrapper = styled(RowWrapper)`
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WriteButton = styled.button`
  z-index: 2;
  display: flex;
  align-items: center;
  width: 150px;
  padding: 16px 21px 16px 15px;
  position: fixed;
  font-size: 24px;
  right: 30px;
  top: 92%;
  overflow: hidden;
  background: white;
  border-radius: 8px;
  border: 2px solid #c4c4c4;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
`;

export const LeftSideBar = styled.div`
  z-index: 2;
  align-items: center;
  position: fixed;
  left: 3%;
  top: 10%;
  overflow: hidden;
`;

export const InterestItem = styled(RowWrapper)``;

export const RightSideBar = styled.div`
  z-index: 2;
  align-items: center;
  position: fixed;
  right: 3%;
  top: 10%;
  overflow: hidden;
`;

