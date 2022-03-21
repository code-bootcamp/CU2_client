import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend05.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
      }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);

    // console.log("두번째로 실행되어야 하는거");
    const newAccessToken = result.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
