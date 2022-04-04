import styled from "@emotion/styled";
import React from "react";
import { AiFillPlusCircle, AiOutlineEdit } from "react-icons/ai";
import Color from "../../../../commons/styles/color";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 80px;
  height: 80px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
`;

export default function WriteBtn(props: { page: string }) {
  const { moveToPage } = useMoveToPage();
  return (
    <Button>
      <AiOutlineEdit
        onClick={moveToPage(`/codingus/${props.page}/write`)}
        style={{ color: Color.white, width: "50px", height: "50px" }}
      />
    </Button>
  );
}
