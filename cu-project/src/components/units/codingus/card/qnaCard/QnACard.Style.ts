import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;
interface ICardWrapperProps {
  width: string;

}
export const Wrapper = styled.div`
  width: ${(props: ICardWrapperProps) => props.width};

  padding: 27px 20px 17px 20px;
  background-color: ${Color.white};
  margin: 0px 0px 20px 0px;
  border: 1px solid #f6f5f5;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const TagWrapper = styled.div`
  display: flex;
`;

export const TextArea = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled(TextArea)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  :hover {
    cursor: pointer;
  }
`;

export const Contents = styled(TextArea)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  max-height: 72px;
  color: ${Color.medium};
  :hover {
    cursor: pointer;
  }
`;

export const Writer = styled(TextArea)`
  font-weight: 200;
  font-size: 16px;
  line-height: 29px;
  color: ${Color.medium};
  text-align: right;
`;
export const Like = styled(RowWrapper)`
  
`;