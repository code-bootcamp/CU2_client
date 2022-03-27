import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";
export const Tag = styled.div`
  background-color: ${(props: {color : string}) => props.color === "dark" ? Color.dark : Color.main};
  color: #ffffff;
  border-radius: 8px;
  display: inline-block;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;

interface ITagProps {
  value: string;
  isShort?: boolean;
  color?: "dark" | "main";
}

export default function Tag01(props: ITagProps) {
  return <Tag style={{padding: props.isShort ? "7px 30px" : "7px 15px", minWidth:props.isShort? "120px" : "0px" }} color={props.color ? "main" : 'dark'}>{props.value}</Tag>;
}
