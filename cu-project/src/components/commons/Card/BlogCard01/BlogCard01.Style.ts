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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  :hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    img {
      transform: scale(1.2);
      transition: 0.5s;
      z-index: 0;
    }
    ,
    .header {
      display: none;
    }
  }
  /* border: 1px solid #F0F0F0; */
`;
export const ImageWrapper = styled.div`
  z-index: 0;
  overflow: hidden;
  background-color: ${(props: {isImage: boolean})=> props.isImage ? "white" : "black"};
  border-radius: 5px;
  width: 285px;
  height: 189px;
`;
export const Image = styled.img`
  z-index: 1;
  width: 285px;
  height: 189px;
  border: none;
  border-radius: 8px 8px 0px 0px;
  object-fit: "cover";

  :hover {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  padding: 0px 5px;
  width: 100%;
  height: 100%;
`;

export const StackWrapper = styled(RowWrapper)``;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  height: 36px;
  overflow: hidden;
  :hover {
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
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    cursor: pointer;
  }
`;

export const Writer = styled.div`
  font-size: 16px;
`;
export const GoodBad = styled(RowWrapper)``;
