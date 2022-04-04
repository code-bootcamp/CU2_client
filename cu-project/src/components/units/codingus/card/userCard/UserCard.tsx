import Label01 from "../../../../commons/Label/Label01";
import * as S from "./UserCard.Style";
import Blank from "../../../../commons/Blank";
import { getTimeDiff } from "../../../../../commons/libraries/dateUtils";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useRouter } from "next/router";

interface ICodingUsCardProps {
  width?: string | number;
  height?: string | number;
  name: string;
  stackList: string[];
  title: string;
  contents: string;
  tags?: string[];
  image: string;
  avatar: string;
  followCount: number;
  commentCount: number;
  isFollowed: boolean;
  createdAt: string;
  place: 1 | 2 | 3;
  id: string;
}

export default function UserCard(props: ICodingUsCardProps) {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  return (
    <S.Wrapper
    width={props.width ? `${props.width}px` : "386px"}
    height={props.height ? `${props.height}px` : "702px"}
    onClick={() =>{router.push("/codingus/blog/detail")}}
    >
      <S.Header>
        <S.UserInfo>
          {props.avatar ? (
            <S.Avatar image={props.avatar}></S.Avatar>
          ) : (
            <S.Avatar></S.Avatar>
          )}
          <Blank width="10px" />
          <S.UserDetail>
            <S.RowWrapper>
              <Label01 value={props.name} size="16px" padding="0px" />
              <Blank width="3px" />
              <img
                src={`/${props.place}-place-medal.png`}
                style={{ width: "19px", height: "19px" }}
              />
            </S.RowWrapper>
            <Blank height="5px" />
            <Label01 value={props.stackList[0]} size="16px" padding="0px" />
          </S.UserDetail>
        </S.UserInfo>
        <S.FollowBtn
          isFollowed={props.isFollowed}
          onClick={() => {
          }}
        >
          팔로우
        </S.FollowBtn>
      </S.Header>
      <Blank height="25px" />
      <S.TagWrapper>
        {props.tags?.map((el, idx) => (
          <div key={idx} style={{ display: "flex" }}>
            <Label01 value={`#${el}`} size="18px" />
            <Blank width="6px" />
          </div>
        ))}
      </S.TagWrapper>
      <S.Body onClick={moveToPage(`/codingus/blog/${props.id}`)}>
        <S.Title>
          <Label01 value={props.title} padding="0px" weight="700" />
        </S.Title>
        <Blank height="18px" />
        <S.Contents>{props.contents}</S.Contents>
        <Blank height="14px" />
        {/* <S.Image src={props.image}></S.Image> */}
        <S.Image></S.Image>
      </S.Body>
      <Blank height="40px" />
      <S.Footer>
        <S.BtnWrapper>
          <S.Icon src="/bookmark.png" />
          <Blank width="12px" />
          <Label01 value={String(props.followCount)} size="18px" />
          <Blank width="22px" />
          <S.Icon src="/comment.png" />
          <Blank width="12px" />
          <Label01 value={String(props.commentCount)} size="18px" />
        </S.BtnWrapper>
        <Label01
          value={getTimeDiff(props.createdAt)}
          size="18px"
          color="#C4C4C4"
        ></Label01>
      </S.Footer>
      <Blank height="20px" />
    </S.Wrapper>
  );
}
