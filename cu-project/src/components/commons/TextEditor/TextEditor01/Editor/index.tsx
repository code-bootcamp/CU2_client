import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Editor as ToastEditor } from "@toast-ui/react-editor";
import { RefObject } from "react";
import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";
import { HookCallback } from "@toast-ui/editor/types/editor";
import { gql, useMutation } from "@apollo/client";
import {
  IBlog,
  IMutation,
  IMutationUploadblogFileArgs,
} from "../../../../../commons/types/generated/types";

const UPLOAD_BLOG_FILE = gql`
  mutation uploadblogFile($files: [Upload!]!) {
    uploadblogFile(files: $files)
  }
`;

interface ITextEditorUIProps {
  editorRef: RefObject<ToastEditor>;
  data?: IBlog;
  isEdit?: boolean;
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
  const [uploadblogFile] = useMutation<
    Pick<IMutation, "uploadblogFile">,
    IMutationUploadblogFileArgs
  >(UPLOAD_BLOG_FILE);

  return (
    <Wrapper>
      {props.isEdit ? (
        props.data && (
          <ToastEditor
            initialValue={props.data?.contents || ""}
            ref={props.editorRef}
            height={"100%"}
            previewStyle="vertical"
            placeholder="당신의 이야기를 적어보세요"
            plugins={[
              colorSyntax,
              [codeSyntaxHighlight, { highlighter: Prism }],
            ]}
            hooks={{
              addImageBlobHook: async (
                file: Blob | File,
                callback: HookCallback
              ) => {
                try {
                  const result = await uploadblogFile({
                    variables: { files: [file] },
                  });
                  if (!result) throw new Error("이미지 등록 실패");
                  const url = `https://storage.googleapis.com/cu2-backend/${String(
                    result?.data?.uploadblogFile[0]
                  )}`;
                  callback(url);
                } catch (err: any) {
                  alert(err.message);
                }
              },
            }}
          />
        )
      ) : (
        <ToastEditor
          initialValue={props.data?.contents || ""}
          ref={props.editorRef}
          height={"100%"}
          previewStyle="vertical"
          placeholder="당신의 이야기를 적어보세요"
          plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
          hooks={{
            addImageBlobHook: async (
              file: Blob | File,
              callback: HookCallback
            ) => {
              try {
                const result = await uploadblogFile({
                  variables: { files: [file] },
                });
                if (!result) throw new Error("이미지 등록 실패");
                const url = `https://storage.googleapis.com/cu2-backend/${String(
                  result?.data?.uploadblogFile[0]
                )}`;
                callback(url);
              } catch (err: any) {
                alert(err.message);
              }
            },
          }}
        />
      )}
    </Wrapper>
  );
}
