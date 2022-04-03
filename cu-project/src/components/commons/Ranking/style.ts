import styled from "@emotion/styled";


export const RankingWrapper = styled.div`
  
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;
export const SortGubun = styled(RowWrapper)``;

export const TopWrapper  = styled(RowWrapper)`
  justify-content: space-between;
`;


export const CardWrapper = styled.div`
  
`;

export const LoadMoreBtn = styled(RowWrapper)`
  width: 100%;
  min-height: 100px;
  font-size: 32px;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;