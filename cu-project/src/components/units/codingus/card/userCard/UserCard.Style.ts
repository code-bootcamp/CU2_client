import styled from "@emotion/styled";

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
  height: : ${(props: ICardWrapperProps) => props.height};
  border-radius: 8px;
  background-color: #FBFBFB;
`;
export const Header = styled(RowWrapper)`
  padding: 15px 20px 0px 15px;
  width: 100%;
  justify-content: space-between;
`;
export const UserInfo = styled(RowWrapper)``;
interface IAvatarProps {
  image?: string;
}
export const Avatar = styled.div`
  background-color: #c4c4c4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-image: ${(props: IAvatarProps) =>
    props.image ? props.image : "none"};
`;
export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;

interface IFollowBtnProps {
  isFollowed?: boolean;
}
export const FollowBtn = styled.button`
  padding: 8px 33px;
  background-color: ${(props: IFollowBtnProps) =>
    props.isFollowed ? "#222222" : "#FFFFFF"};
  color: ${(props: IFollowBtnProps) =>
    props.isFollowed ? "#FFFFFF" : "#222222"};
  border-radius: 50px;
  font-size: 14px;

  :hover {
    cursor: pointer;
  }
`;
export const Title = styled.div``;
export const TagWrapper = styled(RowWrapper)`
  padding: 0px 20px;
`;
export const Body = styled.div`
  padding: 0px 20px;
  :hover {
    cursor: pointer;
  }
`;
export const Contents = styled.div`
  line-height: 30px;
  font-size: 18px;
`;
export const Image = styled.div`
  widows: 357px;
  height: 204px;
  background-color: #bdbdbd;
`;

export const Footer = styled(RowWrapper)`
  padding: 0px 20px;
  justify-content: space-between;
`;

export const Icon = styled.img`
  :hover {
    cursor: pointer;
  }
`;
export const BtnWrapper = styled(RowWrapper)``;
