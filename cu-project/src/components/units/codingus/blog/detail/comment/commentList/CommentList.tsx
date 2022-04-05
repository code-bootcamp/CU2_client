import * as S from "./style";
import InfiniteScroll from "react-infinite-scroller";
import { ICodingUsCommentsProps } from "../../../../../../../commons/types/types";
import Label01 from "../../../../../../commons/Label/Label01";
import { v4 as uuidv4 } from "uuid";
import { getTimeDiff } from "../../../../../../../commons/libraries/dateUtils";
import Blank from "../../../../../../commons/Blank";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import HorizontalLine from "../../../../../../commons/Line/HorizontalLine";
import Button02 from "../../../../../../commons/Button/Button02";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RestUserPicture } from "../../../../../../commons/Card/rankingCard/rankingCard.Style";
interface IBlogCommentListProps {
  commentList: ICodingUsCommentsProps[];
  onLoadMore: () => void;
  onClickDeleteComment: (id: string) => () => void;
  onClickEditComment: (idx: number) => () => void;
  onClickSubmit: (id: string) => () => void;
  isEdits: boolean[];
}

export default function CommentList(props: IBlogCommentListProps) {
  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true || false}
        useWindow={false}
      >
        {props.commentList.map((el, idx) => (
          <div key={uuidv4()}>
            <S.Comment key={uuidv4()}>
              <S.CommentHeader>
                <S.UserInfo>
                <RestUserPicture>
          <BsFillPersonFill style={{width: "40px", height: "40px"}}/>
        </RestUserPicture>
                  <Blank width="20px" />
                  <S.UserDetail>
                    <Label01 value={el.user.name} size="16px" />
                    <Blank height="5px" />
                    <Label01 value={getTimeDiff(el.cretedAt)} size="16px" />
                  </S.UserDetail>
                </S.UserInfo>
                <S.ButtonWrapper>
                  <S.LikeButton>
                    {el.isLiked ? (
                      <AiFillLike style={{ marginRight: "10px" }} />
                    ) : (
                      <AiOutlineLike style={{ marginRight: "10px" }} />
                    )}
                    {el.likeCnt}
                  </S.LikeButton>
                  <Blank height="5px" />x
                 {el.user.name ==="김재민" && <S.MyButtonWrapper>
                    <S.MyButton
                      isMyComment={true}
                      onClick={props.onClickEditComment(idx)}
                    >
                      수정
                    </S.MyButton>
                    <Blank width="8px" />
                    <S.MyButton
                      isMyComment={true}
                      onClick={props.onClickDeleteComment(el.id)}
                    >
                      삭제
                    </S.MyButton>
                  </S.MyButtonWrapper>}
                </S.ButtonWrapper>
              </S.CommentHeader>
              <Blank height="20px" />
              <S.CommentBody>
                {props.isEdits[idx] ? (
                  <S.CommentInputWrapper>
                    <S.CommentInput />
                    <Button02
                      value="수정"
                      onClick={props.onClickSubmit(el.id)}
                    />
                  </S.CommentInputWrapper>
                ) : (
                  <S.Contents>{el.contents}</S.Contents>
                )}
              </S.CommentBody>
            </S.Comment>
            <HorizontalLine margin={5} />
          </div>
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
