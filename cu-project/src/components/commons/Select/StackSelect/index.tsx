import { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./style"
interface IStackSelectProps{
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
    value: string;
    list: string[];
}
export default function StackSelect (props: IStackSelectProps) {
    
    return (
        <S.CategorySelect onChange={props.onChange} value={props.value}>
          <S.StackOption key={uuidv4()} value={""}>
            Stack 선택
          </S.StackOption>
          {props.list.map((el) => (
            <S.StackOption key={uuidv4()} value={el}>
              {el}
            </S.StackOption>
          ))}
          <S.StackOption key={uuidv4()} value={"etc"}>
            기타
          </S.StackOption>
        </S.CategorySelect>
    );
}