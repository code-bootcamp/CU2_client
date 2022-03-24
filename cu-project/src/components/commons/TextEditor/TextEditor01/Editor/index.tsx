import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
// import "./toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Editor as ToastEditor } from "@toast-ui/react-editor";
import { RefObject, useEffect, useRef } from "react";
import { EditorType } from "@toast-ui/editor";
import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

interface ITextEditorUIProps {
  ref: RefObject<ToastEditor>;
}

export const Editor = styled(ToastEditor)``;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  .toastui-editor-defaultUI {
    border: none;
    .toastui-editor-defaultUI-toolbar {
      background-color: ${"white"};
      border: none;
      padding: 0px;
    }
    .toastui-editor-dropdown-toolbar {
      background-color: ${"white"};
    }
    .toastui-editor-defaultUI-toolbar button {
      border: none;
    }
    .toastui-editor-defaultUI-toolbar .scroll-sync.active::before {
      color: ${Color.dark};
    }
    .toastui-editor-mode-switch {
      border: none;
    }
    .tab-item {
      display: none;
    }
  }
`;
export default function EditorUI(props: ITextEditorUIProps) {
  const editorRef = useRef<ToastEditor>(null);

  useEffect(() => {
    console.log(editorRef);
  }, [editorRef]);
  return (
    <Wrapper>
      <Editor
        ref={props.ref}
        onChange={(_: EditorType) => {}}
        previewStyle="vertical"
        placeholder="당신의 이야기를 적어보세요"
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        onLoad={() => {
          // console.log("ins", editorRef.current?.getInstance());
          // console.log("root", editorRef.current?.getRootElement());
        }}
      />
    </Wrapper>
  );
}
