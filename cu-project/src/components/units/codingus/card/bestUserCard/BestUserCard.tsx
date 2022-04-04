import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import Tag02 from "../../../../commons/Tag/Tag02";
import * as S from "./BestUserCard.Style";
import { v4 as uuidv4 } from "uuid";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
import Color from "../../../../../commons/styles/color";
import { getShortDateString } from "../../../../../commons/libraries/dateUtils";
import { AiFillLike, AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { useRouter } from "next/router";
import { getImagesFromMD, getTextFromMD } from "../../../../../commons/libraries/mdUtils";
import {
  IBlog,
  IQuery,
  IQueryFetchBlogCommentorderbycreateArgs,
  IUser,
} from "../../../../../commons/types/generated/types";
import { useLazyQuery } from "@apollo/client";
import {
  FETCH_BLOG_DATA_COMMON,
  FETCH_BLOG_DATA_LOGGENIN,
} from "./BestUserCard.Queries";
import { useEffect, useState } from "react";
import useStore from "../../../../../commons/store/store";
interface ICodingUsBestUserProps {
  user: IUser;
  blog: IBlog;
}

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  ranking?: number;
  data: ICodingUsBestUserProps;
  onClickBlogItem: (id: string) => () => void;
  onClickLike: (id: string) => () => void;
  onClickFollow: (id: string) => () => void;
}
export default function BestUserCard(props: ICodingUsCardProps) {
  const accessToken = useStore((state) => state.accessToken);
  const router = useRouter();
  //   fetchBlogData
  // fetchBlogData
  const [fetchBlogCommentorderbycreate] = useLazyQuery<
    Pick<IQuery, "fetchBlogCommentorderbycreate">,
    IQueryFetchBlogCommentorderbycreateArgs
  >(FETCH_BLOG_DATA_COMMON);
  const [fetchBloglike] = useLazyQuery<Pick<IQuery, "fetchBloglike">>(
    FETCH_BLOG_DATA_LOGGENIN
  );
  const [commentCnt, setCommentCnt] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const isFollowed = false;

  useEffect(() => {
    try {
      const getCommentCnt = async () => {
        const result = await fetchBlogCommentorderbycreate({
          variables: { blogid: props.data.blog.id },
        });
        setCommentCnt(result.data?.fetchBlogCommentorderbycreate.length ?? 0);
      };
      getCommentCnt();

      if (!accessToken) return;
      const getIsLike = async () => {
        const result = await fetchBloglike();
        const likeList = result.data?.fetchBloglike.filter(
          (el) => el.id === props.data.blog.id
        );
        if (likeList && likeList.length > 0) setIsLiked(true);
      };
      getIsLike();
    } catch (err: any) {
      alert(err.message);
    }
  }, []);

  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "387px"}
      height={props.height ? `${props.height}px` : "570px"}
      onClick={() => {
        router.push("/codingus/blog/main");
      }}
    >
      <S.UserInfoWrapper>
        <S.UserInfo>
          <S.ProfileImage />
          <Blank width="11px" />
          <S.UserDetail>
            <S.NameLabel>
              {props.data.user.nickname}
              <img
                style={{ width: "20px", height: "20px", marginLeft: "6px" }}
                src={`/${props.ranking ?? 1}-place-medal.png`}
              />
            </S.NameLabel>
            <S.StackLabel>
              {props.data.blog?.blogcategorytag[0].tag}
            </S.StackLabel>
          </S.UserDetail>
        </S.UserInfo>
        <S.FollowBtn
          isFollow={isFollowed ?? false}
          onClick={props.onClickFollow(props.data.user.id)}
        >
          {"팔로우"}
        </S.FollowBtn>
      </S.UserInfoWrapper>
      <Blank height="18px" />
      <S.BlogWrapper>
        <S.BlogBody onClick={props.onClickBlogItem(props.data.blog.id)}>
          <S.TagWrapper>
            {props.data.blog.blogtag.map((el) => (
              <div style={{ display: "flex" }} key={uuidv4()}>
                <Tag02 value={el.tag} />
                <Blank width="6px" />
              </div>
            ))}
          </S.TagWrapper>
          <Label01 value={props.data.blog.title} size="18px" weight="700" />
          <Blank height="10px" />
          <S.Contents>{getTextFromMD(props.data.blog.contents)}</S.Contents>
          <Blank height="30px" />
          <S.ImageWrapper>
            <S.Image src={getImagesFromMD(props.data.blog.contents)[0]} />
          </S.ImageWrapper>
        </S.BlogBody>
        <Blank height="15px" />
        <HorizontalLine margin={15} />
        <S.BlogFooter>
          <S.BtnWrapper>
            <S.RowWrapper>
              {isLiked ? (
                <AiOutlineLike
                  style={{ height: "25px", width: "30px" }}
                  onClick={props.onClickLike(props.data.blog.id)}
                />
              ) : (
                <AiFillLike
                  style={{ height: "25px", width: "30px" }}
                  onClick={props.onClickLike(props.data.blog.id)}
                />
              )}
              <Blank width="12px" />
              <Label01
                value={String(props.data.blog.like)}
                size="18px"
                weight="400"
              />
            </S.RowWrapper>
            <Blank width="23px" />
            <S.RowWrapper>
              <AiOutlineComment style={{ height: "25px", width: "30px" }} />
              <Blank width="12px" />
              <Label01 value={String(commentCnt)} size="18px" weight="400" />
            </S.RowWrapper>
          </S.BtnWrapper>
          <Label01
            value={getShortDateString(props.data.blog.createAt)}
            color={Color.medium}
            size="18px"
            weight="400"
          />
        </S.BlogFooter>
      </S.BlogWrapper>
    </S.Wrapper>
  );
}
