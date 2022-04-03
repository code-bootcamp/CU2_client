import styled from "@emotion/styled";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Color from "../../../../commons/styles/color";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

const Button = styled.div`
  position: fixed;
  bottom: 10%;
  right: 5%;

  cursor: pointer;
`;

export default function WriteBtn(props: { page: string }) {
  const { moveToPage } = useMoveToPage();
  return (
    <Button>
      <AiFillPlusCircle
        onClick={moveToPage(`/codingus/${props.page}/write`)}
        style={{ color: Color.main, width: "80px", height: "80px" }}
      />
    </Button>
  );
}
