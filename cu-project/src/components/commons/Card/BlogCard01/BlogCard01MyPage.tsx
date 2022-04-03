import Label01 from "../../Label/Label01";
import * as S from "./BlogCard01.Style";
import Blank from "../../Blank";
import { getShortDateString } from "../../../../commons/libraries/dateUtils";
import Tag01 from "../../Tag/Tag01";
import HorizontalLine from "../../Line/HorizontalLine";
import { useRouter } from "next/router";
import {
  IBlog,
  IQuery,
  IQueryFetchBlogCommentorderbycreateArgs,
} from "../../../../commons/types/generated/types";
import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getImagesFromMD } from "../../../../commons/libraries/mdUtils";

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  data: IBlog;
}

const FETCH_COMMENT_ORDERBY_LIKE = gql`
  query fetchBlogCommentorderbylike($blogid: String!) {
    fetchBlogCommentorderbylike(blogid: $blogid) {
      id
    }
  }
`;

export default function BlogCard01MyPage(props: ICodingUsCardProps) {
  const router = useRouter();
  const [commentCount, setCommentCount] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [fetchBlogComments] = useLazyQuery<
    Pick<IQuery, "fetchBlogCommentorderbycreate">,
    IQueryFetchBlogCommentorderbycreateArgs
  >(FETCH_COMMENT_ORDERBY_LIKE);
  useEffect(() => {
    const getCommentCount = async (blogId: string) => {
      try {
        const result = await fetchBlogComments({
          variables: { blogid: blogId },
        });

        return result.data?.fetchBlogCommentorderbycreate.length;
      } catch (err: any) {
        return 0;
      }
    };

    if (props.data?.id)
      getCommentCount(props.data?.id).then((cnt) => setCommentCount(cnt || 0));

    const getIsLike = async (blogId: string) => {
      try {
        const result = await fetchBlogComments({
          variables: { blogid: blogId },
        });

        return result.data?.fetchBlogCommentorderbycreate.length;
      } catch (err: any) {
        return 0;
      }
    };

    if (props.data?.id)
      getIsLike(props.data?.id).then((cnt) => setCommentCount(cnt || 0));
  }, []);
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "90%"}
      onClick={() => {
        router.push("/codingus/blog/detail");
      }}
    >
      <S.Image
        src={getImagesFromMD(props.data?.contents)[0] ?? "/CU2_LOGO.png"}
      />
      <S.Body>
        <Blank height="18px" />
        <S.StackWrapper>
          {props.data?.blogcategorytag && (
            <Tag01 value={props.data.blogcategorytag[0].tag} color="main" />
          )}
        </S.StackWrapper>
        <Blank height="16px" />
        <S.Title>{props.data?.title ?? ""}</S.Title>
        <Blank height="8px" />
        <S.Contents>{props.data?.contents}</S.Contents>
      </S.Body>
      <Blank height="18px" />
      <S.RowWrapper style={{ justifyContent: "space-between" }}>
        <S.Writer>{props.data?.user.nickname}</S.Writer>
        <Blank width="23px" />
        <Label01
          value={getShortDateString(String(props.data?.createAt))}
          size="16px"
          color="#C4C4C4"
          padding="0px"
        />
      </S.RowWrapper>
      <HorizontalLine margin={10} />
      <S.RowWrapper>
        <S.GoodBad>
          <img
            style={{ width: "20px", height: "20px" }}
            src={
              props.data.isLike
                ? "/Icon_Unfill_Good.png"
                : "/Icon_Unfill_Good.png"
            }
          />
          <Blank width="10px" />
          <Label01 value={String(props.data?.like)} size="15px" padding="0px" />
          <Blank width="26px" />
          <img
            style={{ width: "20px", height: "20px" }}
            src={"/Icon_Unfill_Comment.png"}
          />
          <Blank width="10px" />
          <Label01 value={String(commentCount)} size="15px" padding="0px" />
        </S.GoodBad>
      </S.RowWrapper>
      <Blank height="15px" />
    </S.Wrapper>
  );
}
