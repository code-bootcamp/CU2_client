import styled from "@emotion/styled";
import React from "react";
import Blank from "../../Blank";
import Label01 from "../../Label/Label01";

interface IIconProps {
  src: string;
  value: string | number;
}

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.img``;

export default function Icon01(props: IIconProps) {
  return (
    <RowWrapper>
      <Icon src={props.src} />
      <Blank width="20px" />
      <Label01 value={String(props.value)} />
    </RowWrapper>
  );
}
