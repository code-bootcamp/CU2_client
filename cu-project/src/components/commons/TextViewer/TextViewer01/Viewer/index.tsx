import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import { Viewer as ToastViewer2 } from "@toast-ui/react-editor";
import styled from "@emotion/styled";

interface ITextViewerUIProps {
  value: string;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .toastui-editor-contents {
    font-size: 18px;
  }
`;

export default function ViewerUI(props: ITextViewerUIProps) {

  return (
    <Wrapper>
      {props.value && <ToastViewer2
        initialValue={props.value}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />}
    </Wrapper>
  );
}
