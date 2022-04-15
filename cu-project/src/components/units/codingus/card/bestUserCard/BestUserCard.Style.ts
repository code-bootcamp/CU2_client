import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;
interface ICardWrapperProps {
  width: string;
  height: string;
}
export const Wrapper = styled.div`
  width: ${(props: ICardWrapperProps) => props.width};
  height: ${(props: ICardWrapperProps) => props.height};
  border-radius: 8px;
  background-color: #ffffff;
  /* border: 1px solid #F0F0F0; */
  border: 2px solid #f6f5f5;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  :hover {
    transform: translateY(-10px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  transition: 0.5s;
`;

export const UserInfoWrapper = styled(RowWrapper)`
  justify-content: space-between;
  width: 100%;
`;
export const UserInfo = styled(RowWrapper)``;
export const UserDetail = styled.div``;
export const ProfileImage = styled.img`
  object-fit: contain;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background-color: gray;
  /* padding: 2px; */
`;
export const NoImage = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${Color.medium};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NameLabel = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${Color.dark};
`;
export const StackLabel = styled.div`
  font-size: 16px;
`;
export const FollowBtn = styled.button`
  border: 1px solid #7918f2;
  box-sizing: border-box;
  border-radius: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  padding: 7px 25px 7px 25px;
  background-color: ${(props: { isFollow: boolean }) =>
    props.isFollow ? Color.white : Color.sub};
  color: ${(props: { isFollow: boolean }) =>
    props.isFollow ? Color.sub : Color.white};
`;
export const BlogWrapper = styled.div``;

export const BlogBody = styled.div`
  .div {
    :hover {
      cursor: pointer;
    }
  }
`;

export const TagWrapper = styled(RowWrapper)``;

export const Contents = styled.div`
  height: 96px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.dark};
  overflow: hidden;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 204px;
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  /* width: 347px; */
  max-height: 204px;
  overflow: hidden;
`;

export const BlogFooter = styled(RowWrapper)`
  justify-content: space-between;
`;

export const BtnWrapper = styled(RowWrapper)``;
