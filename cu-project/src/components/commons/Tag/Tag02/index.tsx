import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

export const Tag = styled.div`
  color: ${Color.dark};
  display: inline-block;
  font-weight: 400;
  font-size: ${(props: { size: string | number | undefined }) =>
    props.size ? `${String(props.size).replace("px", "")}px` : "18px"};
  line-height: 29px;
`;

interface ITagProps {
  value: string;
  size?: string | number;
}

export default function Tag02(props: ITagProps) {
  return <Tag size={props.size}>{`# ${props.value}`}</Tag>;
}
