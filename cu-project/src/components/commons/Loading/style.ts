import styled from "@emotion/styled";

export const Line = styled.div`
  height: 6px;
  background-color: #eaeaea;
  margin-top: 33px;
`;
export const GoBackContainer = styled.div`
  cursor: pointer;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AD = styled.div`
  height: -webkit-fill-available;
  margin: 40px;
`;
export const SideBarContainer = styled.div`
  cursor: pointer;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  & > p {
  }
`;
export const MpHeading = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #8c0729;
  margin: 0px;
  & > p {
    line-height: 2.1;
  }
`;

export const MhContainer = styled.div`
  position: fixed;
  top: 0;
  background: white;
  max-width: 500px;
  width: 100%;
  padding-bottom: px;
  margin-bottom: 4px;
`;
export const Sidebarbox = styled.div`
  width: 50%;

  display: flex;
  justify-content: flex-end;
  margin-right: 34px;
  color: #8c0729;

  & > svg {
    font-size: 42px;
  }
`;
export const SidebarImg = styled.img`
  height: 20px;
  margin-bottom: 4px;
`;
export const MhHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 20px;
  padding-top: 40px;
  padding-bottom: 20px;
  margin-bottom: 4px;

  background: white;
`;
export const HeaderContainer = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  z-index: 2;

  top: 0;
  background: white;
  max-width: 450px;
  padding-bottom: 5px;
`;
export const HeaderBox = styled.div`
  position: sticky;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 26px;
`;

// 여러 줄의 CSS 코드를 조건부로 보여주고 싶다면 css 를 사용.
// props에 컬러가 있으면 해당 컬러, 없으면 black
// 왜 2번째 줄은 안먹지??
export const Season = styled.div`
  & > p {
    font-size: 12px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #8b0028;

    cursor: pointer;
  }
  & > p:hover {
    text-decoration: underline;
  }
  width: 90%;
  margin-left: 34px;
`;

// &는 자기자신을 뜻함.
export const GoLogin = styled.div`
  margin-left: 20px;
  display: flex;
  & > p:hover {
    text-decoration: underline;
  }
  & > p {
    cursor: pointer;
    margin: 0px;
    margin-left: 4px;
    color: #8c0729;
    text-align: center;
    display: flex;
    justify-content: center;
    height: 24px;
    font-size: 12px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    text-decoration: underline;
    align-items: center;
  }
`;

export const MnContainer = styled.div`
  background: skyblue;
`;
export const MnHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const MnTopTextBox = styled.div`
  & > p {
    margin: 0px;
    font-size: 16px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: 0.16px;
    text-align: left;
    color: #4f4f4f;
  }
`;
export const MnTopText = styled.p`
  color: blue;
`;
export const GoList = styled.div`
  align-self: center;
  & > p {
    margin: 0px;
    color: blue;
    font-size: 0.8rem;
  }
`;
export const MnSection = styled.div`
  background: pink;
`;
export const MnPostBox = styled.div``;
export const MnPostTitle = styled.p``;

export const MsContainer = styled.div`
  background: green;
`;
export const MsHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const MsTopTextBox = styled.div`
  & > p {
    margin: 0px;
    color: red;
    font-size: 1.5rem;
  }
`;
export const MsTopText = styled.p`
  color: blue;
`;
export const MsSection = styled.div`
  background: pink;
`;
export const MsPostBox = styled.div``;
export const MsPostTitle = styled.p``;

export const LoadingContaniner = styled.div`
  background-color: white;
  text-align: center;
  position: absolute;
  top: 0;
  width: -webkit-fill-available;
  max-width: 450px;
  height: 100vh;
  padding-top: 150px;
  z-index: 9;
  & > p {
    color: #cccccc;
    font-size: 1.5rem;
    font-weight: 700;
    @media only screen and (min-width: 400px) {
      font-size: 2rem;
    }
  }
`;
export const Loading = styled.img`
  width: 160px;
  @media only screen and (min-width: 400px) {
    width: 180px;
  }
`;
export const LoadingText = styled.div`
  margin-top: 50px;
  color: #707070;
  font-size: 16px;
  line-height: 1.5;
  span {
    color: ${(props) => props.color || "#707070"};
  }
  @media only screen and (min-width: 400px) {
    font-size: 1.3rem;
  }
`;

export const Support = styled.div`
  cursor: pointer;
`;
export const Logout = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 70px;
  left: 26px;
  font-size: 14px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.22px;
  text-align: left;
  color: #4f4f4f;
  p {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const ListItem = styled.div`
  p {
    margin-left: 25px;
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.22px;
    text-align: left;
    color: #4f4f4f;
  }
  margin-top: 8px;
  margin-bottom: 8px;
  color: black;
`;
export const UserCheckBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 68px;
  margin-left: 22px;
  margin-right: 15px;
  padding: 10px 8px;
  img {
    margin: 0px 4px;
    height: 16px;
  }
  p {
    font-size: 11px;
    color: #4f4f4f;
    font-weight: 700;
  }
  p > span {
    margin: 0 8px;
    font-size: 11px;
    text-decoration: none;
  }
  border-radius: 50px 50px 0px 50px;
  border: 0px solid black;
  box-shadow: 0 3px 20px 0 rgb(139 1 40 / 20%);
  font-weight: 700;
  span {
    text-decoration: underline;
  }
`;
export const UserBox = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;

  display: flex;
  p {
    align-self: center;
    font-size: 16px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    text-align: left;
    color: #8b0028;
  }
  span {
    text-decoration: underline;
    font-weight: 700;
  }
  & > img {
    height: 80px;
    width: 80px;
    margin-right: 10px;
  }
`;
export const LoginBox = styled.div`
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 3px 15px 0 rgb(0 0 0 / 16%);
  line-height: 1.5;
  padding: 15px 0px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 78px;
  margin-bottom: 40px;
  color: #8b0328;
  font-weight: 700;
  font-size: 16px;
  font-stretch: normal;
  letter-spacing: -0.2px;

  img {
    width: 50px;
  }
`;

export const AdBox = styled.div`
  ins.adsbygoogle[data-ad-status="unfilled"] {
    display: none !important;
  }
  height: ${(props) => props.sidebar && "50px"};
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const AdClickBox = styled.div`
  a {
    padding: 0;
  }
  padding: 0;
  padding-bottom: 100px;
  margin: 0;
  text-align: center;
`;

export const SbAdContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0;
  margin-bottom: 0;
  height: 50px;
`;

// filter select
export const ShFilterWrapper = styled.div`
  align-self: center;
  svg {
    font-size: 20px;
    color: #767676;
  }
  @media only screen and (max-width: 365px) {
    width: 30%;
    svg {
      font-size: 12px;
    }
  }
`;

export const ShFilter = styled.select`
  width: 80px;
  border: none;
  -webkit-appearance: none;
  background: url("https://sugangalimi-2021-1.s3.ap-northeast-2.amazonaws.com/icon/filter.svg")
    no-repeat 100%;
  font-size: 0.8rem;
  padding-left: 8px;
  color: #4f4f4f;
  @media only screen and (max-width: 365px) {
    width: 60px;
    font-size: 0.5rem;
  }
`;

// Footer
export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 65px;
  box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  max-width: 450px;
  bottom: 0;
  margin: 57px 0 0;
  background: white;
  min-width: 275px;
  a {
    width: 5rem;
    font-weight: 500;
    margin-top: 5px;
  }
`;

export const FooterIcon = styled.div`
  justify-content: space-around;
  align-items: center;
  color: ${(props) => (props.active === true ? "#C02E2E" : "#BDBDBD")};
  & {
    text-align: center;
  }
  & > p {
    font-size: 0.8rem;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
  }
  & > svg {
    font-size: 1.7rem;
  }
`;

// loading Page Style
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ErrorText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 100%;
  color: #cfcfcf;
`;
export const ErrorSubText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  margin-top: 10px;
  color: #cfcfcf;
`;
export const GoMainBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  background: #c02e2e;
  border-radius: 10px;
  margin-top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #fafafa;
`;

// Aside
export const AsideWrapper = styled.div`
  width: 420px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ApMain = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-height: 700px) {
    height: 170px;
  }
  @media only screen and (max-height: 480px) {
    height: 65px;
    width: 400px;
    flex-direction: row;
    align-items: center;
  }
`;

export const ApLogoBox = styled.div`
  width: 100px;
  height: 91px;
  background-image: url(${(props) => props.logo});
  background-size: contain;
  @media only screen and (max-height: 480px) {
    width: 80px;
    height: 72px;
  }
`;

export const ApMainTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 65px;
  color: black;
`;

export const ApMainSubtitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #484848;
  @media only screen and (max-height: 700px) {
    display: none;
  }
`;

export const ApSub = styled.div`
  width: 396px;
  height: 200px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(171, 90, 90, 0.05);
  backdrop-filter: blur(100px);
  /* Note: backdrop-filter has minimal browser support */
  position: fixed;
  bottom: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media only screen and (max-height: 530px) {
    height: 160px;
  }
  @media only screen and (max-height: 375px) {
    display: none;
  }
`;

export const ApSubBoldTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  padding-bottom: 10px;
  color: #484848;
  @media only screen and (max-height: 530px) {
    font-size: 16px;
  }
`;

export const ApSubNormalTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #484848;
  @media only screen and (max-height: 530px) {
    font-size: 16px;
  }
`;

export const LinkBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  margin-top: 40px;
  width: 250px;
  height: 50px;
  background: #000000;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;
  @media only screen and (max-height: 530px) {
    margin-top: 20px;
    height: 40px;
  }
`;

// CheckLogin
export const CheckLoginBox = styled.div`
  animation: fadeIn 0.5s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 3;
      transform: none;
    }
  }
  width: 100%;
  height: 138px;
  background-color: #f7f7f7;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
  margin-top: 15px;
`;

export const CheckText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const TryLoginText = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.3rem;
  color: #000000;
`;
export const TryLogin = styled.div`
  width: 120px;
  height: 30px;
  background-color: #484848;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CheckImage = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #dedede;
`;

// GoLoginPage
export const GlpCheckLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: 500px;
  height: calc(100% - 141px);

  & > div {
    height: calc(100% - 141px);
    padding-bottom: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.5s ease-in-out;
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 3;
        transform: none;
      }
    }
  }

  & > div > pre {
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 150%;
    text-align: center;
    color: #000000;
    margin-bottom: 1.5rem;
    @media only screen and (max-width: 310px) {
      font-size: 0.8rem;
    }
  }
`;

export const GlpLockIcon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  svg {
    font-size: 4.5rem;
    color: #484848;
  }
`;

export const GlpCheckLoginButton = styled.div`
  width: 96px;
  height: 30px;
  background-color: #484848;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    height: 30px;
    line-height: 100%;
    color: #ffffff;
  }
`;

// CopyModal
export const CmBackdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
`;

export const CmModalContainer = styled.div`
  animation: fadeIn 0.4s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 3;
      transform: none;
    }
  }
  max-width: 382px;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: fixed;
  top: 35%;
  background: white;
  border-radius: 10px;
`;

export const CmModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 10px 0;
  width: 90%;
  border-bottom: 1px solid #828282;
  padding-bottom: 10px;
  & > svg {
    font-size: 23px;
    cursor: pointer;
  }
  & > p {
    font-weight: 700;
    font-size: 1rem;
    padding-right: 7rem;
  }
`;

export const CmModalContent = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  width: 90%;
`;

export const CmLinkTextarea = styled.textarea`
  width: 240px;
  height: 50px;
  resize: none;
  padding: 10px;
  border-radius: 10px;
  border: 1.5px solid black;
`;

export const CmCopyButton = styled.button`
  width: 50px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: black;
  color: white;
`;
