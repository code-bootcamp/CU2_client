import styled from "@emotion/styled";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface IIconProps {
  color?: string;
  size?: number;
  isUp?: boolean;
  onClick?: () => void;
}

export const DropDownBefore = styled(AiOutlineDown)`
  width: ${(props: IIconProps) => (props.size ? `${props.size}px` : "18px")};
  height: ${(props: IIconProps) => (props.size ? `${props.size}px` : "18px")};
  :hover {
    cursor: pointer;
  }
`;

export const DropDownAfter = styled(AiOutlineUp)`
  width: ${(props: IIconProps) => (props.size ? `${props.size}px` : "18px")};
  height: ${(props: IIconProps) => (props.size ? `${props.size}px` : "18px")};
  :hover {
    cursor: pointer;
  }
`;

export default function DropDownIcon(props: IIconProps) {
  return props.isUp ? (
    <DropDownAfter {...props} />
  ) : (
    <DropDownBefore {...props} />
  );
}
