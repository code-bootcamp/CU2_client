import styled from "@emotion/styled";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Color from "../../../../commons/styles/color";
import Blank from "../../Blank";

interface IProps {
  isRecently?: boolean;
  isHot?: boolean;
}

const BlogHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const Filter = styled.span`
  color: ${(props: IProps) =>
    props.isRecently ? Color.main : props.isHot ? Color.main : "default"};
  :hover {
    cursor: pointer;
    color: ${Color.main};
  }
`;

const SearchBar = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  & input {
    border: none;
  }
`;

export default function MyPageSearchBar() {
  const [isRecently, setIsRecently] = useState(true);
  const [isHot, setIsHot] = useState(false);

  const onClickSelect = () => {
    setIsRecently((prev) => !prev);
    setIsHot((prev) => !prev);
  };

  return (
    <BlogHeaderRight>
      <SearchBar>
        <input type="text" placeholder="검색어를 입력해주세요" />
        <BsSearch />
      </SearchBar>
      <Blank width="20px"></Blank>
      <div>
        <Filter onClick={onClickSelect} isRecently={isRecently}>
          최신순
        </Filter>{" "}
        |{" "}
        <Filter onClick={onClickSelect} isHot={isHot}>
          인기순
        </Filter>
      </div>
    </BlogHeaderRight>
  );
}
