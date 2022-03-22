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
`;

export const Image = styled.img`
  width: 100%;
  height: 182px;
  border: none;
`;

export const Contents = styled.div`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  max-height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
`;
