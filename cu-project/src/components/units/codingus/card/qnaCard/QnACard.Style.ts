import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

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
  padding: 20px 30px 30px 20px;
  background-color: ${Color.light};
  margin: 0px 0px 20px 0px;
`;

export const TagWrapper = styled.div`
  display:flex;
`;

export const TextArea = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled(TextArea)`
  font-weight: 700;
  font-size: 24px;
  :hover {
    cursor: pointer;
  }
`;

export const Contents = styled(TextArea)`
  font-weight: 200;
  font-size: 24px;
  line-height: 29px;
  color: ${Color.medium};
  :hover {
    cursor: pointer;
  }
`;

export const Writer = styled(TextArea)`
  font-weight: 200;
  font-size: 24px;
  line-height: 29px;
  color: ${Color.medium};
  text-align: right;
`;
