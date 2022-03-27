import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import Tag02 from "../../../../commons/Tag/Tag02";
import * as S from "./BestUserCard.Style";
import { v4 as uuidv4 } from "uuid";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
import Color from "../../../../../commons/styles/color";
import { getShortDateString } from "../../../../../commons/libraries/dateUtils";
import { AiFillLike, AiOutlineLike, AiOutlineComment } from "react-icons/ai";
interface ICodingUsBestUserProps {
  userInfo: {
    id: string;
    image: string;
    name: string;
    stack: string;
    ranking: number;
    iFollowed: boolean;
  };
  latestBlogItem: {
    id: string;
    tags: string[];
    title: string;
    contents: string;
    images: string[];
    likeCnt: number;
    commentCnt: number;
    iLiked: boolean;
    createdAt: string;
  };
}

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  data: ICodingUsBestUserProps;
  onClickBlogItem: (id: string) => () => void;
  onClickLike: (id: string) => () => void;
  onClickFollow: (id: string) => () => void;
}
export default function BlogMainCard(props: ICodingUsCardProps) {
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "387px"}
      height={props.height ? `${props.height}px` : "570px"}
    >
      <S.UserInfoWrapper>
        <S.UserInfo>
          <S.ProfileImage src={props.data.userInfo.image} />
          <Blank width="11px" />
          <S.UserDetail>
            <S.NameLabel>
              {props.data.userInfo.name}
              <img
                style={{ width: "20px", height: "20px", marginLeft: "6px" }}
                src={`/${props.data.userInfo.ranking}-place-medal.png`}
              />
            </S.NameLabel>
            <S.StackLabel>{props.data.userInfo.stack}</S.StackLabel>
          </S.UserDetail>
        </S.UserInfo>
        <S.FollowBtn
          isFollow={props.data.userInfo.iFollowed}
          onClick={props.onClickFollow(props.data.userInfo.id)}
        >
          {"팔로우"}
        </S.FollowBtn>
      </S.UserInfoWrapper>
      <Blank height="18px" />
      <S.BlogWrapper>
        <S.BlogBody
          onClick={props.onClickBlogItem(props.data.latestBlogItem.id)}
        >
          <S.TagWrapper>
            {props.data.latestBlogItem.tags.map((el) => (
              <div style={{ display: "flex" }} key={uuidv4()}>
                <Tag02 value={el} />
                <Blank width="6px" />
              </div>
            ))}
          </S.TagWrapper>
          <Label01
            value={props.data.latestBlogItem.title}
            size="18px"
            weight="700"
          />
          <Blank height="10px" />
          <S.Contents>{props.data.latestBlogItem.contents}</S.Contents>
          <Blank height="30px" />
          <S.ImageWrapper>
            <S.Image src={props.data.latestBlogItem.images[0]} />
          </S.ImageWrapper>
        </S.BlogBody>
        <Blank height="15px" />
        <HorizontalLine margin={15} />
        <S.BlogFooter>
          <S.BtnWrapper>
            <S.RowWrapper>
              {props.data.latestBlogItem.iLiked ? (
                <AiOutlineLike
                  style={{ height: "25px", width: "30px" }}
                  onClick={props.onClickLike(props.data.latestBlogItem.id)}
                />
              ) : (
                <AiFillLike
                  style={{ height: "25px", width: "30px" }}
                  onClick={props.onClickLike(props.data.latestBlogItem.id)}
                />
              )}
              <Blank width="12px" />
              <Label01
                value={String(props.data.latestBlogItem.likeCnt)}
                size="18px"
                weight="400"
              />
            </S.RowWrapper>
            <Blank width="23px" />
            <S.RowWrapper>
              <AiOutlineComment style={{ height: "25px", width: "30px" }} />
              <Blank width="12px" />
              <Label01
                value={String(props.data.latestBlogItem.commentCnt)}
                size="18px"
                weight="400"
              />
            </S.RowWrapper>
          </S.BtnWrapper>
          <Label01
            value={getShortDateString(props.data.latestBlogItem.createdAt)}
            color={Color.medium}
            size="18px"
            weight="400"
          />
        </S.BlogFooter>
      </S.BlogWrapper>
    </S.Wrapper>
  );
}
