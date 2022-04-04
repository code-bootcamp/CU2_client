import React, { useState } from "react";
import { useAuthCoach } from "../../../../../commons/hooks/useAuthCoach";
import { useMoveToPage } from "../../../../../commons/hooks/useMoveToPage";
import AnswerPresenter from "./Answer.Presenter";

export default function AnswerComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(props.answer);

  return (
    <AnswerPresenter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      answer={props.answer}
    />
  );
}
