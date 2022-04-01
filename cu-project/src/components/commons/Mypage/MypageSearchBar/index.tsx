import styled from "@emotion/styled";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Color from "../../../../commons/styles/color";
import { breakPoints } from "../../../../commons/styles/media";
import Blank from "../../Blank";

interface IProps {
  isRecently?: boolean;
  isHot?: boolean;
}

const BlogHeaderRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.tablet && breakPoints.mobile} {
    justify-content: center;
  }
`;

const FilterBox = styled.div`
  @media ${breakPoints.tablet && breakPoints.mobile} {
    margin-right: 10px;
  }
`;

const Filter = styled.span`
  color: ${(props: IProps) =>
    props.isRecently ? Color.main : props.isHot ? Color.main : "default"};
  :hover {
    cursor: pointer;
    color: ${Color.main};
  }
`;

const Web = styled.div`
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media ${breakPoints.tablet && breakPoints.mobile} {
    display: contents;
  }
`;

const SearchBar = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  & input {
    width: 90%;
    border: none;
    font-size: 12px;
    @media ${breakPoints.mobile} {
      display: none;
    }
  }
`;

export function MyPageSearchBar() {
  const [isRecently, setIsRecently] = useState(true);
  const [isHot, setIsHot] = useState(false);

  const onClickSelect = () => {
    setIsRecently((prev) => !prev);
    setIsHot((prev) => !prev);
  };

  const onClickAlert = () => {
    alert("모바일");
  };

  return (
    <BlogHeaderRight>
      <FilterBox>
        <Filter onClick={onClickSelect} isRecently={isRecently}>
          최신순
        </Filter>{" "}
        |{" "}
        <Filter onClick={onClickSelect} isHot={isHot}>
          인기순
        </Filter>
      </FilterBox>
      <SearchBar>
        <Web>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <BsSearch size={12} />
        </Web>
        <Mobile>
          <BsSearch onClick={onClickAlert} />
        </Mobile>
      </SearchBar>
    </BlogHeaderRight>
  );
}

export function CoachingSearchBar() {
  const [isRecently, setIsRecently] = useState(true);
  const [isHot, setIsHot] = useState(false);

  const onClickSelect = () => {
    setIsRecently((prev) => !prev);
    setIsHot((prev) => !prev);
  };
  const onClickAlert = () => {
    alert("모바일");
  };

  return (
    <BlogHeaderRight>
      <FilterBox>
        <Filter onClick={onClickSelect} isRecently={isRecently}>
          답변대기
        </Filter>{" "}
        |{" "}
        <Filter onClick={onClickSelect} isHot={isHot}>
          답변완료
        </Filter>
      </FilterBox>
      <SearchBar>
        <Web>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <BsSearch size={12} />
        </Web>
        <Mobile>
          <BsSearch onClick={onClickAlert} />
        </Mobile>
      </SearchBar>
    </BlogHeaderRight>
  );
}
