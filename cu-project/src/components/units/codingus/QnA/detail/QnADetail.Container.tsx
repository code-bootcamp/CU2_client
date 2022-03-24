import { MouseEvent, useState } from "react";
import CodingUsLayout from "../../layout/CodingUsLayout";
import CodingUsQnADetailUI from "./QnADetail.Presenter";

export default function CodingUsQnADetail() {
  const [isSortGood, setIsSortGood] = useState(true);
  const toggleSortGubun = () => {
    setIsSortGood(prev => !prev);
  }

  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
  }

  return (
    <CodingUsLayout
      children={
        <CodingUsQnADetailUI
          question={{
            writer: "작성자",
            createdAt: "2022-02-07T14:42:53.532Z",
            title: "자바스크립트가 뭔가요?",
            contents: "자바스크립트가 궁금해요!",
            stack: "JAVA",
            tags: ["태그1", "태그2"],
          }}
          answers={{
            writer: "작성자",
            createdAt: "2022-02-07T14:42:53.532Z",
            title: "자바스크립트가 뭔가요?",
            contents: "자바스크립트가 궁금해요!",
            stack: "JAVA",
            tags: ["태그1", "태그2"],
          }}
          isSortGood={isSortGood}
          toggleSortGubun = {toggleSortGubun}
          onClickButton ={onClickButton}
        />
      }
    ></CodingUsLayout>
  );
}
