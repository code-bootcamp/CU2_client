import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import Color from "../../../../../../commons/styles/color";
interface IBlogDetailIndexProps {
  index: string[];
  currentIndex?: number;
  indexPositions?: number[];
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export const Wrapper = styled.div`
  border-left: 2px solid #333333;
  height: fit-content;
  margin: 200px 0px 0px 50px;
  position: sticky;
  top: 15%;
`;

interface IItemProps {
  isCurrent: boolean;
  level: number;
}

export const Item = styled.div`
  font-size: 18px;
  line-height: 30px;
  font-weight: ${(props: IItemProps) => (props.isCurrent ? "400" : "200")};
  color: ${(props: IItemProps) =>
    props.isCurrent ? Color.dark : Color.medium};
  margin: ${(props: IItemProps) => `0px 0px 0px ${5 + props.level * 10}px`};
  :hover{
      cursor: ${(props: IItemProps) => props.isCurrent ? "normal" : "pointer"};
  }
`;
export default function BlogDetailIndex(props: IBlogDetailIndexProps) {
  const getLevel = (el: string) => {
    return el.startsWith("###") ? 3 : el.startsWith("##") ? 2 : 1;
  };

  const onClickItem = (idx: number) => () => {
    if (!props.indexPositions) return;
    if (!process.browser) return;
    window.scrollTo(0, props.indexPositions[idx] + 5);
    props.setCurrentIndex(idx);
    console.log(props.indexPositions[idx]);
  };

  return (
    <Wrapper>
      {props.index?.map((el, idx) => (
        <Item
          key={uuidv4()}
          level={getLevel(el)}
          isCurrent={props.currentIndex === idx}
          onClick={onClickItem(idx)}
        >
          {el.substring(getLevel(el))}
        </Item>
      ))}
    </Wrapper>
  );
}
