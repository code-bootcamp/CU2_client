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
import { Dispatch, SetStateAction, useRef } from "react";
import { EditorType } from "@toast-ui/editor";
import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

interface ITextEditorUIProps {
  setValue: Dispatch<SetStateAction<string>>;
}

export const Editor = styled(ToastEditor)`
  background-color: red;
  .toastui-editor-defaultUI-toolbar {
    display: flex;
    padding: 0 25px;
    height: 45px;
    background-color: red;
    border-bottom: 1px solid #ebedf2;
    border-radius: 3px 3px 0 0;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  .toastui-editor-defaultUI {
    .toastui-editor-defaultUI-toolbar {
      background-color: ${"white"};
    }
    
    .toastui-editor-dropdown-toolbar {
      background-color: ${"white"};
    }
    .toastui-editor-defaultUI-toolbar .scroll-sync.active::before {
      color: ${Color.dark};
    }
    /* 
    .toastui-editor-toolbar-icons {
      background-color: ${Color.light};
      background-color: ${Color.sub};
    }
    .toastui-editor-toolbar-icons.bold {
      background: url("1-place-medal.png") no-repeat;
      background-size: 466px 146px;
    } 
    */
  }
`;
export default function EditorUI(props: ITextEditorUIProps) {
  const editorRef = useRef<ToastEditor>(null);

  return (
    <Wrapper>
      <Editor
        ref={editorRef}
        onChange={(_: EditorType) => {
          props.setValue(editorRef.current?.getInstance().getMarkdown() ?? "");
        }}
        previewStyle="vertical"
        placeholder="내용을 입력해주세요"
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        onLoad={() => {
          console.log("ins", editorRef.current?.getInstance());
          console.log("root", editorRef.current?.getRootElement());
        }}
      />
    </Wrapper>
  );
}
