import * as S from "./style";
import InfiniteScroll from "react-infinite-scroller";
import { ICodingUsCommentsProps } from "../../../../../../../commons/types/types";
import Label01 from "../../../../../../commons/Label/Label01";
import { v4 as uuidv4 } from "uuid";
import { getTimeDiff } from "../../../../../../../commons/libraries/dateUtils";
import Blank from "../../../../../../commons/Blank";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import HorizontalLine from "../../../../../../commons/Line/HorizontalLine";
interface IBlogCommentListProps {
  commentList: ICodingUsCommentsProps[];
  onLoadMore: () => void;
  onClickDeleteComment: (id: string) => () => void;
  onClickEditComment: (id: string) => () => void;
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
        {props.commentList.map((el) => (
          <div key={uuidv4()}>
            <S.Comment key={uuidv4()}>
              <S.CommentHeader>
                <S.UserInfo>
                  <S.UserImage src={el.user.image ?? ""} />
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
                  <Blank height="5px" />
                  <S.MyButtonWrapper>
                    <S.MyButton isMyComment={true}>수정</S.MyButton>
                    <Blank width="8px" />
                    <S.MyButton isMyComment={true}>삭제</S.MyButton>
                  </S.MyButtonWrapper>
                </S.ButtonWrapper>
              </S.CommentHeader>
              <Blank height="20px" />
              <S.CommentBody>
                <S.Contents>{el.contents}</S.Contents>
              </S.CommentBody>
            </S.Comment>
            <HorizontalLine margin={5} />
          </div>
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
