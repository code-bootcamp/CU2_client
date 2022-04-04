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

  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
  transition: 0.5s;
  :hover {
    /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); */
  }
  &:hover {
    img {
      transform: scale(1.2);
      transition: 0.5s;
      z-index: 0;
    }
    ,
    /* .header {
      display: none;
    } */
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 182px;
  /* border: none; */
  background-color: ${(props: {imageUrl: string}) => props.imageUrl ? "white" : "black"};

`;

export const Contents = styled.div`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
`;
