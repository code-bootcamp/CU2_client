import styled from "@emotion/styled";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
interface IBlogDetailIndexProps {
  index: string[];
}

export const Wrapper = styled.div`
  border-left: 2px solid #333333;
  height: fit-content;
  margin: 200px 0px 0px 50px;
  position: sticky;
  top: 15%;
`;
export const Item = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin: ${(props: { level: number }) => `0px 0px 0px ${props.level * 10}px`};
`;
export default function BlogDetailIndex(props: IBlogDetailIndexProps) {
  const getLevel = (el: string) => {
    return el.startsWith("###") ? 3 : el.startsWith("##") ? 2 : 1;
  };

  return (
    <Wrapper>
      {props.index.map((el,idx) => (
        <Item id={`tg${idx}`} key={uuidv4()} level={getLevel(el)}>
          {el.substring(getLevel(el))}
        </Item>
      ))}
    </Wrapper>
  );
}
