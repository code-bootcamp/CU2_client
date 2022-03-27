import Editor from "@toast-ui/editor";
import { useRef } from "react";
import CoachPortfolioUI from "./CoachPortfolio.Presenter";

export default function CoachPortfolio(props) {
  const editorRef = useRef<Editor>(null);
  return <CoachPortfolioUI isEdit={props.isEdit} editorRef={editorRef} />;
}
