import styled from "@emotion/styled";
import { InputHTMLAttributes, SetStateAction, KeyboardEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
const Wrapper = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: auto;
  border: none;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  :focus {
    outline: none;
  }
`;

const TagWrapper = styled.div`
  border: none;
  display: flex;
  /* align-items: center; */
`;
const InputWrapper = styled.div`
  width: inherit;
  min-width: auto;
`;
const RowWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Tag = styled.p`
  font-weight: 400;
  font-size: 36px;
  margin: 0px 10px 0px 0px;
  width: max-content;
`;

interface IInputProps {
  sub?: string;
  error?: string;
  register?: UseFormRegisterReturn;
  attr?: InputHTMLAttributes<HTMLInputElement>;
  type?: "text" | "password";
  tags: string[];
  setTags: (tags: SetStateAction<string[]>) => void;
}

export default function Input01(props: IInputProps) {
  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length < 1) return;
    if (event.code === "Enter") {
      const newTag = event.currentTarget.value;
      if (props.tags.length < 5) {
        props.setTags((prev) => [...prev, newTag]);
        event.preventDefault();
      }
      event.currentTarget.value = "";
    }
  };
  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <RowWrapper>
          <TagWrapper>
            {props.tags.map((el) => {
              return <Tag key={uuidV4()}>{`#${el}`}</Tag>;
            })}
          </TagWrapper>
          <InputWrapper>
            <Input
              type={props.type ?? "text"}
              {...props.register}
              {...props.attr}
              style={{ width: "inherit" }}
              placeholder="#태그"
              onKeyPress={onKeyPress}
            />
          </InputWrapper>
        </RowWrapper>
      </div>
    </Wrapper>
  );
}
