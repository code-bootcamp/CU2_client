import styled from "@emotion/styled";

interface IIconProps {
  backgroundColor?: string;
  color?: string;
  size?: number;
}

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props: IIconProps) =>
    props.backgroundColor ? props.backgroundColor : "black"};
  color: ${(props: IIconProps) => (props.color ? props.color : "white")};
  width: ${(props: IIconProps) => (props.size ? `${props.size}px` : "25px")};
  height: ${(props: IIconProps) => (props.size ? `${props.size}px` : "25px")};
  font-size: ${(props: IIconProps) =>
    props.size ? `${props.size * (14 / 25)}px` : "14px"};
`;

export default function PointIcon(props: IIconProps) {
  return <Icon {...props}>{"P"}</Icon>;
}
