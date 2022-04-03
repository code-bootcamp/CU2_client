import Label01 from "../../Label/Label01";
import * as S from "./BlogCard01.Style";
import Blank from "../../Blank";
import { getShortDateString } from "../../../../commons/libraries/dateUtils";
import Tag01 from "../../Tag/Tag01";
import HorizontalLine from "../../Line/HorizontalLine";
import { useRouter } from "next/router";
import {
  IBlog,
  IMutation,
  IMutationBlogliketoggleArgs,
  IQuery,
  IQueryFetchBlogCommentorderbycreateArgs,
} from "../../../../commons/types/generated/types";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { getImagesFromMD } from "../../../../commons/libraries/mdUtils";
import { AiFillLike, AiOutlineLike, AiOutlineComment } from "react-icons/ai";
interface ICodingUsCardProps {
  width?: number;
  height?: number;
  data: IBlog;
  isLike?: boolean;
}

const FETCH_COMMENT_ORDERBY_LIKE = gql`
  query fetchBlogCommentorderbylike($blogid: String!) {
    fetchBlogCommentorderbylike(blogid: $blogid) {
      id
    }
  }
`;

const BLOG_LIKE_TOGGLE = gql`
  mutation Blogliketoggle($blogid: String!) {
    Blogliketoggle(blogid: $blogid) {
      islike
    }
  }
`;

export default function BlogCard01(props: ICodingUsCardProps) {
  const router = useRouter();
  const [commentCount, setCommentCount] = useState(0);
  const [likeInfo, setLikeInfo] = useState<{
    isLike: boolean;
    likeCnt: number;
  }>({ isLike: false, likeCnt: 0 });
  const [fetchBlogComments] = useLazyQuery<
    Pick<IQuery, "fetchBlogCommentorderbycreate">,
    IQueryFetchBlogCommentorderbycreateArgs
  >(FETCH_COMMENT_ORDERBY_LIKE);
  const [blogLikeToggle] = useMutation<
    Pick<IMutation, "Blogliketoggle">,
    IMutationBlogliketoggleArgs
  >(BLOG_LIKE_TOGGLE);

  useEffect(() => {
    setLikeInfo({
      isLike: props.isLike || false,
      likeCnt: props.data?.like || 0,
    });
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
  }, []);

  const onClickLikeBtn = async () => {
    try {
      const result = await blogLikeToggle({
        variables: { blogid: props.data?.id },
      });
      console.log(result);
      const isLike = result.data?.Blogliketoggle?.islike;
      setLikeInfo((prev) => {
        return {
          isLike: isLike || false,
          likeCnt: isLike ? prev.likeCnt + 1 : prev.likeCnt - 1,
        };
      });
      if (!result) return;
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "285px"}
      height={props.height ? `${props.height}px` : "440px"}
    >
      <S.Image
        src={getImagesFromMD(props.data?.contents)[0] ?? "/CU2_LOGO.png"}
        onClick={() => {
          router.push(`/codingus/blog/${props.data.id}`);
        }}
      />
      <S.Body>
        <Blank height="18px" />
        <S.StackWrapper>
          {props.data?.blogcategorytag && (
            <Tag01 value={props.data.blogcategorytag[0].tag} color="main" />
          )}
        </S.StackWrapper>
        <Blank height="16px" />
        <S.Title
          onClick={() => {
            router.push(`/codingus/blog/${props.data.id}`);
          }}
        >
          {props.data?.title ?? ""}
        </S.Title>
        <Blank height="8px" />
        <S.Contents
          onClick={() => {
            router.push(`/codingus/blog/${props.data.id}`);
          }}
        >
          {props.data?.contents}
        </S.Contents>
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
          {likeInfo.isLike ? 
        <AiFillLike style={{width: "25px", height: "25px"}}onClick={onClickLikeBtn}/>
        :
        <AiOutlineLike style={{width: "25px", height: "25px"}}onClick={onClickLikeBtn}/>
        }
          <Blank width="10px" />
          <Label01 value={String(likeInfo.likeCnt)} size="15px" padding="0px" />
          <Blank width="26px" />
          <AiOutlineComment
            style={{ width: "20px", height: "20px" }}
          />
          <Blank width="10px" />
          <Label01 value={String(commentCount)} size="15px" padding="0px" />
        </S.GoodBad>
      </S.RowWrapper>
      <Blank height="15px" />
    </S.Wrapper>
  );
}
