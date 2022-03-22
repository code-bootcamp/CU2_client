import styled from "@emotion/styled";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;
interface ICardWrapperProps {
  width: string;
  height: string;
}
export const Wrapper = styled.div`
  width: ${(props: ICardWrapperProps) => props.width};
  height: : ${(props: ICardWrapperProps) => props.height};
  border-radius: 8px;
  background-color: #FFFFFF;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  width: 285px;
  height: 182px;
  border: none;
`;

export const Body = styled.div`
  padding: 0px 0px;
  width: 100%;
  height: 100%;
`;

export const StackWrapper = styled(RowWrapper)``;


export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

export const FooterWrapper = styled(RowWrapper)`
  display: flex;
  
`;
export const ButtonWrapper = styled(RowWrapper)`
  display: flex;
`;

export const Contents = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
`;

export const Writer = styled.div`
  font-size: 18px;
`;
export const GoodBad = styled(RowWrapper)``;
