import styled from "@emotion/styled";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;
interface ICardWrapperProps {
  width: string;
  height?: string;
}
export const Wrapper = styled.div`
  width: ${(props: ICardWrapperProps) => props.width};
  border-radius: 8px;
  background-color: #ffffff;
  /* border: 1px solid #F0F0F0; */
`;

export const Image = styled.img`
  width: 285px;
  height: 189px;
  border: none;
  border-radius: 8px;
  :hover{
    cursor: pointer;
  }
`;

export const Body = styled.div`
  padding: 0px 0px;
  width: 100%;
  height: 100%;
`;

export const StackWrapper = styled(RowWrapper)``;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  :hover{
    cursor: pointer;
  }
`;

export const FooterWrapper = styled(RowWrapper)`
  display: flex;
`;
export const ButtonWrapper = styled(RowWrapper)`
  display: flex;
`;

export const Contents = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  max-height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover{
    cursor: pointer;
  }
`;

export const Writer = styled.div`
  font-size: 16px;
`;
export const GoodBad = styled(RowWrapper)``;
