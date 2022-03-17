import styled from "@emotion/styled";
import { Avatar } from "antd";
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  margin: 10px;
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); */
  transform: translateY(0);
  transition: 0.5s;
  background-color: white;
`;
export const CardImage = styled.img`
  max-height: 100%;
  width:100%;
`;
export const CardTitle = styled.div`
  font-weight: bold;
`;
export const CardContent = styled.div`
  font-size: 14px;
`;
export const CardDetaiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #868e96;
  div {
    font-size: 12px;
  }
`;
export const CardDate = styled.div``;
export const CardComment = styled.div``;
export const CardFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 18%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  border-top: 1px solid rgb(248, 249, 250);
  div,
  span {
    font-size: 12px;
  }
  span {
    color: gray;
    margin-right: 5px;
  }
`;
export const CardBodyWrapper = styled.div`
  height: 88%;
  padding: 16px 16px 7px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const CardContentWrapper = styled.div`
  margin-bottom: 24px;
  :hover {
    cursor: pointer;
  }
`;
export const ProfileImage = styled.div``;
export const Writer = styled.div`
  font-weight: bold;
`;
export const LikeToggle = styled.div`
position: absolute;
right: 0;
/* bottom: 0; */
`;
export const CardLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
`;
export const CardProfileWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MyAvatar = styled(Avatar)`
  margin-right: 8px;
`;

export const CardTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
`;
export const CardTag = styled.div`
  font-size: 12px;
  background-color: #00bfc0;
  color: white;
  border-radius: 20px;
  padding: 2px 10px;
  margin-right: 3px;
  display: inline;
  white-space: nowrap;
`;

export const CardBottomWrapper = styled.div`
  width: 100%;
`;


export const CardImageWrapper = styled.div`
  max-height: 40%;
  width: 100%;
`;