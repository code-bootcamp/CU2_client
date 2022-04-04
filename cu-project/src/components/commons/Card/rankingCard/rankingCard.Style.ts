import styled from "@emotion/styled";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;
interface ICardWrapperProps {
  height: string;
  isMyRanking : boolean;
}
export const Wrapper = styled(RowWrapper)`
  width: 100%;
  height: ${(props: ICardWrapperProps) => props.height};
  border-radius: 8px;
  background-color: #ffffff;
  border: ${(props : ICardWrapperProps) => props.isMyRanking ? "1px solid #C4C4C4" : "none"};
  border-bottom: 1px solid #dbdbdb;
  padding: 22px;
  justify-content: space-between;
`;

export const RankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CurrentRanking = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  width: 50px;
  .p{
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
export const RankingDiff = styled.div`
  font-weight: 700;
  font-size: 14px;
`;
export const MyRanking = styled.div`
  opacity: ${(props: {isMyRanking: boolean}) => props.isMyRanking ? "100%" : "0%"};
  
`;
export const UserInfo = styled(RowWrapper)``;
export const UserImage = styled.img``;

export const UserDetail = styled.div`
  display:flex;
  flex-direction: column;
`;
export const PointWrapper = styled(RowWrapper)`
`;

export const PointDiff = styled.div`
  font-weight: 700;
  font-size: 24px;
`;
