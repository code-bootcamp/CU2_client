import React, { useState } from "react";
import { useMoveToPage } from "../../../../../commons/hooks/useMoveToPage";
import AnswerPresenter from "./Answer.Presenter";

export default function AnswerComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AnswerPresenter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />
  );
}
