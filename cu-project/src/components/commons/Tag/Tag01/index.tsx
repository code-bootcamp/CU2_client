import styled from "@emotion/styled";

export const Tag = styled.div`
  background-color: #222222;
  color: #ffffff;
  border-radius: 8px;
  display: inline-block;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

interface ITagProps {
  value: string;
  isShort?: boolean;
}

export default function Tag01(props: ITagProps) {
  return <Tag style={{padding: props.isShort ? "7px 30px" : "12px 30px", minWidth:props.isShort? "120px" : "0px" }}>{props.value}</Tag>;
}
