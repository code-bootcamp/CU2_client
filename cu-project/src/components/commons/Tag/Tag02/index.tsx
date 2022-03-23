import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

export const Tag = styled.div`
  color: ${Color.dark};
  display: inline-block;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
`;

interface ITagProps {
  value: string;
}

export default function Tag02(props: ITagProps) {
  return <Tag>{`# ${props.value}`}</Tag>;
}
