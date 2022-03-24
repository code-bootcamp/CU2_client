import styled from "@emotion/styled";

export const AllWrapper = styled.div`
  margin: 70px 12.5% 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Box = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const BlogHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BlogHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  & input {
    width: 300px;
    border: none;
  }
`;
export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;

export const CardWrapper = styled(RowWrapper)`
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
