import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "cu2FontFamily";
  }
  // Apple SD Gothic Neo
  @font-face {
    font-family: "cu2FontFamily";
    font-weight: 100;
    src: local("Apple SD Gothic Neo Thin"),
      url("/fonts/AppleSDGothicNeo/100_AppleSDGothicNeo-Thin.woff2")
        format("woff2"),
      url("/fonts/AppleSDGothicNeo/100_AppleSDGothicNeo-Thin.otf")
        format("opentype");
    unicode-range: U+0030-0039, U+AC00- U+D7A3;
  }

  @font-face {
    font-family: "cu2FontFamily";
    font-weight: 200;
    src: local("Apple SD Gothic Neo UltraLight"),
      url("/fonts/AppleSDGothicNeo/200_AppleSDGothicNeo-UltraLight.woff2")
        format("woff2"),
      url("/fonts/AppleSDGothicNeo/200_AppleSDGothicNeo-UltraLight.otf")
        format("opentype");
    unicode-range: U+0030-0039, U+AC00- U+D7A3;
  }

  @font-face {
    font-family: "cu2FontFamily";
    font-weight: 300;
    src: local("Apple SD Gothic Neo Light"),
      url("/fonts/AppleSDGothicNeo/300_AppleSDGothicNeo-Light.woff2")
        format("woff2"),
      url("/fonts/AppleSDGothicNeo/300_AppleSDGothicNeo-Light.otf")
        format("opentype");
    unicode-range: U+0030-0039, U+AC00- U+D7A3;
  }

  @font-face {
    font-family: "cu2FontFamily";
    font-weight: 400;
    src: local("Apple SD Gothic Neo Medium"),
      url("/fonts/AppleSDGothicNeo/400_AppleSDGothicNeo-Medium.woff2")
        format("woff2"),
      url("/fonts/AppleSDGothicNeo/400_AppleSDGothicNeo-Medium.otf")
        format("opentype");
    unicode-range: U+0030-0039, U+AC00- U+D7A3;
  }

  @font-face {
    font-family: "cu2FontFamily";
    font-weight: 500;
    src: local("Apple SD Gothic Neo Regular"),
      url("/fonts/AppleSDGothicNeo/500_AppleSDGothicNeo-Regular.woff2")
        format("woff2"),
      url("/fonts/AppleSDGothicNeo/500_AppleSDGothicNeo-Regular.otf")
        format("opentype");
    unicode-range: U+0030-0039, U+AC00- U+D7A3;
  }

  @font-face {
    font-family: "cu2FontFamily";
    font-weight: 600;
    src: local("Apple SD Gothic Neo SemiBold"),
      url("/fonts/AppleSDGothicNeo/600_AppleSDGothicNeo-SemiBold.woff2")
        format("woff2"),
      url("/fonts/AppleSDGothicNeo/600_AppleSDGothicNeo-SemiBold.otf")
        format("opentype");
    unicode-range: U+0030-0039, U+AC00- U+D7A3;
  }

  @font-face {
    font-family: "cu2FontFamily";

    font-weight: 700;
    src: local("Apple SD Gothic Neo Bold"),
      url("/fonts/AppleSDGothicNeo/700_AppleSDGothicNeo-Bold.woff2")
        format("woff2"),
      url("/fonts/AppleSDGothicNeo/700_AppleSDGothicNeo-Bold.otf")
        format("opentype");
    unicode-range: U+0030-0039, U+AC00- U+D7A3;
  }

  @font-face {
    font-family: "cu2FontFamily";
    font-weight: 800;
    src: local("Apple SD Gothic Neo ExtraBold"),
      url("/fonts/AppleSDGothicNeo/800_AppleSDGothicNeo-ExtraBold.woff2")
        format("woff2"),
      url("/fonts/AppleSDGothicNeo/800_AppleSDGothicNeo-ExtraBold.otf")
        format("opentype");
    unicode-range: U+0030-0039, U+AC00- U+D7A3;
  }

  @font-face {
    font-family: "cu2FontFamily";
    font-weight: 900;
    src: local("Apple SD Gothic Neo Heavy"),
      url("/fonts/AppleSDGothicNeo/900_AppleSDGothicNeo-Heavy.woff2")
        format("woff2"),
      url("/fonts/AppleSDGothicNeo/900_AppleSDGothicNeo-Heavy.otf")
        format("opentype");
    unicode-range: U+0030-0039, U+AC00- U+D7A3;
  }

  // Roboto
  @font-face {
    font-family: "cu2FontFamily";
    src: local("Roboto Thin"),
      url("/fonts/Roboto/100_Roboto-Thin.woff2") format("woff2"),
      url("/fonts/Roboto/100_Roboto-Thin.woff") format("woff");
    font-weight: 100;
    unicode-range: U+0041-005A, U+0061-007A;
  }
  @font-face {
    font-family: "cu2FontFamily";
    src: local("Roboto Light"),
      url("/fonts/Roboto/300_Roboto-Light.woff2") format("woff2"),
      url("/fonts/Roboto/300_Roboto-Light.woff") format("woff");
    font-weight: 300;
    unicode-range: U+0041-005A, U+0061-007A;
  }
  @font-face {
    font-family: "cu2FontFamily";
    src: local("Roboto Regular"),
      url("/fonts/Roboto/400_Roboto-Regular.woff2") format("woff2"),
      url("/fonts/Roboto/400_Roboto-Regular.woff") format("woff");
    font-weight: 400;
    unicode-range: U+0041-005A, U+0061-007A;
  }
  @font-face {
    font-family: "cu2FontFamily";
    src: local("Roboto Regular"),
      url("/fonts/Roboto/400_Roboto-Regular.woff2") format("woff2"),
      url("/fonts/Roboto/400_Roboto-Regular.woff") format("woff");
    font-weight: normal;
    unicode-range: U+0041-005A, U+0061-007A;
  }
  @font-face {
    font-family: "cu2FontFamily";
    src: local("Roboto Medium"),
      url("/fonts/Roboto/500_Roboto-Medium.woff2") format("woff2"),
      url("/fonts/Roboto/500_Roboto-Medium.woff") format("woff");
    font-weight: 500;
    unicode-range: U+0041-005A, U+0061-007A;
  }
  @font-face {
    font-family: "cu2FontFamily";
    src: local("Roboto Bold"),
      url("/fonts/Roboto/700_Roboto-Bold.woff2") format("woff2"),
      url("/fonts/Roboto/700_Roboto-Bold.woff") format("woff");
    font-weight: 700;
    unicode-range: U+0041-005A, U+0061-007A;
  }
  @font-face {
    font-family: "cu2FontFamily";
    src: local("Roboto Bold"),
      url("/fonts/Roboto/700_Roboto-Bold.woff2") format("woff2"),
      url("/fonts/Roboto/700_Roboto-Bold.woff") format("woff");
    font-weight: bold;
    unicode-range: U+0041-005A, U+0061-007A;
  }
  @font-face {
    font-family: "cu2FontFamily";
    src: local("Roboto Black"),
      url("/fonts/Roboto/900_Roboto-Black.woff2") format("woff2"),
      url("/fonts/Roboto/900_Roboto-Black.woff") format("woff");
    font-weight: 900;
    unicode-range: U+0041-005A, U+0061-007A;
  }
`;
