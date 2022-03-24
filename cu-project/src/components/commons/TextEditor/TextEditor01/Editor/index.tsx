import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Editor } from "@toast-ui/react-editor";
import { Dispatch, SetStateAction, useRef } from "react";
import { EditorType } from "@toast-ui/editor";

interface ITextEditorUIProps {
  setValue: Dispatch<SetStateAction<string>>;
}

export default function Writer(props: ITextEditorUIProps) {
  const editorRef = useRef<Editor>(null);
  return (
    <Editor
      ref={editorRef}
      onChange={(_: EditorType) => {
        props.setValue(editorRef.current?.getInstance().getMarkdown() ?? "");
      }}
      previewStyle="vertical"
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      height="100%"
    />
  );
}
