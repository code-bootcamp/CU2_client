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
  height: ${(props: ICardWrapperProps) => props.height};
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 8px;
  /* border: 1px solid #F0F0F0; */
`;

export const Image = styled.img`
  position: absolute;
  margin: 0px 0px 0px 50px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
