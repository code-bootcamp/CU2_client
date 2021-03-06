import React, { Dispatch, SetStateAction } from "react";
import { getDateString } from "../../../../../commons/libraries/dateUtils";
import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import Tag03 from "../../../../commons/Tag/Tag03";
import TextViewer01 from "../../../../commons/TextViewer/TextViewer01";
import BlogDetailIndex from "../../../codingus/blog/detail/index/BlogDetailIndex";
import CoachingUsCoachCard from "../../profile/CoachingUsCoachCard";
import CoachingUsSidebar from "../../sidebar/CoachingUsSidebar.Container";
import { v4 as uuidv4 } from "uuid";

import * as S from "./Columns.Style";
interface ICodingUsBlogDetailUIProps {
  width?: string | number;
  height?: string | number;
  contents: string;
  title: string;
  writer: string;
  createdAt: string;
  isPicked?: boolean;
  onClickDelete: () => void;
  onClickUpdate: () => void;
  index: string[];
  currentIndex: number;
  indexPositions?: number[];
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export default function ColumnUI(props: ICodingUsBlogDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CoachSidebar>
        <CoachingUsCoachCard />
        <Blank height="50px" />
        <S.AddSideBar>
          <CoachingUsSidebar />
        </S.AddSideBar>
        <Blank height="50px" />
      </S.CoachSidebar>

      <S.ColumnBody>
        <S.BlogDetailLayout>
          <S.BlogDetailBody>
            <S.RowWrapper style={{ justifyContent: "space-between" }}>
              <S.Title>{props.title}</S.Title>
            </S.RowWrapper>
            <Blank height="22px" />
            <S.RowWrapper style={{ justifyContent: "space-between" }}>
              <S.RowWrapper>
                <Label01 value={props.writer} size="16px" />
                <Blank width="8px" />
                <Label01
                  value={getDateString(props.createdAt, ".")}
                  size="16px"
                />
              </S.RowWrapper>
              {props.myLoginUserId === props.userId && (
                <S.RowWrapper>
                  <S.BtnLabel
                    onClick={() =>
                      props.router.push(
                        `/coachingus/coaches/${props.userId}/columns/${props.columnId}/edit`
                      )
                    }
                  >
                    ??????
                  </S.BtnLabel>
                  <Blank width="8px" />
                  <S.BtnLabel onClick={props.deleteColumnBtn}>??????</S.BtnLabel>
                </S.RowWrapper>
              )}
            </S.RowWrapper>
            <Blank height="12px" />

            <Blank height="55px" />
            <TextViewer01
              width={"100%"}
              height={"100%"}
              value={props.contents}
            />
          </S.BlogDetailBody>
          <S.RightIndex>
            <BlogDetailIndex
              index={props.index}
              currentIndex={props.currentIndex}
              indexPositions={props.indexPositions}
              setCurrentIndex={props.setCurrentIndex}
            />
          </S.RightIndex>
        </S.BlogDetailLayout>
      </S.ColumnBody>
    </S.Wrapper>
  );
}
