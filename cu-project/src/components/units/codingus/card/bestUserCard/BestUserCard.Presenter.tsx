import { AiFillLike, AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import { getShortDateString } from "../../../../../commons/libraries/dateUtils";
import { getImagesFromMD, getTextFromMD } from "../../../../../commons/libraries/mdUtils";
import Color from "../../../../../commons/styles/color";
import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
import Tag02 from "../../../../commons/Tag/Tag02";
import * as S from "./BestUserCard.Style"
import { v4 as uuidv4 } from "uuid";
import { IBlogTag } from "../../../../../commons/types/generated/types";
export default function BestUserCardUI (props: any) {
    
    return  (
        <S.Wrapper
          width={props.width ? `${props.width}px` : "387px"}
          height={props.height ? `${props.height}px` : "570px"}
          onClick={() => {
            // router.push("/codingus/blog/main");
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
              isFollow={props.isFollowed ?? false}
              onClick={props.onClickBestUserFollow(props.data.user.id)}
            >
              {"팔로우"}
            </S.FollowBtn>
          </S.UserInfoWrapper>
          <Blank height="18px" />
          <S.BlogWrapper>
            {/* <S.BlogBody onClick={props.onClickBlogItem(props.data.blog.id)}> */}
            <S.BlogBody>
              <S.TagWrapper>
                {props.data?.blog?.blogtag?.map((el: IBlogTag) => (
                  <div style={{ display: "flex" }} key={uuidv4()}>
                    <Tag02 value={el.tag} />
                    <Blank width="6px" />
                  </div>
                ))}
              </S.TagWrapper>
              <Label01
                value={props.data.blog.title}
                size="18px"
                weight="700"
                onClick={props.moveToPage}
              />
              <Blank height="10px" />
              <S.Contents onClick={props.moveToPage}>
                {getTextFromMD(props.data.blog.contents)}
              </S.Contents>
              <Blank height="30px" />
              <S.ImageWrapper>
                <S.Image
                  src={getImagesFromMD(props.data.blog.contents)[0]}
                  onClick={props.moveToPage}
                />
              </S.ImageWrapper>
            </S.BlogBody>
            <Blank height="15px" />
            <HorizontalLine margin={15} />
            <S.BlogFooter>
              <S.BtnWrapper>
                <S.RowWrapper>
                  {props.isLiked ? (
                    <AiOutlineLike
                      style={{ height: "25px", width: "30px" }}
                      // onClick={props.onClickLike(props.data.blog.id)}
                    />
                  ) : (
                    <AiFillLike
                      style={{ height: "25px", width: "30px" }}
                      // onClick={props.onClickLike(props.data.blog.id)}
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
                  <Label01 value={String(props.commentCnt)} size="18px" weight="400" />
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
      );;
}