import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

export const Tag = styled.div`
  color: ${Color.light};
  display: inline-block;
  font-weight: 400;
  font-size: ${(props: { size: string | number | undefined }) =>
    props.size ? `${String(props.size).replace("px", "")}px` : "16px"};
  line-height: 19px;
  padding: 8px 16px 8px 16px;
  background: ${Color.dark};
  border-radius: 20px;
`;

interface ITagProps {
  value: string;
  size?: string | number;
}

export default function Tag03(props: ITagProps) {
  return <Tag size={props.size}>{`${props.value}`}</Tag>;
}
