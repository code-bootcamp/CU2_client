import styled from "@emotion/styled";

export const Tag = styled.div`
  background-color: #222222;
  color: #ffffff;
  padding: 7px 30px;
  border-radius: 8px;
  width: auto;
`;

interface ITagProps {
  value: string;
}

export default function Tag01(props: ITagProps) {
  return <Tag>{props.value}</Tag>;
}
